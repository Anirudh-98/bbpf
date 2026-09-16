export type Step = {
  number: string;
  title: string;
  body: string;
};

export default function Stepper({
  steps,
  variant = "compact",
}: {
  steps: Step[];
  variant?: "compact" | "full";
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <div
          key={step.number}
          className="group relative flex flex-col gap-3.5 rounded-3xl border border-stone-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:border-stone-300 hover:shadow-card hover:-translate-y-1"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/20 text-sm font-extrabold text-forest shadow-xs">
              {step.number}
            </span>
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              Step {step.number}
            </span>
          </div>
          <h3 className="text-base font-bold text-forest md:text-lg">
            {step.title}
          </h3>
          <p
            className={
              variant === "full"
                ? "text-sm leading-relaxed text-stone-600"
                : "text-sm leading-relaxed text-stone-600"
            }
          >
            {step.body}
          </p>
        </div>
      ))}
    </div>
  );
}
