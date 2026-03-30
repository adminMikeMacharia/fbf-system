export interface FeaturedFounder {
  name: string;
  role: "guest" | "host";
}

export interface Episode {
  number: number;
  title: string;
  arcTheme: string;
  arcNumber: number;
  mindset: string;
  emotional: string;
  strategic: string;
  social: string;
  spiritual: string;
  idealGuestTraits: string;
  matchedServices: string;
  suggestedBook: string;
  suggestedBookCover: string;
  caseStudy: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  spotifyAvailable?: boolean;
  featuredFounders?: FeaturedFounder[];
  foundersBattlefieldUrl?: string;
  thumbnailUrl?: string;
  viewCount?: string;
  siteTitle?: string;
  isLive: boolean;
}

export const ARC_COLORS: Record<number, { bg: string; text: string; border: string; label: string; muted: string }> = {
  1: { bg: "bg-arc1/10", text: "text-arc1", border: "border-arc1/30", label: "ARC 1: External Chaos", muted: "bg-arc1/5" },
  2: { bg: "bg-arc2/10", text: "text-arc2", border: "border-arc2/30", label: "ARC 2: Internal Turmoil", muted: "bg-arc2/5" },
  3: { bg: "bg-arc3/10", text: "text-arc3", border: "border-arc3/30", label: "ARC 3: Relational Reckoning", muted: "bg-arc3/5" },
  4: { bg: "bg-arc4/10", text: "text-arc4", border: "border-arc4/30", label: "ARC 4: Strategic Reinvention", muted: "bg-arc4/5" },
  5: { bg: "bg-arc5/10", text: "text-arc5", border: "border-arc5/30", label: "ARC 5: Systemic Mastery", muted: "bg-arc5/5" },
  6: { bg: "bg-arc6/10", text: "text-arc6", border: "border-arc6/30", label: "ARC 6: Bonus – Spirit & Healing", muted: "bg-arc6/5" },
};

export const ARC_HEX: Record<number, string> = {
  1: "#C45A3C",
  2: "#8B6F47",
  3: "#2AAF6A",
  4: "#3A8ACA",
  5: "#8A5ABF",
  6: "#D4A832",
};

function getArcNumber(arcTheme: string): number {
  if (arcTheme.includes("ARC 1")) return 1;
  if (arcTheme.includes("ARC 2")) return 2;
  if (arcTheme.includes("ARC 3")) return 3;
  if (arcTheme.includes("ARC 4")) return 4;
  if (arcTheme.includes("ARC 5")) return 5;
  if (arcTheme.includes("ARC 6")) return 6;
  return 1;
}

