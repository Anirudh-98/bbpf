import ButtonPair from "./ButtonPair";
import Eyebrow from "./Eyebrow";

export default function CtaBanner({
  eyebrow,
  headingLead,
  headingAccent,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  headingLead: string;
  headingAccent?: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section-sm">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-gradient-to-b from-stone-900/90 via-forest-deep/95 to-forest-deep px-8 py-16 text-center text-white shadow-lifted md:px-16 md:py-24">
          {/* Subtle agricultural landscape atmosphere texture in background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(#9ee839_1px,transparent_1px)] [background-size:16px_16px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-lime/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-lime/10 blur-3xl"
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            {eyebrow && (
              <Eyebrow className="bg-white/10 text-white/90 border-white/20">
                {eyebrow}
              </Eyebrow>
            )}

            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl tracking-tight">
              {headingLead}{" "}
              {headingAccent && (
                <span className="font-serif italic font-normal text-lime">
                  {headingAccent}
                </span>
              )}
            </h2>

            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              {body}
            </p>

            <div className="pt-2">
              <ButtonPair primary={primary} secondary={secondary} onDark />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
