export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-stone-200/80 bg-stone-100/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-stone-700 backdrop-blur-sm shadow-sm ${className}`}>
      <span className="inline-block h-2 w-2 rounded-full bg-lime shadow-sm" />
      <span>{children}</span>
    </div>
  );
}
