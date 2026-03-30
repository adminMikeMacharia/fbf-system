export interface PipelineTarget {
  bse: string;
  company: string;
  bullsEye: boolean;
  runrate: boolean;
  relationshipType?: string;
  thirdParty?: string;
  products: string[];
  status: string;
}

export const TARGET_PIPELINE: PipelineTarget[] = [
  { bse: "Wangari Ndua", company: "Muthokinju Hardware", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "Wangari Ndua", company: "Nabo Capital", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Wangari Ndua", company: "Standard Investment Bank", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "Wangari Ndua", company: "Mycredit", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Wangari Ndua", company: "Dama Mobile Spares", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Wangari Ndua", company: "Virtuous Explorers", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Wangari Ndua", company: "VAAL", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "Evelyne Bosibori", company: "Naivas", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "Evelyne Bosibori", company: "Arizona International College", bullsEye: false, runrate: true, products: [], status: "prospect" },
  { bse: "Evelyne Bosibori", company: "Lush Hair", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Evelyne Bosibori", company: "Nila Baby Shop", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Evelyne Bosibori", company: "Stratocore Aviation", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Evelyne Bosibori", company: "Sky View", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Allan Saiya", company: "Stanbic Bank", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "Allan Saiya", company: "Penord Ricard", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "Allan Saiya", company: "RFH", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Allan Saiya", company: "Barone Shirts", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Allan Saiya", company: "EABL", bullsEye: false, runrate: true, products: [], status: "prospect" },
  { bse: "Allan Saiya", company: "I&M Bank", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Faith Maritim", company: "Jamii Telecommunications Ltd", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Faith Maritim", company: "Farmers Choice Limited", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "Faith Maritim", company: "Decathlon", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "Faith Maritim", company: "Tatu City", bullsEye: false, runrate: true, products: [], status: "prospect" },
  { bse: "Faith Maritim", company: "Centum Real Estate", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Faith Maritim", company: "EXP Agency", bullsEye: true, runrate: false, relationshipType: "Agency", products: [], status: "prospect" },
  { bse: "John Mutuku", company: "Capwell", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "John Mutuku", company: "Ndovu", bullsEye: false, runrate: true, relationshipType: "Direct", products: [], status: "prospect" },
  { bse: "John Mutuku", company: "Equity", bullsEye: false, runrate: true, products: [], status: "prospect" },
  { bse: "John Mutuku", company: "Mivida", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "John Mutuku", company: "Bidco", bullsEye: false, runrate: false, products: [], status: "prospect" },
  { bse: "Derrick Musyoka", company: "Coop Bank", bullsEye: true, runrate: false, products: [], status: "prospect" },
  { bse: "Derrick Musyoka", company: "Isuzu", bullsEye: true, runrate: false, relationshipType: "Agency", thirdParty: "Dentsu", products: [], status: "prospect" },
  { bse: "Derrick Musyoka", company: "Coke", bullsEye: false, runrate: true, products: [], status: "prospect" },
  { bse: "Derrick Musyoka", company: "Shell", bullsEye: false, runrate: true, products: [], status: "prospect" },
  { bse: "Daisy Rono", company: "ICEA Lion", bullsEye: true, runrate: false, products: [], status: "prospect" },
];

export const BSE_AGENTS = [
  "Wangari Ndua",
  "Evelyne Bosibori",
  "Allan Saiya",
  "Faith Maritim",
  "John Mutuku",
  "Derrick Musyoka",
  "Daisy Rono",
];

export const PODCAST_TOPICS = [
  "Funerals, Coffins and Flowers: The Death Business",
  "The Last born Diaries: Family Business and Birth Order",
  "Career Suicide: The Toxic Boss and Workplace Bullying",
  "The Mpango wa Kando Files: Love, Power & Side Deals in Business",
  "Business Breakups: When co-Founders Fall Out",
  "My Fathers' Sin: Legacy, Debt & Inherited Problems",
  "Building Empires: Family Office and Generational Wealth",
  "Sweat Equity vs Smart Money: The Real Cost of 'Free' Capital",
  "Between Heaven, Earth and in-between: Religion vs Spirituality",
  "Supportive Partnerships: Love, Marriage & Life Partners",
  "Why Do They Think I Am Crazy: The Battle with Mental Health",
  "Trust Fund Entrepreneurship: Is It a Competitive Edge?",
  "Crabs in a Barrel: Scarcity vs Abundance",
  "Hustler vs Dynasty: The Great Debate",
  "Profit from Government Failure: Building Sustainable Innovation",
  "Power Plays: Business Meets Politics",
  "The Finance Mafia: Inside the Capital Club",
  "Over Branded: Too Much on Our Face",
  "Justice Lines: The Rulebook We Follow",
  "Seasons of Change: When to Hibernate and When to Blossom",
  "Digital Gold: Crypto, NFTs & the New Economy",
  "The Dropout Files: When Education Fails Entrepreneurs",
  "Culture Tax: The Hidden Cost of Tradition in Business",
  "Social Media Empires: Building Brands in the Digital Age",
  "The Gender Pay Gap: Real Talk on Money and Gender",
  "African Innovation: Building World-Class from Nairobi",
  "Health & Wealth: When Your Body Is Your Business",
  "The Immigration Dilemma: Stay, Leave, or Return?",
  "Mentor vs Tormentor: The Dark Side of Guidance",
  "Exit Strategy: When to Walk Away from Your Business",
];

export const LIVE_SHOW_INDUSTRIES = [
  "Fintech & Financial Services (PE/VC, Insurance)",
  "Creative Industry",
  "Real Estate & Construction",
  "IT & Tech Enabling Platforms",
  "Agriculture",
  "Manufacturing",
  "Retail, eCommerce & Logistics",
  "Healthcare",
  "Education",
  "Hospitality",
  "Professional Services (Law, Marketing, PR, HR, Consulting, Finance)",
  "Social Enterprise",
];
