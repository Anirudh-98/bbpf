import Eyebrow from "./Eyebrow";
import Accordion, { type AccordionItem } from "./Accordion";
import Reveal from "./Reveal";

const faqItems: AccordionItem[] = [
  {
    number: "01",
    title: "Can this change be achieved?",
    body: "Yes. It can be achieved through humanitarian principles, knowledge, wisdom, and transparency in all aspects. By working together, individuals, communities, and stakeholders can restore ecosystems, reverse deforestation, and create a greener and healthier future for villages.",
  },
  {
    number: "02",
    title: "How does the BPPF Adopt a Village model work?",
    body: "An individual or group can adopt a village by investing around ₹10 lakhs for its complete development over a 5–6 year period. The work is carried out through knowledge, technology, and innovative ideas, combined with traditional and experienced agricultural principles.",
  },
  {
    number: "03",
    title: "How are trees selected for the 50,000 plantation per village?",
    body: "Trees are selected based on local environmental conditions, soil suitability, water availability, and the needs of the community. The focus is on indigenous and fruit-bearing species that can support biodiversity, improve green cover, and provide long-term benefits to farmers and villages.",
  },
  {
    number: "04",
    title: "Is BPPF an officially registered non-profit organization?",
    body: "Yes, Bharathiya Parampara Prathistan Foundation is incorporated as a MCA Registered under Section 8 Company under the Ministry of Corporate Affairs, Government of India (CIN: U85300TG2022NPL167836). All initiatives adhere to strict governance, audit, and transparency standards.",
  },
  {
    number: "05",
    title: "Can individuals or corporations partner for CSR initiatives?",
    body: "Yes. Individuals and organizations can participate in the village development model by supporting projects through adoption, funding, CSR initiatives, and community-led programs. Contributions can support activities such as water restoration, tree plantation, agriculture, education, and overall village development.",
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
