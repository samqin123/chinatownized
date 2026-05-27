import type { CategorySlug } from "@/types";

export type PartnerId =
  | "jd"
  | "ctrip"
  | "china-eastern"
  | "air-china"
  | "hilton"
  | "dianping";

export interface PartnerWindow {
  id: PartnerId;
  title: string;
  partner: string;
  description: string;
  url: string;
  image: string;
  badge: string;
}

const partnerLibrary: Record<PartnerId, Omit<PartnerWindow, "id">> = {
  jd: {
    title: "Travel Gear on JD",
    partner: "JD.com",
    description: "Books, souvenirs, portable batteries, and trip essentials before you leave.",
    url: "https://www.jd.com/",
    image: "/images/partners/jd.svg",
    badge: "Shop",
  },
  ctrip: {
    title: "Book Hotels & Tickets",
    partner: "Trip.com / Ctrip",
    description: "Hotels, attraction tickets, transfers, and train add-ons in one place.",
    url: "https://www.ctrip.com/",
    image: "/images/partners/ctrip.svg",
    badge: "Book",
  },
  "china-eastern": {
    title: "Fly East China Air",
    partner: "China Eastern",
    description: "Good for Shanghai, Chengdu, and domestic hops when you want easy connections.",
    url: "https://www.ceair.com/",
    image: "/images/partners/china-eastern.svg",
    badge: "Flights",
  },
  "air-china": {
    title: "Fly Air China",
    partner: "Air China",
    description: "Useful for Beijing and the northern network, especially if you are circling museums.",
    url: "https://www.airchina.com.cn/",
    image: "/images/partners/air-china.svg",
    badge: "Flights",
  },
  hilton: {
    title: "Stay at Hilton",
    partner: "Hilton",
    description: "Reliable hotel bases near the routes, museums, and late-night food blocks.",
    url: "https://www.hilton.com/",
    image: "/images/partners/hilton.svg",
    badge: "Hotels",
  },
  dianping: {
    title: "Find Food on Dianping",
    partner: "Dianping",
    description: "Restaurant lookup, neighborhood browsing, and nearby dinner decisions.",
    url: "https://www.dianping.com/",
    image: "/images/partners/dianping.svg",
    badge: "Food",
  },
};

const categoryWindows: Record<CategorySlug, PartnerId[]> = {
  museums: ["air-china", "ctrip", "hilton", "jd", "dianping", "china-eastern"],
  "ancient-towns": ["ctrip", "hilton", "dianping", "jd", "china-eastern", "air-china"],
  citywalks: ["dianping", "ctrip", "jd", "hilton", "china-eastern", "air-china"],
  "village-vibes": ["ctrip", "jd", "hilton"],
  "hanfu-diaries": ["ctrip", "jd", "hilton"],
  "cyberpunk-cities": ["air-china", "ctrip", "dianping"],
  "china-spa": ["ctrip", "hilton", "dianping"],
  "hidden-nature": ["ctrip", "jd", "hilton"],
};

export function getPartnerWindows(category: CategorySlug): PartnerWindow[] {
  return categoryWindows[category].map((id) => ({
    id,
    ...partnerLibrary[id],
  }));
}
