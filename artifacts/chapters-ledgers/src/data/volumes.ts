export interface Volume {
  number: number;
  title: string;
  subtitle: string;
  arcNumber: number;
  arcLabel: string;
  description: string;
  founderCount: number;
  episodeRange: string;
  pageTarget: number;
  costTarget: string;
  status: "in-production" | "planned" | "future";
}

export const volumes: Volume[] = [
  {
    number: 1,
    title: "Origin Stories",
    subtitle: "Surviving the External Chaos",
    arcNumber: 1,
    arcLabel: "ARC 1: External Chaos",
    description: "The foundational stories of founders navigating hostile terrain — low trust environments, boardroom politics, regulatory grey zones, talent traps, capital gatekeeping, and premature scaling pressure. Six chapters drawn from the raw experiences of African entrepreneurs who survived the external chaos that breaks most ventures before they begin.",
    founderCount: 8,
    episodeRange: "EP01–EP06",
    pageTarget: 280,
    costTarget: "KSh 2.0M",
    status: "in-production",
  },
  {
    number: 2,
    title: "The Inner Battle",
    subtitle: "Navigating the Self",
    arcNumber: 2,
    arcLabel: "ARC 2: Internal Turmoil",
    description: "The deeply personal stories of founders confronting themselves — image vs. impact, the loneliness tax, creative burnout, toxic mentors, family sacrifice, and the betrayal blueprint. Six chapters that expose the internal warfare every founder fights but rarely discusses publicly.",
    founderCount: 8,
    episodeRange: "EP07–EP12",
    pageTarget: 260,
    costTarget: "KSh 2.0M",
    status: "planned",
  },
  {
    number: 3,
    title: "Trust & Power",
    subtitle: "The Relational Reckoning",
    arcNumber: 3,
    arcLabel: "ARC 3: Relational Reckoning",
    description: "The explosive stories of founders confronting trust and power dynamics — government as obstacle, co-founder chemistry, investor games, partnership paradoxes, market deception, and scaling culture. Six chapters mapping the relational minefield of African entrepreneurship.",
    founderCount: 7,
    episodeRange: "EP13–EP18",
    pageTarget: 280,
    costTarget: "KSh 2.0M",
    status: "planned",
  },
  {
    number: 4,
    title: "Building Anew",
    subtitle: "Strategic Reinvention",
    arcNumber: 4,
    arcLabel: "ARC 4: Strategic Reinvention",
    description: "The strategic stories of founders who pivoted, rebuilt, and reinvented — the pivot question, scaling without burning, IP protection, second acts, tech and human debt, and Africa-first strategy. Six chapters on the architecture of strategic rebirth.",
    founderCount: 7,
    episodeRange: "EP19–EP24",
    pageTarget: 270,
    costTarget: "KSh 2.0M",
    status: "future",
  },
  {
    number: 5,
    title: "Leading the Ecosystem",
    subtitle: "Systemic Mastery",
    arcNumber: 5,
    arcLabel: "ARC 5: Systemic Mastery",
    description: "The systems-level stories of founders who transcended individual ventures to shape ecosystems — board governance, ecosystem architecture, regulatory navigation, legacy building, policy entrepreneurship, and the impact-profit tension. Six chapters on mastering the systems that shape markets.",
    founderCount: 7,
    episodeRange: "EP25–EP30",
    pageTarget: 290,
    costTarget: "KSh 2.0M",
    status: "future",
  },
  {
    number: 6,
    title: "Spirit & Healing",
    subtitle: "The Untold Themes",
    arcNumber: 6,
    arcLabel: "ARC 6: Bonus Themes",
    description: "The spiritual and healing stories that defy categorization — health collapse, exit grief, founder shadows, women in the arena, diaspora tension, faith-driven building, reputation rehabilitation, founder rituals, unscalable founders, and the ghost of the first venture. Ten chapters exploring the soul of entrepreneurship.",
    founderCount: 8,
    episodeRange: "EP31–EP40",
    pageTarget: 320,
    costTarget: "KSh 2.0M",
    status: "future",
  },
];