const rawEpisodes: Omit<Episode, "arcNumber" | "suggestedBookCover" | "isLive">[] = [
  { number: 1, title: "Low Trust & Questionable Ethics", arcTheme: "ARC 1: EXTERNAL CHAOS – Surviving the Terrain", mindset: "Scarcity mindset, distrust of institutions", emotional: "Emotional exhaustion, betrayal trauma", strategic: "Navigating trust breaches and ethical ambiguity", social: "Fragile ecosystems, broken social contracts", spiritual: "Moral compass vs. survival instinct", idealGuestTraits: "Navigated low-trust ecosystems, ethical dilemmas, survived betrayal", matchedServices: "Founder-to-Founder Mentoring, Crisis Scrum Board", suggestedBook: "The Speed of Trust by Stephen M.R. Covey", caseStudy: "Theranos and the erosion of trust in startup ethics" },
  { number: 2, title: "Boardroom to Backroom", arcTheme: "ARC 1: EXTERNAL CHAOS – Surviving the Terrain", mindset: "Paranoia vs. clarity mindset in power dynamics", emotional: "Emotional disillusionment with leadership optics", strategic: "Strategic navigation of informal power structures", social: "Gatekeeper dynamics, unspoken influence webs", spiritual: "Discernment and alignment with purpose over power", idealGuestTraits: "Experienced power asymmetry, shadow influencers, backchannel politics", matchedServices: "Advisory Board, Crisis Scrum Board", suggestedBook: "Power: Why Some People Have It by Jeffrey Pfeffer", caseStudy: "Uber's political maneuvering and boardroom dynamics" },
  { number: 3, title: "Rulebreakers & Survivors", arcTheme: "ARC 1: EXTERNAL CHAOS – Surviving the Terrain", mindset: "Growth vs. compliance mindset", emotional: "Tension between fear and courage", strategic: "Strategic flexibility in broken systems", social: "Survival-driven social coding", spiritual: "Moral clarity amidst grey areas", idealGuestTraits: "Operated in regulatory grey zones, broke/bent rules, stayed ethical", matchedServices: "Crisis Scrum Board, Strategic Discovery Labs", suggestedBook: "The Innovator's Dilemma by Clayton Christensen", caseStudy: "Airbnb's legal battles with city regulators" },
  { number: 4, title: "The Talent Trap", arcTheme: "ARC 1: EXTERNAL CHAOS – Surviving the Terrain", mindset: "Bias toward culture over capability", emotional: "Emotional regret, people pain", strategic: "Strategic missteps in hiring & org design", social: "Tribalism vs. meritocracy", spiritual: "Sense of justice in team-building choices", idealGuestTraits: "Made hiring mistakes, restructured culture, rebuilt teams from crisis", matchedServices: "Strategic Discovery Labs, AFOS Coaching & Culture Sprints", suggestedBook: "Work Rules! by Laszlo Bock", caseStudy: "Zappos' hiring for culture and the consequences" },
  { number: 5, title: "The Finance Mafia", arcTheme: "ARC 1: EXTERNAL CHAOS – Surviving the Terrain", mindset: "Scarcity mindset reinforced by access politics", emotional: "Capital shame, envy, and validation hunger", strategic: "Fundraising games and risk management", social: "Power imbalances in financial networks", spiritual: "Integrity and worth beyond capital gatekeeping", idealGuestTraits: "Faced finance gatekeeping, capital politics, biased fundraising", matchedServices: "Crisis Scrum Board, Angel Investors", suggestedBook: "The Cold Start Problem by Andrew Chen", caseStudy: "WeWork's failed IPO and capital structure chaos" },
  { number: 6, title: "Cornered by Growth", arcTheme: "ARC 1: EXTERNAL CHAOS – Surviving the Terrain", mindset: "Fear-based mindset around expansion", emotional: "Anxiety around readiness and pressure", strategic: "Premature scaling, reactive decision-making", social: "Isolation under visibility pressure", spiritual: "Fear of success and loss of authenticity", idealGuestTraits: "Scaled too early, faced growth pressure, restructured for sustainability", matchedServices: "Strategic Discovery Labs, PMO + Sprint Architecture", suggestedBook: "Blitzscaling by Reid Hoffman", caseStudy: "Fast's rapid scale and sudden collapse" },
  { number: 7, title: "Image Over Impact", arcTheme: "ARC 2: INTERNAL TURMOIL – Navigating the Self", mindset: "Perception-driven mindset", emotional: "Identity dissonance and performance fatigue", strategic: "Strategy masked by optics", social: "Shallow brand-centric networks", spiritual: "Authenticity crisis and reclaiming true purpose", idealGuestTraits: "Overcame personal branding crisis, identity collapse", matchedServices: "AFOS Coaching & Culture Sprints, Founder-to-Founder Mentoring", suggestedBook: "The Brand Gap by Marty Neumeier", caseStudy: "Elizabeth Holmes and the performative identity of founders" },
  { number: 8, title: "The Loneliness Tax", arcTheme: "ARC 2: INTERNAL TURMOIL – Navigating the Self", mindset: "Isolated leadership mindset", emotional: "Deep loneliness, emotional numbness", strategic: "Blind spots from solo leadership", social: "Withdrawal from community and support", spiritual: "Inner void and search for meaning", idealGuestTraits: "Faced isolation, emotional burnout, leadership loneliness", matchedServices: "Founder-to-Founder Mentoring, AFOS Coaching & Culture Sprints", suggestedBook: "The Lonely Century by Noreena Hertz", caseStudy: "Ben Horowitz's reflections on CEO loneliness" },
  { number: 9, title: "The Creative Toll", arcTheme: "ARC 2: INTERNAL TURMOIL – Navigating the Self", mindset: "Burned-out creative mindset", emotional: "Creative grief and identity fragmentation", strategic: "Innovation fatigue vs. operational grind", social: "Disconnection from the creative community", spiritual: "Reconnecting with original creative calling", idealGuestTraits: "Started with a gift, fought to keep creating", matchedServices: "Strategic Discovery Labs, Guest Speakers", suggestedBook: "Big Magic by Elizabeth Gilbert", caseStudy: "Kanye West's creative genius vs. business chaos" },
  { number: 10, title: "Mentors or Manipulators", arcTheme: "ARC 2: INTERNAL TURMOIL – Navigating the Self", mindset: "Trust-seeking mindset with vulnerability", emotional: "Betrayal and disillusionment with guides", strategic: "Mentor dependency vs. independent strategy", social: "Toxic mentorship dynamics", spiritual: "Discerning true guides from false prophets", idealGuestTraits: "Had a mentor who hurt them; learned to pick guides", matchedServices: "Advisory Board, Founder-to-Founder Mentoring", suggestedBook: "Trillion Dollar Coach by Schmidt, Rosenberg & Eagle", caseStudy: "Travis Kalanick's mentorship failures at Uber" },
  { number: 11, title: "Founder vs. Family", arcTheme: "ARC 2: INTERNAL TURMOIL – Navigating the Self", mindset: "Guilt-driven mindset balancing roles", emotional: "Family guilt, neglect pain, sacrifice regret", strategic: "Boundary failures between work and home", social: "Family strain, social isolation", spiritual: "Reconciling ambition with love and duty", idealGuestTraits: "Sacrificed family for business; rebuilt or lost", matchedServices: "AFOS Coaching & Culture Sprints, Guest Speakers", suggestedBook: "Daring Greatly by Brené Brown", caseStudy: "Elon Musk's public family tensions and founder sacrifice" },
  { number: 12, title: "The Betrayal Blueprint", arcTheme: "ARC 2: INTERNAL TURMOIL – Navigating the Self", mindset: "Hypervigilance after betrayal", emotional: "Deep betrayal wound, trust collapse", strategic: "Rebuilding from partner or investor betrayal", social: "Fractured alliances and trust repair", spiritual: "Forgiveness as a strategic and spiritual practice", idealGuestTraits: "Was betrayed by co-founder or partner; rebuilt", matchedServices: "Crisis Scrum Board, Advisory Board", suggestedBook: "The Five Dysfunctions of a Team by Patrick Lencioni", caseStudy: "Eduardo Saverin vs. Mark Zuckerberg – Facebook's co-founder betrayal" },
  { number: 13, title: "When Government Is the Problem", arcTheme: "ARC 3: RELATIONAL RECKONING – Trust & Power", mindset: "Anti-establishment mindset vs. pragmatism", emotional: "Rage, frustration, helplessness", strategic: "Navigating bureaucratic and regulatory capture", social: "Adversarial government relationships", spiritual: "Justice-seeking and moral outrage", idealGuestTraits: "Fought government corruption, navigated red tape", matchedServices: "Crisis Scrum Board, Strategic Discovery Labs", suggestedBook: "Why Nations Fail by Acemoglu & Robinson", caseStudy: "M-Pesa's regulatory battles in Kenya" },
  { number: 14, title: "Co-Founder Chemistry", arcTheme: "ARC 3: RELATIONAL RECKONING – Trust & Power", mindset: "Partnership vs. independence mindset", emotional: "Co-founder tension, jealousy, competition", strategic: "Equity splits, role clarity, exit clauses", social: "Shared vision vs. divergent values", spiritual: "Spiritual alignment in partnership", idealGuestTraits: "Had a co-founder breakup or breakthrough", matchedServices: "Advisory Board, Founder-to-Founder Mentoring", suggestedBook: "The Founder's Dilemmas by Noam Wasserman", caseStudy: "Steve Jobs and Steve Wozniak's partnership evolution" },
  { number: 15, title: "Investor Games", arcTheme: "ARC 3: RELATIONAL RECKONING – Trust & Power", mindset: "Power asymmetry in investor relations", emotional: "Desperation, validation-seeking, resentment", strategic: "Term sheet games, valuation manipulation", social: "Investor-founder power dynamics", spiritual: "Self-worth beyond capital validation", idealGuestTraits: "Was exploited or empowered by investors", matchedServices: "Angel Investors, Crisis Scrum Board", suggestedBook: "Venture Deals by Brad Feld & Jason Mendelson", caseStudy: "Masayoshi Son's Vision Fund and founder pressure" },
  { number: 16, title: "The Partnership Paradox", arcTheme: "ARC 3: RELATIONAL RECKONING – Trust & Power", mindset: "Collaborative vs. competitive mindset", emotional: "Resentment in unequal partnerships", strategic: "Alliance design and exit strategy", social: "Trust dynamics in multi-party deals", spiritual: "Shared purpose and mutual respect", idealGuestTraits: "Built or destroyed a strategic partnership", matchedServices: "Strategic Discovery Labs, Advisory Board", suggestedBook: "Getting to Yes by Fisher & Ury", caseStudy: "Apple and Samsung's partnership-turned-rivalry" },
  { number: 17, title: "Market Lies", arcTheme: "ARC 3: RELATIONAL RECKONING – Trust & Power", mindset: "Data vs. intuition mindset", emotional: "Confusion, market anxiety", strategic: "Market validation failures, pivot decisions", social: "Customer deception and market noise", spiritual: "Trusting inner signal over external noise", idealGuestTraits: "Was misled by market data; had to pivot", matchedServices: "Strategic Discovery Labs, PMO + Sprint Architecture", suggestedBook: "The Lean Startup by Eric Ries", caseStudy: "Quibi's $1.75B bet on wrong market assumptions" },
  { number: 18, title: "Scaling Culture", arcTheme: "ARC 3: RELATIONAL RECKONING – Trust & Power", mindset: "Growth-stage mindset shift", emotional: "Loss of original culture, nostalgia", strategic: "Culture preservation during rapid scaling", social: "Team identity under growth stress", spiritual: "Values alignment at scale", idealGuestTraits: "Scaled and lost culture; rebuilt values", matchedServices: "AFOS Coaching & Culture Sprints, Strategic Discovery Labs", suggestedBook: "What You Do Is Who You Are by Ben Horowitz", caseStudy: "Netflix's culture deck and radical transparency" },
  { number: 19, title: "The Pivot Question", arcTheme: "ARC 4: STRATEGIC REINVENTION – Building Anew", mindset: "Adaptive vs. stubborn mindset", emotional: "Fear of abandoning the original vision", strategic: "Pivot timing and execution", social: "Stakeholder communication during pivots", spiritual: "Surrender and renewal", idealGuestTraits: "Pivoted successfully or failed to pivot", matchedServices: "Strategic Discovery Labs, PMO + Sprint Architecture", suggestedBook: "Only the Paranoid Survive by Andrew Grove", caseStudy: "Slack's pivot from gaming to enterprise communication" },
  { number: 20, title: "Scaling Without Burning", arcTheme: "ARC 4: STRATEGIC REINVENTION – Building Anew", mindset: "Sustainable growth mindset", emotional: "Burnout fear, exhaustion management", strategic: "Operational efficiency at scale", social: "Team wellness and scaling support", spiritual: "Purpose-driven growth over ego-driven growth", idealGuestTraits: "Scaled sustainably or burned out trying", matchedServices: "PMO + Sprint Architecture, AFOS Coaching & Culture Sprints", suggestedBook: "Scaling Up by Verne Harnish", caseStudy: "Basecamp's intentional anti-growth philosophy" },
  { number: 21, title: "When IP Is All You Have", arcTheme: "ARC 4: STRATEGIC REINVENTION – Building Anew", mindset: "Protectionist vs. open-source mindset", emotional: "Fear of idea theft, paranoia", strategic: "IP strategy, patents, trade secrets", social: "Trust in sharing ideas", spiritual: "Generosity vs. scarcity in knowledge", idealGuestTraits: "Built or lost IP; navigated protection", matchedServices: "Strategic Discovery Labs, Advisory Board", suggestedBook: "Stealing Fire by Kotler & Wheal", caseStudy: "Oracle vs. Google – the Java API copyright war" },
  { number: 22, title: "The Second Act", arcTheme: "ARC 4: STRATEGIC REINVENTION – Building Anew", mindset: "Reinvention mindset", emotional: "Nostalgia, fear of irrelevance", strategic: "Second venture strategy", social: "Network rebuilding", spiritual: "Purpose rediscovery", idealGuestTraits: "Built a second company after first success or failure", matchedServices: "Founder-to-Founder Mentoring, Strategic Discovery Labs", suggestedBook: "The Hard Thing About Hard Things by Ben Horowitz", caseStudy: "Jack Dorsey's Square after Twitter" },
  { number: 23, title: "Tech Debt & Human Debt", arcTheme: "ARC 4: STRATEGIC REINVENTION – Building Anew", mindset: "Short-term vs. long-term thinking", emotional: "Frustration with legacy systems and people", strategic: "Technical and organizational debt management", social: "Team loyalty vs. performance", spiritual: "Patience and long-term vision", idealGuestTraits: "Inherited or created massive tech/human debt", matchedServices: "PMO + Sprint Architecture, Strategic Discovery Labs", suggestedBook: "Refactoring by Martin Fowler", caseStudy: "Twitter's technical debt crisis under new ownership" },
  { number: 24, title: "Africa-First Strategy", arcTheme: "ARC 4: STRATEGIC REINVENTION – Building Anew", mindset: "Contextual innovation mindset", emotional: "Pride vs. inferiority complex", strategic: "Building for Africa-first markets", social: "Pan-African network building", spiritual: "Cultural pride and ancestral innovation", idealGuestTraits: "Built Africa-first products; navigated global bias", matchedServices: "Strategic Discovery Labs, Guest Speakers", suggestedBook: "The Bright Continent by Dayo Olopade", caseStudy: "Flutterwave and Paystack – Africa-first fintech" },
  { number: 25, title: "Board Games", arcTheme: "ARC 5: SYSTEMIC MASTERY – Leading the Ecosystem", mindset: "Governance mindset", emotional: "Frustration with board politics", strategic: "Board composition and management", social: "Board-founder power dynamics", spiritual: "Servant leadership in governance", idealGuestTraits: "Navigated board conflicts or built effective boards", matchedServices: "Advisory Board, Crisis Scrum Board", suggestedBook: "High Output Management by Andrew Grove", caseStudy: "OpenAI's board crisis and Sam Altman's return" },
  { number: 26, title: "Ecosystem Play", arcTheme: "ARC 5: SYSTEMIC MASTERY – Leading the Ecosystem", mindset: "Platform thinking mindset", emotional: "Ambition and frustration with ecosystem gaps", strategic: "Ecosystem design and value creation", social: "Multi-stakeholder relationship management", spiritual: "Service to the wider community", idealGuestTraits: "Built or contributed to an ecosystem", matchedServices: "Strategic Discovery Labs, PMO + Sprint Architecture", suggestedBook: "Platform Revolution by Parker, Van Alstyne & Choudary", caseStudy: "Safaricom's ecosystem around M-Pesa" },
  { number: 27, title: "The Regulation Dance", arcTheme: "ARC 5: SYSTEMIC MASTERY – Leading the Ecosystem", mindset: "Compliance vs. innovation mindset", emotional: "Frustration with regulatory burden", strategic: "Regulatory strategy and lobbying", social: "Government-industry relationship", spiritual: "Justice and fairness in regulation", idealGuestTraits: "Navigated complex regulation or helped shape policy", matchedServices: "Crisis Scrum Board, Advisory Board", suggestedBook: "The Code of Capital by Katharina Pistor", caseStudy: "Uber's global regulatory battles" },
  { number: 28, title: "Legacy Building", arcTheme: "ARC 5: SYSTEMIC MASTERY – Leading the Ecosystem", mindset: "Legacy-oriented mindset", emotional: "Mortality awareness, significance hunger", strategic: "Succession planning and institution building", social: "Mentoring next generation", spiritual: "Purpose beyond profit", idealGuestTraits: "Building for legacy; thinking beyond themselves", matchedServices: "Guest Speakers, Founder-to-Founder Mentoring", suggestedBook: "Built to Last by Jim Collins", caseStudy: "Mo Ibrahim's foundation and African leadership legacy" },
  { number: 29, title: "The Policy Founder", arcTheme: "ARC 5: SYSTEMIC MASTERY – Leading the Ecosystem", mindset: "Systems-change mindset", emotional: "Frustration with systemic injustice", strategic: "Policy entrepreneurship", social: "Cross-sector coalition building", spiritual: "Calling to serve the greater good", idealGuestTraits: "Moved from business to policy impact", matchedServices: "Strategic Discovery Labs, Guest Speakers", suggestedBook: "The Dictator's Handbook by Bueno de Mesquita & Smith", caseStudy: "Bloomberg's transition from business to public service" },
  { number: 30, title: "Impact vs. Profit", arcTheme: "ARC 5: SYSTEMIC MASTERY – Leading the Ecosystem", mindset: "Double bottom line mindset", emotional: "Tension between mission and money", strategic: "Impact measurement and monetization", social: "Stakeholder vs. shareholder capitalism", spiritual: "Purpose-driven capitalism", idealGuestTraits: "Balanced or struggled with impact vs. profit", matchedServices: "AFOS Coaching & Culture Sprints, Strategic Discovery Labs", suggestedBook: "Winners Take All by Anand Giridharadas", caseStudy: "TOMS Shoes' buy-one-give-one model evolution" },
  { number: 31, title: "The Health Collapse", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Denial mindset about health", emotional: "Fear, vulnerability, mortality awareness", strategic: "Crisis management during health collapse", social: "Stigma around founder health", spiritual: "Body as temple, healing as priority", idealGuestTraits: "Had a health crisis while running business", matchedServices: "AFOS Coaching & Culture Sprints, Founder-to-Founder Mentoring", suggestedBook: "When Breath Becomes Air by Paul Kalanithi", caseStudy: "Steve Jobs' health crisis and Apple leadership" },
  { number: 32, title: "The Exit Dilemma", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Letting go mindset", emotional: "Grief after achievement", strategic: "Transition navigation", social: "Lonely post-exit social gaps", spiritual: "Surrender and detachment", idealGuestTraits: "Exited business with regret; emotionally unfulfilled", matchedServices: "Crisis Scrum Board, Strategic Discovery Labs", suggestedBook: "Let My People Go Surfing by Yvon Chouinard", caseStudy: "Tumblr's sale to Yahoo – exit grief case" },
  { number: 33, title: "The Founder's Shadow", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Awareness vs. ego inflation", emotional: "Temptation and self-absorption", strategic: "Ego-management strategies", social: "Social power distortions", spiritual: "Humility and shadow integration", idealGuestTraits: "Fell to ego or temptation; found spiritual grounding", matchedServices: "AFOS Coaching & Culture Sprints, Guest Speakers", suggestedBook: "Ego Is the Enemy by Ryan Holiday", caseStudy: "Facebook's early scandals and founder ego inflation" },
  { number: 34, title: "Women in the Arena", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Resilience under suppression", emotional: "Gender-specific trauma", strategic: "Strategy within bias systems", social: "Excluded networks", spiritual: "Spiritual resistance and feminine power", idealGuestTraits: "Woman founder in male space; battle-scarred but wise", matchedServices: "Guest Speakers, Founder-to-Founder Mentoring", suggestedBook: "Lean In by Sheryl Sandberg", caseStudy: "Whitney Wolfe Herd at Bumble – gendered leadership journey" },
  { number: 35, title: "Diaspora Dissonance", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Hybrid identity mindset", emotional: "Pain of alienation", strategic: "Building relevance at home", social: "Belonging vs. rejection", spiritual: "Cultural healing and spiritual calling", idealGuestTraits: "Diaspora returnee who was rejected or challenged", matchedServices: "Founder-to-Founder Mentoring, Guest Speakers", suggestedBook: "Decolonising the Mind by Ngũgĩ wa Thiong'o", caseStudy: "Iyinoluwa Aboyeji's homecoming tension from diaspora" },
  { number: 36, title: "The Invisible Co-Founder", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Faith-led mindset", emotional: "Surrendered vulnerability", strategic: "Spiritual rituals in planning", social: "Ancestral respect in relations", spiritual: "Faith, ancestry, and divine partnership", idealGuestTraits: "Faith-driven builder; spiritual or ancestral anchoring", matchedServices: "AFOS Coaching & Culture Sprints, Guest Speakers", suggestedBook: "Sacred Contracts by Caroline Myss", caseStudy: "Strive Masiyiwa's faith-driven entrepreneurship at Econet" },
  { number: 37, title: "Reputation Rehab", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Redemptive mindset", emotional: "Shame, courage, public pain", strategic: "Strategic silence vs. action", social: "Digital vs. real social forgiveness", spiritual: "Redemption arc as spiritual journey", idealGuestTraits: "Rehabilitated public rep; survived cancellation", matchedServices: "Crisis Scrum Board, Founder-to-Founder Mentoring", suggestedBook: "So You've Been Publicly Shamed by Jon Ronson", caseStudy: "Reputation.com and digital redemption studies" },
  { number: 38, title: "Founder Rituals", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Centered, intentional mindset", emotional: "Emotional grounding daily", strategic: "Structure that enables flow", social: "Ritual-based team cultures", spiritual: "Prayer, silence, and grounding", idealGuestTraits: "Uses rituals or daily practices to stay sane", matchedServices: "AFOS Coaching & Culture Sprints, Strategic Discovery Labs", suggestedBook: "Daily Rituals by Mason Currey", caseStudy: "Tim Ferriss' morning rituals and mental optimization" },
  { number: 39, title: "The Unscalable Founder", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Control mindset vs. delegation", emotional: "Fear of irrelevance", strategic: "System design strategy", social: "Team dependence issues", spiritual: "Letting go as spiritual growth", idealGuestTraits: "Built non-scalable biz; faced founder bottleneck", matchedServices: "Strategic Discovery Labs, PMO + Sprint Architecture", suggestedBook: "The One Minute Manager Meets the Monkey by Ken Blanchard", caseStudy: "Jeff Bezos' centralization bottleneck at Amazon" },
  { number: 40, title: "The Ghost of the First Venture", arcTheme: "ARC 6: BONUS – Spirit, Healing & Untold Themes", mindset: "Growth from failure mindset", emotional: "Emotional residue and courage", strategic: "Strategic restarts", social: "Rebuilding trust", spiritual: "Spiritual resilience and rebirth", idealGuestTraits: "Restarted after failure; learned from ghost of past venture", matchedServices: "Founder-to-Founder Mentoring, Strategic Discovery Labs", suggestedBook: "Start Again by Ken Costa", caseStudy: "Jack Dorsey's post-Twitter restart lessons" },
];

function getBookCoverUrl(suggestedBook: string): string {
  const title = suggestedBook.split(" by ")[0].trim();
  return `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-M.jpg`;
}

interface LiveEpisodeData {
  siteEpisodeNumber: number;
  siteTitle: string;
  youtubeUrl?: string;
  spotifyUrl?: string;
  spotifyAvailable?: boolean;
  featuredFounders?: FeaturedFounder[];
  foundersBattlefieldUrl: string;
  thumbnailUrl?: string;
  viewCount?: string;
}

const HOST: FeaturedFounder = { name: "Michael Anthony Macharia", role: "host" };

const liveEpisodes: LiveEpisodeData[] = [
  {
    siteEpisodeNumber: 1,
    siteTitle: "Low Trust & Questionable Ethics",
    youtubeUrl: "https://www.youtube.com/watch?v=gL_iC38GdQc",
    spotifyUrl: "https://open.spotify.com/episode/0XwfmiRolxjAF0XYbaH8cN",
    featuredFounders: [
      { name: "Kevin Mutiso", role: "guest" },
      { name: "Renee Ngamau", role: "guest" },
      { name: "Roy Gitahi", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/1",
    thumbnailUrl: "https://img.youtube.com/vi/gL_iC38GdQc/hqdefault.jpg",
    viewCount: "12.3K",
  },
  {
    siteEpisodeNumber: 4,
    siteTitle: "The Talent Trap",
    youtubeUrl: "https://www.youtube.com/watch?v=2hPa3AwtWLo",
    spotifyUrl: "https://open.spotify.com/episode/3bI5yrzzIiQJ1QDTIQpZPY",
    featuredFounders: [
      { name: "Farah Esmail", role: "guest" },
      { name: "Catherine Githua", role: "guest" },
      { name: "Manish Sardana", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/4",
    thumbnailUrl: "https://img.youtube.com/vi/2hPa3AwtWLo/hqdefault.jpg",
    viewCount: "5.7K",
  },
  {
    siteEpisodeNumber: 5,
    siteTitle: "The Finance Mafia",
    youtubeUrl: "https://www.youtube.com/watch?v=PasYEQRZGIY",
    spotifyUrl: "https://open.spotify.com/episode/46PiBIA8T6fHAn2MlP9Rpy",
    featuredFounders: [
      { name: "Bobby Gadhia", role: "guest" },
      { name: "Edwin Dande", role: "guest" },
      { name: "Christine Ouma Oseko", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/5",
    thumbnailUrl: "https://img.youtube.com/vi/PasYEQRZGIY/hqdefault.jpg",
    viewCount: "9.8K",
  },
  {
    siteEpisodeNumber: 6,
    siteTitle: "Cornered by Growth",
    youtubeUrl: "https://www.youtube.com/watch?v=WnJSF3UDeng",
    spotifyUrl: "https://open.spotify.com/episode/1flk8wxytpXxOn03sNFyaX",
    featuredFounders: [
      { name: "Peter Kenneth Nduati", role: "guest" },
      { name: "Lenny Nganga", role: "guest" },
      { name: "Pauline Wangeci Warui", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/6",
    thumbnailUrl: "https://img.youtube.com/vi/WnJSF3UDeng/hqdefault.jpg",
    viewCount: "15.4K",
  },
  {
    siteEpisodeNumber: 7,
    siteTitle: "Image Over Impact",
    youtubeUrl: "https://www.youtube.com/watch?v=-0Ns14MfMmI",
    spotifyUrl: "https://open.spotify.com/episode/09CRiuW5FqtovobAD94r8D",
    featuredFounders: [
      { name: "Wandia Gichuru", role: "guest" },
      { name: "Jesse Moore", role: "guest" },
      { name: "Ian Ngethe", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/7",
    thumbnailUrl: "https://img.youtube.com/vi/-0Ns14MfMmI/hqdefault.jpg",
    viewCount: "9.0K",
  },
  {
    siteEpisodeNumber: 8,
    siteTitle: "Scarcity Syndrome",
    youtubeUrl: "https://www.youtube.com/watch?v=IWz_A5nAkFI",
    spotifyUrl: "https://open.spotify.com/episode/5vQjmd0T0WSryQekgQFf1",
    featuredFounders: [
      { name: "Alex Nyaga", role: "guest" },
      { name: "Edward Kinyanjui", role: "guest" },
      { name: "Flora Mutahi", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/8",
    thumbnailUrl: "https://img.youtube.com/vi/IWz_A5nAkFI/hqdefault.jpg",
    viewCount: "5.9K",
  },
  {
    siteEpisodeNumber: 9,
    siteTitle: "When Creativity Becomes Legacy",
    youtubeUrl: "https://www.youtube.com/watch?v=lsQB0fA-QGE",
    spotifyUrl: "https://open.spotify.com/episode/02if5cNJ7ftaLnexXPXDG7",
    featuredFounders: [
      { name: "Peter Elungat", role: "guest" },
      { name: "Priscilla Muchinyi", role: "guest" },
      { name: "Silvia Tonui", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/9",
    thumbnailUrl: "https://img.youtube.com/vi/lsQB0fA-QGE/hqdefault.jpg",
    viewCount: "2.6K",
  },
  {
    siteEpisodeNumber: 12,
    siteTitle: "Seasons of Change",
    youtubeUrl: "https://www.youtube.com/watch?v=zqN2fOvvfQY",
    spotifyUrl: "https://open.spotify.com/episode/5EqqEeqFAagfsyVxvIbB2o",
    featuredFounders: [
      { name: "Teresa Njoroge", role: "guest" },
      { name: "Olive Gachara", role: "guest" },
      { name: "Khalhani Sichangi", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/12",
    thumbnailUrl: "https://img.youtube.com/vi/zqN2fOvvfQY/hqdefault.jpg",
    viewCount: "7.0K",
  },
  {
    siteEpisodeNumber: 15,
    siteTitle: "Mentors or Manipulators",
    spotifyUrl: "https://open.spotify.com/episode/7apbbFCR1dFnqYGbQTJexO",
    featuredFounders: [
      { name: "Bobby Gadhia", role: "guest" },
      { name: "Peter Ndiang'ui", role: "guest" },
      { name: "Valentine Njoroge", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/15",
    viewCount: "9.8K",
  },
  {
    siteEpisodeNumber: 16,
    siteTitle: "The Hustle Delusion",
    youtubeUrl: "https://www.youtube.com/watch?v=2lVeNiFIVbo",
    spotifyUrl: "https://open.spotify.com/episode/3bI5yrzzIiQJ1QDTIQpZPY",
    featuredFounders: [
      { name: "Phares Kariuki", role: "guest" },
      { name: "George Ikua", role: "guest" },
      { name: "Suzie Wokabi", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/16",
    thumbnailUrl: "https://img.youtube.com/vi/2lVeNiFIVbo/hqdefault.jpg",
    viewCount: "10.9K",
  },
  {
    siteEpisodeNumber: 19,
    siteTitle: "Legacy Load",
    youtubeUrl: "https://www.youtube.com/watch?v=dIXX-MvciM0",
    spotifyUrl: "https://open.spotify.com/episode/0s2a0CIPEKL4HfqZX1fOAD",
    featuredFounders: [
      { name: "Joachim Westerveld", role: "guest" },
      { name: "Dr. Mary Waceke Thongoh-Muia", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/19",
    thumbnailUrl: "https://img.youtube.com/vi/dIXX-MvciM0/hqdefault.jpg",
    viewCount: "4.6K",
  },
  {
    siteEpisodeNumber: 23,
    siteTitle: "Trust Recovery",
    youtubeUrl: "https://www.youtube.com/watch?v=Bo2BXmHdqVQ",
    spotifyAvailable: true,
    featuredFounders: [
      { name: "Tesh Mbaabu", role: "guest" },
      { name: "Dr. Moka Lantum", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/23",
    thumbnailUrl: "https://img.youtube.com/vi/Bo2BXmHdqVQ/hqdefault.jpg",
    viewCount: "7.6K",
  },
  {
    siteEpisodeNumber: 24,
    siteTitle: "Our Stories, Our Way",
    youtubeUrl: "https://www.youtube.com/watch?v=cDcrxpeDzg4",
    spotifyUrl: "https://open.spotify.com/episode/50s2W7hHMgDv5W3NnaVElK",
    featuredFounders: [
      { name: "Ann McCreath", role: "guest" },
      { name: "Radhika Bhachu", role: "guest" },
      { name: "Emmanuel Jambo", role: "guest" },
      HOST,
    ],
    foundersBattlefieldUrl: "https://foundersbattlefield.org/episodes/24",
    thumbnailUrl: "https://img.youtube.com/vi/cDcrxpeDzg4/hqdefault.jpg",
    viewCount: "3.4K",
  },
];

const SITE_TITLE_TO_AFOS: Record<string, string> = {
  "Scarcity Syndrome": "The Loneliness Tax",
  "When Creativity Becomes Legacy": "The Creative Toll",
  "Seasons of Change": "The Betrayal Blueprint",
  "The Hustle Delusion": "The Partnership Paradox",
  "Legacy Load": "The Pivot Question",
  "Trust Recovery": "Tech Debt & Human Debt",
  "Our Stories, Our Way": "Africa-First Strategy",
};

function matchLiveToAfos(live: LiveEpisodeData, afosEpisodes: typeof rawEpisodes): number {
  const exactMatch = afosEpisodes.find(
    (ep) => ep.title.toLowerCase() === live.siteTitle.toLowerCase()
  );
  if (exactMatch) return exactMatch.number;

  const mappedTitle = SITE_TITLE_TO_AFOS[live.siteTitle];
  if (mappedTitle) {
    const mapped = afosEpisodes.find(
      (ep) => ep.title.toLowerCase() === mappedTitle.toLowerCase()
    );
    if (mapped) return mapped.number;
  }

  return live.siteEpisodeNumber;
}

const liveEpisodeData: Record<number, LiveEpisodeData> = {};
for (const live of liveEpisodes) {
  const afosNum = matchLiveToAfos(live, rawEpisodes);
  liveEpisodeData[afosNum] = live;
}

export const episodes: Episode[] = rawEpisodes.map(ep => {
  const live = liveEpisodeData[ep.number];
  return {
    ...ep,
    arcNumber: getArcNumber(ep.arcTheme),
    suggestedBookCover: getBookCoverUrl(ep.suggestedBook),
    isLive: !!live,
    ...(live || {}),
  };
});

export const episodesByArc = episodes.reduce<Record<number, Episode[]>>((acc, ep) => {
  if (!acc[ep.arcNumber]) acc[ep.arcNumber] = [];
  acc[ep.arcNumber].push(ep);
  return acc;
}, {});
