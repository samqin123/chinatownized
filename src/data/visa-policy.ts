export const unilateralVisaFreeCountries = [
  "Brunei",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Netherlands",
  "Switzerland",
  "Ireland",
  "Hungary",
  "Austria",
  "Belgium",
  "Luxembourg",
  "New Zealand",
  "Australia",
  "Poland",
  "Portugal",
  "Greece",
  "Cyprus",
  "Slovenia",
  "Slovakia",
  "Norway",
  "Finland",
  "Denmark",
  "Iceland",
  "Andorra",
  "Monaco",
  "Liechtenstein",
  "Republic of Korea",
  "Bulgaria",
  "Romania",
  "Croatia",
  "Montenegro",
  "North Macedonia",
  "Malta",
  "Estonia",
  "Latvia",
  "Japan",
  "Brazil",
  "Argentina",
  "Chile",
  "Peru",
  "Uruguay",
  "Saudi Arabia",
  "Oman",
  "Kuwait",
  "Bahrain",
  "Russia",
  "Sweden",
  "Canada",
  "United Kingdom",
] as const;

export const transitEligibleCountries = [
  "Albania",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Ukraine",
  "United Kingdom",
  "Canada",
  "United States",
  "Argentina",
  "Brazil",
  "Chile",
  "Mexico",
  "Australia",
  "New Zealand",
  "Brunei",
  "Indonesia",
  "Japan",
  "Qatar",
  "Singapore",
  "South Korea",
  "United Arab Emirates",
] as const;

export type VisaPurpose =
  | "tourism"
  | "business"
  | "family"
  | "exchange"
  | "transit"
  | "work"
  | "study"
  | "news";

export function normalizeCountryName(input: string) {
  return input.trim().toLowerCase();
}

export function findCountryMatch(input: string, countries: readonly string[]) {
  const value = normalizeCountryName(input);
  return countries.find((country) => normalizeCountryName(country) === value);
}

export function isUnilateralVisaFreeCountry(input: string) {
  return Boolean(findCountryMatch(input, unilateralVisaFreeCountries));
}

export function isTransitEligibleCountry(input: string) {
  return Boolean(findCountryMatch(input, transitEligibleCountries));
}

export function getVisaAdvice(options: {
  nationality: string;
  purpose: VisaPurpose;
  stayDays: number;
  transitMode: boolean;
}) {
  const nationality = options.nationality.trim();
  const stayDays = Number.isFinite(options.stayDays) ? options.stayDays : 0;
  const transitMode = options.transitMode;
  const unilateral = isUnilateralVisaFreeCountry(nationality);
  const transit = isTransitEligibleCountry(nationality);

  if (!nationality) {
    return {
      status: "missing",
      title: "Enter a nationality",
      description: "Pick a country first so the calculator can check the current policy.",
      bullets: [] as string[],
      links: [
        {
          label: "MFA visa-free FAQ",
          href: "https://www.mfa.gov.cn/wjbzwfwpt/kzx/tzgg/202511/t20251110_11749824.html",
        },
      ],
    };
  }

  if (transitMode) {
    if (transit) {
      return {
        status: "eligible",
        title: "240-hour visa-free transit",
        description:
          "Eligible for China's 240-hour visa-free transit policy if you hold onward tickets to a third country/region and stay within the allowed area.",
        bullets: [
          "Stay up to 240 hours (10 days).",
          "Available at 65 ports across 24 provinces/regions/municipalities.",
          "Tourism, business, visiting family and exchange visits are allowed.",
          "Work, study and news reporting still require the proper visa.",
        ],
        links: [
          {
            label: "NIA 240-hour policy",
            href: "https://en.nia.gov.cn/n147418/n147463/c183412/content.html",
          },
        ],
      };
    }

    return {
      status: "limited",
      title: "24-hour transit only",
      description:
        "This nationality is not in the 240-hour list, but China still allows 24-hour visa-free transit for most other nationalities if you stay airside or within the restricted port area.",
      bullets: [
        "Valid onward international ticket required.",
        "If you need to leave the restricted port area, ask the port authority for a temporary entry permit.",
      ],
      links: [
        {
          label: "NIA transit policy",
          href: "https://en.nia.gov.cn/n147418/n147463/c183412/content.html",
        },
      ],
    };
  }

  if (unilateral) {
    if (stayDays <= 30) {
      return {
        status: "eligible",
        title: "30-day visa-free entry",
        description:
          "This nationality is on China's unilateral visa-free list for ordinary passport holders.",
        bullets: [
          "Valid for business, tourism, family/friends visits, exchange visits and transit.",
          "Maximum stay: 30 calendar days.",
          "The current policy schedule is published by the Chinese MFA.",
        ],
        links: [
          {
            label: "MFA FAQ",
            href: "https://www.mfa.gov.cn/wjbzwfwpt/kzx/tzgg/202511/t20251110_11749824.html",
          },
        ],
      };
    }

    return {
      status: "warn",
      title: "Visa-free applies, but your stay is too long",
      description:
        "This nationality is eligible for visa-free entry, but stays must not exceed 30 days.",
      bullets: [
        "Reduce the planned stay to 30 days or less.",
        "For longer stays, apply for the appropriate visa before travel.",
      ],
      links: [
        {
          label: "MFA FAQ",
          href: "https://www.mfa.gov.cn/wjbzwfwpt/kzx/tzgg/202511/t20251110_11749824.html",
        },
      ],
    };
  }

  if (options.purpose === "transit") {
    return {
      status: "limited",
      title: "Transit may work, but check the route",
      description:
        "China's 24-hour transit policy can still apply if you remain within the restricted area. For any longer transit plan, you need the 240-hour list or a visa.",
      bullets: [
        "Use the 240-hour calculator if you are transiting to a third country.",
        "If your trip is not transit, you need a standard visa.",
      ],
      links: [
        {
          label: "NIA transit policy",
          href: "https://en.nia.gov.cn/n147418/n147463/c183412/content.html",
        },
      ],
    };
  }

  return {
    status: "visa",
    title: "Standard visa required",
    description:
      "This nationality is not covered by the current unilateral visa-free policy for the selected trip length and purpose.",
    bullets: [
      "Apply for the appropriate visa before travel.",
      "Check the official visa page for category-specific requirements.",
      "If you are only transiting, re-check the transit rules.",
    ],
    links: [
      {
        label: "MFA visa page",
        href: "https://cs.mfa.gov.cn/wgrlh/lhqz/",
      },
      {
        label: "NIA transit policy",
        href: "https://en.nia.gov.cn/n147418/n147463/c183412/content.html",
      },
    ],
  };
}
