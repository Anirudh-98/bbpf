"use client";

import AnimatedStatValue from "./AnimatedStatValue";

export default function AnimatedStatCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  return (
    <AnimatedStatValue
      value={`${prefix}${target.toLocaleString("en-US")}${suffix}`}
      duration={duration}
    />
  );
}
