export interface TierPricing {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  borderColor: string;
  minServices: number;
  description: string;
  highlights: string[];
  channelCoverage: string[];
  pricingNote: string;
  startingKES: number;
  pricingRange: string;
}

export const TIERS: TierPricing[] = [
  {
    id: "platinum",
    name: "Platinum",
    color: "#6366F1",
    bgColor: "#EEF2FF",
    borderColor: "#C7D2FE",
    minServices: 7,
    description: "Full ecosystem integration across all FBF ventures. Maximum visibility, premium placements, and exclusive access to all sponsorship products.",
    highlights: [
      "Access to ALL 14 sponsorship products",
      "Title sponsorship across events",
      "Logo placement on all screens",
      "Exclusive VIP event access",
      "Dedicated account management",
      "Priority scheduling & placement",
      "Quarterly impact reports",
      "Custom content creation"
    ],
    channelCoverage: ["TV47", "Radio47", "YouTube", "Instagram", "TikTok", "Facebook", "LinkedIn", "X/Twitter", "Live Events", "Print Media"],
    pricingNote: "7+ offering combo pricing — contact for custom quote",
    startingKES: 5000000,
    pricingRange: "KES 5M — 15M+ per annum"
  },
  {
    id: "gold",
    name: "Gold",
    color: "#D4A832",
    bgColor: "#FFFBEB",
    borderColor: "#FDE68A",
    minServices: 5,
    description: "Multi-product sponsorship across key FBF ventures. Strong brand presence with premium content and event integration.",
    highlights: [
      "Access to 12 sponsorship products",
      "Co-branded content series",
      "Event sponsorship tiers",
      "Social media amplification",
      "Branded content production",
      "Monthly performance reports"
    ],
    channelCoverage: ["TV47", "Radio47", "YouTube", "Instagram", "TikTok", "Facebook", "Live Events"],
    pricingNote: "5+ offerings block pricing — bundled rates",
    startingKES: 2500000,
    pricingRange: "KES 2.5M — 7M per annum"
  },
  {
    id: "silver",
    name: "Silver",
    color: "#64748B",
    bgColor: "#F1F5F9",
    borderColor: "#CBD5E1",
    minServices: 3,
    description: "Targeted sponsorship across select FBF products. Focused brand integration with key content and digital channels.",
    highlights: [
      "Access to 9 sponsorship products",
      "Per-item offering pricing",
      "Digital content placement",
      "Event participation",
      "Social media tags",
      "Episode-specific metrics"
    ],
    channelCoverage: ["TV47", "Radio47", "YouTube", "Instagram", "TikTok", "Live Events"],
    pricingNote: "Per-item offering pricing — flexible selection",
    startingKES: 1000000,
    pricingRange: "KES 1M — 3M per annum"
  },
  {
    id: "bronze",
    name: "Bronze",
    color: "#B45309",
    bgColor: "#FFF7ED",
    borderColor: "#FDBA74",
    minServices: 1,
    description: "Event-focused sponsorship package. Perfect entry point for brands exploring the FBF ecosystem.",
    highlights: [
      "Access to 5 sponsorship products",
      "Event-packaged pricing",
      "On-ground brand presence",
      "Social media mentions",
      "Post-event reports"
    ],
    channelCoverage: ["Live Events", "Social Media", "Radio47"],
    pricingNote: "Event-packaged pricing — single event or series",
    startingKES: 150000,
    pricingRange: "KES 150K — 1M per event/series"
  }
];

export interface RateCardItem {
  service: string;
  serviceId: string;
  offerings: {
    name: string;
    platinum: boolean;
    gold: boolean;
    silver: boolean;
    bronze: boolean;
    unit: string;
    costDescription: string;
    estimatedKES?: number;
    estimatedUSD?: number;
  }[];
}

