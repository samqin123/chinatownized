import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "village-vibes",
    title: "Village Vibes",
    description:
      "From the fields of Guizhou to the markets of Yunnan — dispatches where China still lives at village speed.",
    emoji: "🏘️",
    color: "bg-amber-50",
  },
  {
    slug: "hanfu-diaries",
    title: "Hanfu Diaries",
    description:
      "Walking ancient capitals in silk. Where to rent, how to pose, and why Luoyang after dark beats any costume party.",
    emoji: "👘",
    color: "bg-rose-50",
  },
  {
    slug: "cyberpunk-cities",
    title: "Cyberpunk Cities",
    description:
      "Chongqing's 8D terrain. Trains through buildings. Neon drowning the Yangtze. China's future is already here.",
    emoji: "🌃",
    color: "bg-indigo-50",
  },
  {
    slug: "china-spa",
    title: "China Spa Culture",
    description:
      "24-hour bathhouses, hotpot in pajamas, and why TikTok is obsessed with Chinese wellness.",
    emoji: "🧖",
    color: "bg-emerald-50",
  },
  {
    slug: "hidden-nature",
    title: "Hidden Nature",
    description:
      "Beyond Yangshuo. Shennongjia's misty peaks, Fanjingshan's temple in the clouds — nature without the tour bus.",
    emoji: "🏔️",
    color: "bg-teal-50",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
