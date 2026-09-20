"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type ParsedStat = {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
};

function parseStatValue(raw: string): ParsedStat | null {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const cleaned = numStr.replace(/,/g, "");
  const number = parseFloat(cleaned);
  if (Number.isNaN(number)) return null;
  const decimals = cleaned.includes(".") ? cleaned.split(".")[1].length : 0;
  return { prefix, number, suffix, decimals };
}

function formatNumber(n: number, decimals: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function AnimatedStatValue({
  value,
  duration = 1800,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() =>
    parsed ? formatNumber(0, parsed.decimals) : ""
  );

  useEffect(() => {
    const el = ref.current;
    if (!parsed || !el) return;

    let frame = 0;
    let started = false;
    const finalText = formatNumber(parsed.number, parsed.decimals);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(finalText);
          return;
        }

        let startTime: number | null = null;
        const animate = (time: number) => {
          if (startTime === null) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(
            progress < 1 ? formatNumber(eased * parsed.number, parsed.decimals) : finalText
          );
          if (progress < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [parsed, duration]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {/* Screen readers and crawlers get the real figure, not a mid-animation number. */}
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {parsed.prefix}
        {display}
        {parsed.suffix}
      </span>
    </span>
  );
}
