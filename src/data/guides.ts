import type { Guide } from "@/types";

export const guides: Guide[] = [
  {
    slug: "cun-chao-complete-guide",
    title: "Village Super League: China's Most Authentic Football Experience (and Why You Need to Go)",
    excerpt:
      "Forget the Premier League. In rural Guizhou, farmers and shopkeepers pack stadiums for football matches that feel more like festivals — and the world is starting to notice.",
    dateline: "RONGJIANG, Guizhou",
    category: "village-vibes",
    author: {
      name: "Marcus Chen",
      avatar: "/authors/marcus.jpg",
      bio: "Beijing-based travel writer since 2019. Has watched more grassroots football matches than professional ones.",
    },
    publishedAt: "2026-04-10",
    image: "/images/cun-chao-stadium.jpg",
    imageAlt:
      "Packed stadium in Rongjiang county, Guizhou, with villagers watching a Village Super League match at dusk",
    readTime: 12,
    featured: true,
    tags: ["football", "guizhou", "rural china", "festivals"],
    body: "",
    faq: [
      {
        question: "What is the Village Super League (Cun Chao)?",
        answer:
          "The Village Super League, or 'Cun Chao' (村超), is a grassroots football tournament held in Rongjiang County, Guizhou Province. Teams are made up of local villagers — farmers, shopkeepers, taxi drivers — and matches draw tens of thousands of spectators. It went viral on Chinese social media in 2023 and has since attracted international attention.",
      },
      {
        question: "When is the best time to visit for Cun Chao matches?",
        answer:
          "The main tournament runs from May to July each year, with finals typically in late July. There are also exhibition matches and cultural events throughout the summer months. Weekend matches draw the biggest crowds.",
      },
      {
        question: "Do I need to speak Chinese to enjoy it?",
        answer:
          "No! The atmosphere is universal — crowds cheering, drums beating, fireworks after goals. The local tourism bureau has been increasing English signage and some volunteers speak basic English. Download a translation app and you'll be fine.",
      },
      {
        question: "How do I get to Rongjiang?",
        answer:
          "Take a high-speed train from Guiyang (about 1.5 hours) or from Kaili. Rongjiang has its own HSR station. From the station, it's a short taxi ride to the stadium. Book train tickets via Trip.com or 12306.",
      },
    ],
  },
  {
    slug: "luoyang-hanfu-after-dark",
    title: "Walking Luoyang in Silk: Why Nighttime Is the Best Time for Hanfu Photos",
    excerpt:
      "When the lanterns come on in Luoyang's ancient city, the real magic begins. Thousands of visitors — Chinese and foreign alike — transform into Tang Dynasty nobles for the night.",
    dateline: "LUOYANG, Henan",
    category: "hanfu-diaries",
    author: {
      name: "Sofia Reyes",
      avatar: "/authors/sofia.jpg",
      bio: "Mexico City native documenting China's cultural revival one dynasty at a time.",
    },
    publishedAt: "2026-03-22",
    image: "/images/luoyang-hanfu-night.jpg",
    imageAlt:
      "Foreign tourists wearing Tang Dynasty hanfu posing under red lanterns at Luoyang's Yingtian Gate at night",
    readTime: 9,
    featured: true,
    tags: ["hanfu", "luoyang", "tang dynasty", "photography"],
    body: "",
  },
  {
    slug: "chongqing-cyberpunk-survival-guide",
    title: "Chongqing Survival Guide: Navigating China's 8D Cyberpunk City",
    excerpt:
      "Your map app will fail you. Your legs will ache. But the view from the 22nd floor — which is somehow also ground level — will be worth every step.",
    dateline: "CHONGQING",
    category: "cyberpunk-cities",
    author: {
      name: "Marcus Chen",
      avatar: "/authors/marcus.jpg",
      bio: "Beijing-based travel writer since 2019. Has walked more Chongqing stairs than he cares to count.",
    },
    publishedAt: "2026-05-05",
    image: "/images/chongqing-night.jpg",
    imageAlt:
      "Hongyadong complex lit up at night overlooking the Jialing River in Chongqing",
    readTime: 11,
    featured: true,
    tags: ["chongqing", "architecture", "night photography", "urban"],
    body: "",
  },
  {
    slug: "china-bathhouse-guide",
    title: "The Foreigner's Guide to Chinese Bathhouses: From Terrified to Converted in 24 Hours",
    excerpt:
      "You'll be naked. Strangers will scrub you. At 2 AM you'll be eating hotpot in pajamas. Here's why it's the best thing you'll do in China.",
    dateline: "SHENYANG, Liaoning",
    category: "china-spa",
    author: {
      name: "Sofia Reyes",
      avatar: "/authors/sofia.jpg",
      bio: "Mexico City native. Converted bathhouse evangelist. Will defend the pajama-hotpot combo to her death.",
    },
    publishedAt: "2026-02-14",
    image: "/images/china-bathhouse.jpg",
    imageAlt:
      "Interior of a luxurious 24-hour Chinese bathhouse with lounging areas and hot spring pools",
    readTime: 10,
    tags: ["bathhouse", "spa", "wellness", "northeast china"],
    body: "",
  },
  {
    slug: "shennongjia-mystery",
    title: "Searching for the 'Wild Man' in Shennongjia: China's Most Mysterious Forest",
    excerpt:
      "In Singapore you don't see this kind of place. Mist-shrouded peaks, biodiversity that rivals the Amazon, and legends of an undiscovered ape-man.",
    dateline: "SHENNONGJIA, Hubei",
    category: "hidden-nature",
    author: {
      name: "Marcus Chen",
      avatar: "/authors/marcus.jpg",
      bio: "Beijing-based travel writer. Once spent three days lost in Shennongjia. Regrets nothing.",
    },
    publishedAt: "2026-01-28",
    image: "/images/shennongjia-mist.jpg",
    imageAlt:
      "Misty mountain peaks and dense forest in Shennongjia National Park, Hubei province",
    readTime: 8,
    tags: ["nature", "hiking", "hubei", "wildlife"],
    body: "",
  },
  {
    slug: "fanjingshan-temple-clouds",
    title: "Fanjingshan: Climbing to the Temple That Floats in the Clouds",
    excerpt:
      "Two ancient Buddhist temples sit atop a knife-edge peak, connected by a stone bridge. Getting there requires 8,888 steps. Worth it.",
    dateline: "TONGREN, Guizhou",
    category: "hidden-nature",
    author: {
      name: "Sofia Reyes",
      avatar: "/authors/sofia.jpg",
      bio: "Mexico City native. Has climbed every sacred mountain in China and has the calf muscles to prove it.",
    },
    publishedAt: "2026-04-02",
    image: "/images/fanjingshan-temple.jpg",
    imageAlt:
      "The twin temples of Fanjingshan connected by a stone bridge, surrounded by clouds and steep cliffs",
    readTime: 9,
    tags: ["mountains", "buddhism", "guizhou", "hiking", "unesco"],
    body: "",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: string): Guide[] {
  return guides.filter((g) => g.category === category);
}

export function getFeaturedGuides(): Guide[] {
  return guides.filter((g) => g.featured);
}

export function getRecentGuides(count: number = 6): Guide[] {
  return [...guides]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, count);
}