export const RATE_CARD: RateCardItem[] = [
  {
    service: "Audio/Video Podcast Series",
    serviceId: "arena-conversations",
    offerings: [
      { name: "Paid media placements (quarterly)", platinum: true, gold: true, silver: true, bronze: false, unit: "Per Episode", costDescription: "Cost per episode", estimatedKES: 150000 },
      { name: "Logo placement top right screen", platinum: true, gold: false, silver: false, bronze: false, unit: "Per Season", costDescription: "Season branding", estimatedKES: 500000 },
      { name: "Logo transition bottom left", platinum: true, gold: true, silver: true, bronze: false, unit: "Per Episode", costDescription: "Transition branding", estimatedKES: 100000 },
      { name: "Product placement on set", platinum: true, gold: true, silver: true, bronze: false, unit: "Per Episode", costDescription: "Physical product integration", estimatedKES: 200000 },
      { name: "Podcast naming rights", platinum: true, gold: false, silver: false, bronze: false, unit: "Per Season", costDescription: "Title sponsorship", estimatedKES: 2000000 },
    ]
  },
  {
    service: "Live Studio Series",
    serviceId: "arena-founder-studio-live",
    offerings: [
      { name: "Studio set branding", platinum: true, gold: true, silver: false, bronze: false, unit: "Per Show", costDescription: "Studio integration", estimatedKES: 300000 },
      { name: "Live audience brand activation", platinum: true, gold: true, silver: true, bronze: false, unit: "Per Show", costDescription: "Audience activation", estimatedKES: 250000 },
      { name: "Co-branded broadcast credits", platinum: true, gold: true, silver: false, bronze: false, unit: "Per Season", costDescription: "Credits placement", estimatedKES: 400000 },
    ]
  },
  {
    service: "Live Scope Events",
    serviceId: "arena-live-scope",
    offerings: [
      { name: "Event title sponsorship", platinum: true, gold: true, silver: true, bronze: true, unit: "Per Event", costDescription: "Title sponsor", estimatedKES: 500000 },
      { name: "Branded networking zone", platinum: true, gold: true, silver: false, bronze: false, unit: "Per Event", costDescription: "Zone branding", estimatedKES: 300000 },
      { name: "Product sampling", platinum: true, gold: true, silver: true, bronze: true, unit: "Per Event", costDescription: "Sampling activation", estimatedKES: 150000 },
    ]
  },
  {
    service: "BSC Festival",
    serviceId: "arena-bsc-festival",
    offerings: [
      { name: "Festival title sponsorship", platinum: true, gold: true, silver: false, bronze: false, unit: "Per Event", costDescription: "Flagship event", estimatedUSD: 300000 },
      { name: "Stage/zone naming rights", platinum: true, gold: true, silver: true, bronze: false, unit: "Per Zone", costDescription: "Zone branding", estimatedUSD: 50000 },
      { name: "Branded activations/booths", platinum: true, gold: true, silver: true, bronze: true, unit: "Per Event", costDescription: "Booth setup", estimatedUSD: 25000 },
    ]
  },
  {
    service: "Gala Dinner",
    serviceId: "arena-gala-dinner",
    offerings: [
      { name: "Award category sponsorship", platinum: true, gold: true, silver: false, bronze: false, unit: "Per Award", costDescription: "Award naming", estimatedKES: 1000000 },
      { name: "Table sponsorship", platinum: true, gold: true, silver: false, bronze: false, unit: "Per Table", costDescription: "VIP table", estimatedKES: 500000 },
      { name: "Red carpet branding", platinum: true, gold: false, silver: false, bronze: false, unit: "Per Event", costDescription: "Premium placement", estimatedKES: 750000 },
    ]
  },
  {
    service: "Founders' Kitchen",
    serviceId: "founders-kitchen",
    offerings: [
      { name: "Season title integration", platinum: true, gold: true, silver: false, bronze: false, unit: "Per Season", costDescription: "Title sponsorship", estimatedKES: 3000000 },
      { name: "Ingredient product placement", platinum: true, gold: true, silver: true, bronze: false, unit: "Per Episode", costDescription: "Natural placement", estimatedKES: 200000 },
      { name: "Co-branded recipe cards", platinum: true, gold: true, silver: true, bronze: false, unit: "Per Episode", costDescription: "Card production", estimatedKES: 50000 },
      { name: "Private dining event sponsorship", platinum: true, gold: true, silver: false, bronze: false, unit: "Per Event", costDescription: "Event hosting", estimatedKES: 400000 },
    ]
  },
  {
    service: "Angel Fair Private Hosting",
    serviceId: "arena-live-scope",
    offerings: [
      { name: "Investor lounge branding", platinum: true, gold: true, silver: false, bronze: false, unit: "Per Placement", costDescription: "Premium placement", estimatedUSD: 15000 },
      { name: "Startup pitch session sponsorship", platinum: true, gold: true, silver: true, bronze: true, unit: "Per Event", costDescription: "Session sponsor", estimatedUSD: 25000 },
    ]
  },
  {
    service: "Founders' Match-Making Convention",
    serviceId: "arena-bsc-festival",
    offerings: [
      { name: "Sponsored prize money", platinum: true, gold: true, silver: true, bronze: true, unit: "Per Event", costDescription: "Prize sponsor", estimatedUSD: 300000 },
      { name: "Competition naming rights", platinum: true, gold: false, silver: false, bronze: false, unit: "Per Event", costDescription: "Title rights", estimatedUSD: 200000 },
    ]
  }
];
