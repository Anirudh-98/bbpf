export default function LeadershipCard({
  name,
  role,
  bio,
}: {
  name: string;
  role: string;
  bio: string;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group relative flex flex-col items-start gap-4 rounded-3xl border border-stone-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:border-stone-300 hover:shadow-card hover:-translate-y-1">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime/25 text-base font-extrabold text-forest shadow-xs">
        {initials}
      </span>
      <div>
        <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-stone-600">
          {role}
        </span>
        <h3 className="mt-2 text-lg font-bold text-forest">{name}</h3>
      </div>
      <p className="text-sm leading-relaxed text-stone-600">{bio}</p>
    </div>
  );
}
