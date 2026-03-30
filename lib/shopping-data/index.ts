export interface Brand {
  name: string;
  category: string;
  logo?: string;
  website?: string;
  description?: string;
}

export const TOP_BRANDS: Brand[] = [
  { name: "Safaricom", category: "Telecom", description: "Leading mobile network operator in Kenya." },
  { name: "Equity Bank", category: "Banking", description: "Pan-African banking group." },
  { name: "NCBA", category: "Banking", description: "National Commercial Bank of Africa." },
  { name: "KCB", category: "Banking", description: "Kenya Commercial Bank Group." },
  { name: "Tusker", category: "Beverages", description: "Kenya's iconic beer brand by EABL." },
];

export const SHOPPING_SUMMARY = {
  totalBrands: 5,
  totalCategories: 3,
  lastUpdated: "2024-01-15",
  highlights: [
    "5 top brands across 3 categories",
    "Focus on East African market leaders",
    "Updated quarterly",
  ],
};

export default TOP_BRANDS;
