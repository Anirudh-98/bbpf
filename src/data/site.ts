export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Five Pillars", href: "/pillars" },
  { label: "Adopt a Village", href: "/adopt-a-village" },
  { label: "Impact", href: "/impact" },
];

export const footerQuickLinks = [
  { label: "Forestation", href: "/pillars/forestation" },
  { label: "Water Harvesting", href: "/pillars/water-harvesting" },
  { label: "Education", href: "/pillars/education" },
  { label: "Health", href: "/pillars/health" },
  { label: "Agriculture", href: "/pillars/agriculture" },
];

export const footerMoreLinks = [
  { label: "Tradition & Culture", href: "/tradition-culture" },
  { label: "Participate", href: "/participate" },
  { label: "Transparency", href: "/transparency" },
];

export const bankDetails = {
  bankName: "HDFC Bank",
  accountHolder: "Bharathiya Parampara Prathistan Foundation",
  accountNumber: "50200075134225",
  ifsc: "HDFC0002391",
  micr: "500240037",
};

type SocialLink = { label: string; href: string };

export const contactInfo: {
  email: string;
  website: string;
  youtube: SocialLink;
  instagram: SocialLink;
  /** Add BPPF's Facebook page here, e.g. { label: "Facebook", href: "https://www.facebook.com/..." }. Hidden while unset. */
  facebook?: SocialLink;
  cin: string;
  /** WhatsApp chat number: country code + number, digits only (wa.me format). */
  whatsappNumber: string;
} = {
  email: "bppf.fou@gmail.com",
  website: "www.bppfindia.org",
  youtube: { label: "@Bppfindia", href: "https://www.youtube.com/@Bppfindia" },
  instagram: { label: "@indiabppf", href: "https://www.instagram.com/indiabppf" },
  cin: "U85300TG2022NPL167836",
  whatsappNumber: "918977007978", // +91 89770 07978
};

export const siteUrl = "https://www.bppfindia.org";
