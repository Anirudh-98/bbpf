"use client";

import { useEffect, useRef, useState } from "react";

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
  const parsedRef = useRef(parseStatValue(value));
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);
  const [display, setDisplay] = useState(() =>
    parsedRef.current ? formatNumber(0, parsedRef.current.decimals) : ""
  );

  useEffect(() => {
    const parsed = parsedRef.current;
    const el = ref.current;
    if (!parsed || !el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let startTime: number | null = null;

          const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(formatNumber(eased * parsed.number, parsed.decimals));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(formatNumber(parsed.number, parsed.decimals));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [duration]);

  const parsed = parsedRef.current;
  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
