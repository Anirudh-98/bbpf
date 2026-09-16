import AnimatedStatValue from "./AnimatedStatValue";

export type Stat = {
  value: string;
  label: string;
  verified?: boolean;
};

export default function StatBlock({
  stats,
  className = "",
}: {
  stats: Stat[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl border border-stone-200/80 bg-white/95 p-6 md:p-8 shadow-soft divide-stone-200/80 sm:divide-x ${className}`}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`flex flex-col items-center text-center px-4 md:px-6 ${
            i !== 0 ? "sm:border-stone-100" : ""
          }`}
        >
          <div className="flex items-baseline gap-1">
            <AnimatedStatValue
              value={stat.value}
              className={`text-3xl md:text-5xl font-extrabold tracking-tight ${
                stat.verified
                  ? "text-forest"
                  : "text-stone-400 font-normal"
              }`}
            />
          </div>
          <span className="mt-2 text-xs md:text-sm font-medium text-stone-600">
            {stat.label}
          </span>
          {!stat.verified && (
            <span className="mt-1 text-[11px] text-stone-400">Pending verification</span>
          )}
        </div>
      ))}
    </div>
  );
}
