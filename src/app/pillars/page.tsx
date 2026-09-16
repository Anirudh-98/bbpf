import type { Metadata } from "next";
import FivePillarsSection from "@/components/FivePillarsSection";

export const metadata: Metadata = {
  title: "Five Pillars — One Integrated Mission",
  description:
    "Forestation, Water Harvesting, Agriculture, Education and Health — the five pillars of BPPF's integrated village model.",
};

export default function PillarsHubPage() {
  return (
    <main>
      <FivePillarsSection
        asH1
        eyebrow="OUR APPROACH"
        className="pt-20 md:pt-24 lg:pt-28"
      />
    </main>
  );
}
