import {
  BookOpen,
  Droplets,
  Flower2,
  Trees,
  Wheat,
  type LucideIcon,
} from "lucide-react";

export type Pillar = {
  slug: string;
  number: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  name: string;
  hook: string;
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  headingTrail?: string;
  body: string;
  focus: string[];
  objective: string;
};

export const pillars: Pillar[] = [
  {
    slug: "forestation",
    number: "01",
    icon: Trees,
    image: "/images/pillar-forestation.webp",
    imageAlt: "A young woman and an elderly man planting a sapling in red soil while a boy holds a pot of water",
    name: "Forestation",
    hook: "Restoring the green foundation — up to 50,000 trees per village.",
    eyebrow: "Pillar 01",
    headingLead: "Restore the",
    headingAccent: "Green",
    headingTrail: "Foundation",
    body: "Forests and tree cover are fundamental to ecological balance. Our forestation initiative focuses on countering deforestation, increasing tree cover, supporting biodiversity and improving air quality. Our stated ambition is 50,000 trees planted in every village we work with — and forestation efforts are already underway across 120 villages.",
    focus: [
      "Tree plantation",
      "Ecological restoration",
      "Biodiversity",
      "Air quality",
      "Community participation",
      "Long-term stewardship",
    ],
    objective: "Create villages where natural ecosystems become part of the community's future.",
  },
  {
    slug: "water-harvesting",
    number: "02",
    icon: Droplets,
    image: "/images/pillar-water.webp",
    imageAlt: "A woman opening a hand-dug channel to carry pond water into her vegetable rows",
    name: "Water Harvesting",
    hook: "Rainwater and groundwater restoration for farms and families.",
    eyebrow: "Pillar 02",
    headingLead: "Restore Water. Secure the",
    headingAccent: "Future.",
    body: "Water is the foundation of rural life. Our water initiatives focus on rainwater harvesting, groundwater restoration and creating sustainable water sources for both agriculture and household needs.",
    focus: [
      "Rainwater harvesting",
      "Groundwater restoration",
      "Water conservation",
      "Agricultural water security",
      "Community water resources",
    ],
    objective: "Protect and restore the water systems that sustain villages.",
  },
  {
    slug: "agriculture",
    number: "03",
    icon: Wheat,
    image: "/images/pillar-agriculture.webp",
    imageAlt: "An elderly woman farmer laughing, holding freshly harvested sorghum ears in a golden field",
    name: "Agriculture",
    hook: "Helping farmers move from chemical to natural farming.",
    eyebrow: "Pillar 03",
    headingLead: "From Chemical Dependence to",
    headingAccent: "Sustainable",
    headingTrail: "Farming",
    body: "Farmers are at the centre of rural economic life. BPPF helps farmers move from chemical to natural farming, connecting this transition directly to soil conservation and long-term environmental protection.",
    focus: [
      "Natural farming",
      "Organic / sustainable practices",
      "Soil conservation",
      "Farmer empowerment",
      "Food quality",
      "Rural livelihoods",
    ],
    objective: "Build an agricultural system that supports both the farmer and the land.",
  },
  {
    slug: "education",
    number: "04",
    icon: BookOpen,
    image: "/images/pillar-education.webp",
    imageAlt: "A schoolgirl writing in her notebook in a village classroom",
    name: "Education",
    hook: "Strengthening government schools with resources and innovation.",
    eyebrow: "Pillar 04",
    headingLead: "Build the",
    headingAccent: "Next",
    headingTrail: "Generation",
    body: "A sustainable village needs more than natural resources — it needs people with knowledge, opportunity and confidence. Our education initiative supports government schools with resources while encouraging innovation and environmental awareness.",
    focus: [
      "Government school support",
      "Educational resources",
      "Innovation",
      "Environmental awareness",
      "Rural youth development",
    ],
    objective: "Give rural children the knowledge and opportunity to become tomorrow's community leaders.",
  },
  {
    slug: "health",
    number: "05",
    icon: Flower2,
    image: "/images/pillar-health.webp",
    imageAlt: "Villagers of all ages doing yoga with raised arms at sunrise on the village common ground",
    name: "Health",
    hook: "Holistic wellbeing through yoga, meditation and Ayurveda.",
    eyebrow: "Pillar 05",
    headingLead: "Health as a",
    headingAccent: "Whole",
    body: "We approach health holistically — emphasizing harmony between mind, body and spirit through time-tested practices like yoga, meditation and Ayurveda.",
    focus: [
      "Holistic wellbeing",
      "Yoga",
      "Meditation",
      "Ayurveda",
      "Healthy living",
      "Community awareness",
    ],
    objective: "Promote healthier lives through knowledge, prevention, wellbeing and traditional practice.",
  },
];

export const getPillarBySlug = (slug: string) => pillars.find((p) => p.slug === slug);
