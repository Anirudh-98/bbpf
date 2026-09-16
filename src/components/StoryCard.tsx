const fields = [
  { key: "village", label: "The Village" },
  { key: "challenge", label: "The Challenge" },
  { key: "intervention", label: "The Intervention" },
  { key: "community", label: "The Community" },
  { key: "change", label: "The Change" },
  { key: "evidence", label: "The Evidence" },
  { key: "nextStep", label: "The Next Step" },
] as const;

export default function StoryCard() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-dashed border-stone-300 bg-stone-50/80 p-7 shadow-soft">
      <span className="w-fit rounded-full bg-stone-200/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-500">
        Template — pending documentation
      </span>
      <div className="space-y-3">
        {fields.map((field) => (
          <div key={field.key}>
            <p className="text-xs font-bold uppercase tracking-wide text-forest">
              {field.label}
            </p>
            <p className="text-sm text-stone-500">
              To be added once this village case is documented and photographed.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
