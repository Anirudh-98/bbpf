import Eyebrow from "./Eyebrow";
import Accordion, { type AccordionItem } from "./Accordion";
import Reveal from "./Reveal";

const faqItems: AccordionItem[] = [
  {
    number: "01",
    title: "How does the BPPF Adopt a Village model work?",
    body: "Adopt a Village brings together soil restoration, water harvesting, 50,000 tree plantations, education, and healthcare into one coordinated 6-step transformation program. Rather than piecemeal charity, it creates an enduring, economically self-sustaining rural ecosystem.",
  },
  {
    number: "02",
    title: "What makes BPPF's natural farming approach different from conventional methods?",
    body: "We combine indigenous agricultural wisdom (Parampara) with scientific ecological monitoring. Farmers are guided away from toxic and expensive chemical fertilizers towards biological bio-inputs and multi-layer cropping that restore topsoil biodiversity and lower farm expenditure.",
  },
  {
    number: "03",
    title: "How are trees selected for the 50,000 plantation per village?",
    body: "We prioritize native and endemic tree varieties suited to the local climate, soil chemistry, and water availability. This includes a mix of fruit-bearing trees, medicinal plants, canopy shade trees, and nitrogen-fixing species that directly benefit the local fauna and human community.",
  },
  {
    number: "04",
    title: "Is BPPF an officially registered non-profit organization?",
    body: "Yes, Bharathiya Parampara Prathistan Foundation is incorporated as a Section 8 Company under the Ministry of Corporate Affairs, Government of India (CIN: U85300TG2022NPL167836). All initiatives adhere to strict governance, audit, and transparency standards.",
  },
  {
    number: "05",
    title: "Can individuals or corporations partner for CSR initiatives?",
    body: "Absolutely. BPPF works actively with CSR partners, philanthropists, and individuals seeking verified, measurable rural impact across climate action, water security, farmer livelihoods, and rural education.",
  },
];

export default function FaqSection() {
  return (
    <section className="section bg-white">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-forest md:text-5xl">
            Common Questions About <span className="accent">BPPF</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-stone-600">
            Got questions? Here are straightforward answers to help you
            understand our mission, village model, and how to participate.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
