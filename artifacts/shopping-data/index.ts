export interface ShoppingItem {
  brand: string;
  totalSpend: number;
  itemCount: number;
  products: string[];
  categories: string[];
}

export interface ShoppingSummary {
  totalSpend: number;
  totalLineItems: number;
  uniqueProducts: number;
  dateRange: { from: string; to: string };
}

export const TOP_BRANDS: ShoppingItem[] = [
  { brand: "Dove", totalSpend: 12500, itemCount: 15, products: ["Body Wash", "Shampoo", "Soap"], categories: ["Personal Care"] },
  { brand: "Royco", totalSpend: 8400, itemCount: 28, products: ["Seasoning Cubes", "Spice Mix"], categories: ["Cooking"] },
  { brand: "Bio Food", totalSpend: 7200, itemCount: 12, products: ["Milk", "Yogurt", "Cheese"], categories: ["Dairy"] },
  { brand: "Supa Loaf", totalSpend: 6900, itemCount: 23, products: ["White Bread", "Brown Bread"], categories: ["Bakery"] },
  { brand: "Isinya", totalSpend: 5800, itemCount: 18, products: ["Eggs"], categories: ["Poultry"] },
  { brand: "Mortein", totalSpend: 4500, itemCount: 8, products: ["Insect Spray", "Coils"], categories: ["Home Care"] },
  { brand: "Pride", totalSpend: 3900, itemCount: 10, products: ["Dish Soap", "Surface Cleaner"], categories: ["Cleaning"] },
  { brand: "Glade", totalSpend: 3200, itemCount: 6, products: ["Air Freshener", "Candles"], categories: ["Home Fragrance"] },
  { brand: "Kericho Gold", totalSpend: 2800, itemCount: 9, products: ["Black Tea", "Green Tea"], categories: ["Beverages"] },
  { brand: "Del Monte", totalSpend: 2500, itemCount: 7, products: ["Juice", "Ketchup", "Canned Fruit"], categories: ["Food & Beverage"] },
  { brand: "Tena", totalSpend: 2200, itemCount: 5, products: ["Tissue", "Paper Towels"], categories: ["Household"] },
  { brand: "Dettol", totalSpend: 2100, itemCount: 6, products: ["Hand Wash", "Sanitizer"], categories: ["Health & Hygiene"] },
  { brand: "Gofrut", totalSpend: 1800, itemCount: 8, products: ["Mango Juice", "Tropical Blend"], categories: ["Beverages"] },
  { brand: "Mumias", totalSpend: 1500, itemCount: 4, products: ["White Sugar", "Brown Sugar"], categories: ["Cooking"] },
  { brand: "Velvex", totalSpend: 1200, itemCount: 5, products: ["Napkins", "Serviettes"], categories: ["Household"] },
  { brand: "Festive", totalSpend: 1100, itemCount: 4, products: ["Toilet Tissue", "Kitchen Rolls"], categories: ["Household"] },
];

export const SHOPPING_SUMMARY: ShoppingSummary = {
  totalSpend: TOP_BRANDS.reduce((sum, b) => sum + b.totalSpend, 0),
  totalLineItems: TOP_BRANDS.reduce((sum, b) => sum + b.itemCount, 0),
  uniqueProducts: TOP_BRANDS.reduce((sum, b) => sum + b.products.length, 0),
  dateRange: { from: "01/2025", to: "03/2026" },
};
