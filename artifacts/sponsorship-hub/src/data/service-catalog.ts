export interface SponsorshipService {
  id: string;
  name: string;
  shortName: string;
  category: "existing" | "new";
  description: string;
  visionStatement: string;
  channels: string[];
  frequency: string;
  keyDeliverables: string[];
  opportunities: string[];
  icon: string;
  color: string;
  tierAvailability: {
    platinum: boolean;
    gold: boolean;
    silver: boolean;
    bronze: boolean;
  };
}

export const SERVICE_CATALOG: SponsorshipService[] = [
  {
    id: "arena-conversations",
    name: "Arena Conversations",
    shortName: "Conversations",
    category: "existing",
    description: "Core flagship conversation series. Weekly deep-dive discussions with African founders and ecosystem players.",
    visionStatement: "To operate a consistent, high-quality recorded conversation series that captures long-form founder stories, systematically repurposes them into broadcast, digital, and social formats, and serves as the primary content backbone for The Arena ecosystem.",
    channels: ["TV47", "Radio47", "YouTube", "Spotify", "Apple Podcasts"],
    frequency: "Weekly (30 episodes/year)",
    keyDeliverables: [
      "30 podcast episodes per year",
      "Authentic founder storytelling",
      "Multi-platform digital distribution",
      "Broadcast-ready content for TV47 and Radio47"
    ],
    opportunities: [
      "Sponsored episodes with pre/mid-roll ads",
      "Branded intro/outros and host-read ads",
      "Product placement on set",
      "Logo placement on screen",
      "Sponsored series extensions"
    ],
    icon: "Mic",
    color: "#D32F2F",
    tierAvailability: { platinum: true, gold: true, silver: true, bronze: false }
  },
  {
    id: "arena-founder-dj",
    name: "Arena Founder DJ",
    shortName: "Founder DJ",
    category: "existing",
    description: "Founder-led radio experience with music + discussion on Radio47.",
    visionStatement: "To operate a weekly Friday evening engagement format that combines founder-led discussions, curated music, and cultural commentary, using radio and live-stage environments to drive relaxed but high-retention audience engagement and youth relevance.",
    channels: ["Radio47", "Social Media"],
    frequency: "Weekly (Friday evenings)",
    keyDeliverables: [
      "Weekly Radio47 broadcast slot",
      "Founder-curated music playlists",
      "Cultural commentary segments",
      "Youth audience engagement"
    ],
    opportunities: [
      "Branded DJ segments",
      "Sponsored music playlists",
      "Event activation partnerships",
      "Youth-targeted brand placement"
    ],
    icon: "Radio",
    color: "#8B5CF6",
    tierAvailability: { platinum: true, gold: true, silver: true, bronze: true }
  },
  {
    id: "arena-founder-studio-live",
    name: "Arena Founder Studio Live",
    shortName: "Studio Live",
    category: "existing",
    description: "Live studio TV show with audience. Monthly broadcast on TV47.",
    visionStatement: "To run a scheduled live studio format with controlled audiences, real-time broadcast integration, and social amplification, enabling direct founder-audience interaction while producing reusable content for TV, radio, and digital distribution.",
    channels: ["TV47", "Radio47", "YouTube", "Social Media"],
    frequency: "Monthly",
    keyDeliverables: [
      "Monthly live TV47 broadcast",
      "Live audience participation",
      "Real-time social engagement",
      "Post-show content derivatives"
    ],
    opportunities: [
      "Studio branding and set integration",
      "Live audience brand activation",
      "Sponsored segments",
      "Co-branded broadcast credits"
    ],
    icon: "Tv",
    color: "#0EA5E9",
    tierAvailability: { platinum: true, gold: true, silver: true, bronze: false }
  },
  {
    id: "arena-live-scope",
    name: "Arena Live Scope",
    shortName: "Live Scope",
    category: "existing",
    description: "On-ground live event. Monthly in-person gatherings with founders and community.",
    visionStatement: "To deliver a quarterly or monthly live-stage experience that blends moderated founder conversations, audience participation, and live broadcasting into a repeatable event format with clear production workflows, sponsor integration, and post-event content reuse.",
    channels: ["Live Events", "TV47", "Radio47", "Social Media"],
    frequency: "Monthly",
    keyDeliverables: [
      "Monthly in-person events (300+ attendees)",
      "Live broadcasting integration",
      "Moderated founder conversations",
      "Post-event content production"
    ],
    opportunities: [
      "Event title sponsorship",
      "Branded networking zones",
      "Product sampling and demos",
      "Sponsored VIP sections"
    ],
    icon: "Users",
    color: "#F59E0B",
    tierAvailability: { platinum: true, gold: true, silver: true, bronze: true }
  },
  {
    id: "arena-founder-retreat",
    name: "Arena Founder Retreat",
    shortName: "Founder Retreat",
    category: "existing",
    description: "Wellness and leadership retreat for founders. Half-yearly exclusive gatherings.",
    visionStatement: "To deliver curated wellness retreats with controlled group sizes, expert facilitation, and structured reflection sessions, prioritising founder wellbeing while enabling discreet brand partnerships aligned to health, balance, and performance.",
    channels: ["Exclusive Events", "Social Media", "Content"],
    frequency: "Half-yearly",
    keyDeliverables: [
      "Exclusive wellness retreats",
      "Expert-facilitated sessions",
      "Structured founder reflection",
      "Premium content production"
    ],
    opportunities: [
      "Wellness brand partnerships",
      "Exclusive venue sponsorships",
      "Curated gift bag inclusions",
      "Health & performance brand placement"
    ],
    icon: "Heart",
    color: "#EC4899",
    tierAvailability: { platinum: true, gold: true, silver: false, bronze: false }
  },
  {
    id: "arena-gala-dinner",
    name: "The Arena Gala Dinner",
    shortName: "Gala Dinner",
    category: "existing",
    description: "Men & Women in the Arena awards night. Annual celebration of African entrepreneurship.",
    visionStatement: "An annual celebration honouring outstanding founders, with curated experiences, award categories, premium dining, and high-visibility sponsor integration across the evening programme.",
    channels: ["Live Events", "TV47", "Social Media", "Press"],
    frequency: "Annual",
    keyDeliverables: [
      "Annual awards ceremony",
      "Premium founder networking",
      "TV broadcast coverage",
      "Press and media coverage"
    ],
    opportunities: [
      "Award category sponsorship",
      "Table sponsorship",
      "Red carpet branding",
      "Co-branded award presentations"
    ],
    icon: "Award",
    color: "#D4A832",
    tierAvailability: { platinum: true, gold: true, silver: false, bronze: false }
  },
  {
    id: "arena-bsc-festival",
    name: "Arena: Blood, Sweat & Cheers Festival",
    shortName: "BSC Festival",
    category: "existing",
    description: "Large-scale entertainment & founders festival. Annual flagship event celebrating entrepreneurship.",
    visionStatement: "To produce an annual large-scale founder festival with structured programming, entertainment, and storytelling zones, designed to maximise sponsor visibility, community participation, and media coverage while generating premium live and post-event content.",
    channels: ["Live Events", "TV47", "Radio47", "Social Media", "Press"],
    frequency: "Annual",
    keyDeliverables: [
      "Large-scale annual festival",
      "Entertainment and storytelling zones",
      "Community participation at scale",
      "Premium media coverage"
    ],
    opportunities: [
      "Festival title sponsorship",
      "Zone/stage naming rights",
      "Branded activations and booths",
      "Food and beverage partnerships"
    ],
    icon: "PartyPopper",
    color: "#EF4444",
    tierAvailability: { platinum: true, gold: true, silver: true, bronze: true }
  },
  {
    id: "founders-kitchen",
    name: "Founders' Kitchen",
    shortName: "Kitchen",
    category: "existing",
    description: "Culinary entrepreneurship storytelling combining cooking and business narratives.",
    visionStatement: "To produce a structured, episodic television series set in an intimate kitchen environment, where founders cook and converse, using food as a narrative device to explore business lessons while creating emotionally engaging, broadcast-ready content.",
    channels: ["TV47", "YouTube", "Social Media"],
    frequency: "Weekly episodes",
    keyDeliverables: [
      "Episodic TV series production",
      "Culinary-business storytelling format",
      "Recipe card content series",
      "Behind-the-scenes branded content"
    ],
    opportunities: [
      "Ingredient brand placement",
      "Kitchen equipment sponsorship",
      "Co-branded recipe cards",
      "Private dining event sponsorship"
    ],
    icon: "ChefHat",
    color: "#D97706",
    tierAvailability: { platinum: true, gold: true, silver: true, bronze: false }
  },
  {
    id: "social-media-digital",
    name: "Social Media & Digital Amplification",
    shortName: "Digital",
    category: "new",
    description: "Hashtag sponsorships, promoted reels across YouTube, Instagram, Facebook, TikTok, and live social analytics.",
    visionStatement: "Full-spectrum digital amplification across all FBF social channels, providing sponsors with targeted reach, branded content, and real-time performance analytics across 6+ platforms.",
    channels: ["YouTube", "Instagram", "Facebook", "TikTok", "X/Twitter", "LinkedIn"],
    frequency: "Ongoing",
    keyDeliverables: [
      "Cross-platform social campaigns",
      "Hashtag sponsorship programs",
      "Promoted reels and stories",
      "Live social analytics dashboards"
    ],
    opportunities: [
      "Branded hashtag campaigns",
      "Promoted social content",
      "Influencer collaboration posts",
      "Social media takeovers"
    ],
    icon: "Share2",
    color: "#06B6D4",
    tierAvailability: { platinum: true, gold: true, silver: true, bronze: true }
  },
  {
    id: "shorts-branded-reels",
    name: "Shorts & Branded Reels",
    shortName: "Reels",
    category: "new",
    description: "Branded content clips, behind-the-scenes footage, recipe cards, and short-form vertical video content.",
    visionStatement: "High-impact short-form content optimised for social algorithms, driving engagement through behind-the-scenes access, branded clips, and snackable founder stories.",
    channels: ["YouTube Shorts", "Instagram Reels", "TikTok"],
    frequency: "10-15 per episode",
    keyDeliverables: [
      "10-15 short clips per episode",
      "Behind-the-scenes content",
      "Branded recipe card videos",
      "Vertical format optimised"
    ],
    opportunities: [
      "Branded intro/outro clips",
      "Product feature shorts",
      "Sponsored BTS content",
      "Co-branded recipe reels"
    ],
    icon: "Film",
    color: "#A855F7",
    tierAvailability: { platinum: true, gold: true, silver: true, bronze: false }
  },
  {
    id: "ponea-markets",
    name: "Ponea Markets",
    shortName: "Markets",
    category: "new",
    description: "Carrefour partnership, Founder Health marketplace, supermarket brand placement opportunities.",
    visionStatement: "Leveraging real household consumption data from Carrefour shopping to create authentic brand partnerships where sponsors see their products naturally integrated into the founder lifestyle narrative.",
    channels: ["Retail", "Digital", "Content"],
    frequency: "Ongoing",
    keyDeliverables: [
      "Carrefour brand placement data",
      "Consumption-backed sponsorship pitches",
      "Health marketplace integration",
      "Retail analytics for sponsors"
    ],
    opportunities: [
      "Product placement backed by real data",
      "Supermarket brand activations",
      "Health product partnerships",
      "Co-branded shopping experiences"
    ],
    icon: "ShoppingCart",
    color: "#10B981",
    tierAvailability: { platinum: true, gold: true, silver: false, bronze: false }
  },
  {
    id: "founder-columns",
    name: "Founder Columns",
    shortName: "Columns",
    category: "new",
    description: "Business Daily column sponsorship, non-monetized editorial content building thought leadership.",
    visionStatement: "Premium editorial placements in Business Daily and other leading publications, positioning sponsors alongside authoritative founder thought leadership content.",
    channels: ["Business Daily", "Print Media", "Digital"],
    frequency: "Weekly columns",
    keyDeliverables: [
      "Weekly Business Daily columns",
      "Editorial thought leadership",
      "Print and digital distribution",
      "Brand association with expertise"
    ],
    opportunities: [
      "Column co-branding",
      "Adjacent advertising placement",
      "Thought leadership association",
      "Content syndication rights"
    ],
    icon: "Newspaper",
    color: "#6366F1",
    tierAvailability: { platinum: true, gold: true, silver: false, bronze: false }
  },
  {
    id: "fbx-brands",
    name: "FBX & Brands",
    shortName: "FBX",
    category: "new",
    description: "Cross-pollination events, merchandise ('Together We Are One'), community engagement.",
    visionStatement: "To manage a branded merchandise line as a long-term brand extension, integrated into events, broadcasts, and digital channels, generating recurring revenue while reinforcing community identity and movement visibility.",
    channels: ["Events", "E-commerce", "Social Media"],
    frequency: "Ongoing",
    keyDeliverables: [
      "Branded merchandise line",
      "Cross-pollination events",
      "Community identity building",
      "Digital channel integration"
    ],
    opportunities: [
      "Co-branded merchandise",
      "Event activation partnerships",
      "Community sponsorship",
      "Brand collaboration collections"
    ],
    icon: "Package",
    color: "#F97316",
    tierAvailability: { platinum: true, gold: true, silver: true, bronze: true }
  },
  {
    id: "founder-ledgers",
    name: "Founder Ledgers / Chapters",
    shortName: "Ledgers",
    category: "new",
    description: "Brand storytelling and long-form content sponsorship through founder case studies and narrative content.",
    visionStatement: "Deep-dive narrative content that documents founder journeys in detail, creating premium long-form assets that sponsors can associate with authentic entrepreneurial stories.",
    channels: ["Digital", "Print", "Video"],
    frequency: "Quarterly",
    keyDeliverables: [
      "Long-form founder case studies",
      "Video documentary content",
      "Print-quality narratives",
      "Academic partnership content"
    ],
    opportunities: [
      "Case study sponsorship",
      "Documentary underwriting",
      "Co-branded research content",
      "Educational partnership integration"
    ],
    icon: "BookOpen",
    color: "#78716C",
    tierAvailability: { platinum: true, gold: true, silver: false, bronze: false }
  }
];

export const SERVICE_CATALOG_MAP = Object.fromEntries(
  SERVICE_CATALOG.map(s => [s.id, s])
);
