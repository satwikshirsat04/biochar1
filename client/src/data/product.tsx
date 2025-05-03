export const products = [
    {
      id: 1,
      name: "Biochar Soil Enhancer",
      size: "1kg",
      price: "₹199",
      originalPrice: "₹299",
      description: "Perfect for small gardens and potted plants",
      image: "/images/products/biochar1.webp",
      features: [
        "Treats up to 20 sq meters",
        "Improves water retention",
        "Increases nutrient absorption"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Biochar Soil Enhancer",
      size: "5kg",
      price: "₹999",
      originalPrice: "₹1499",
      description: "Ideal for larger farms and agricultural use",
      image: "/images/products/biochar.jpg",
      features: [
        "Treats up to 100 sq meters",
        "Long-lasting soil health",
        "Increases crop yield by 40%"
      ],
      popular: true
    }
] as const;
  
export interface Product {
    id: number;
    name: string;
    size: string;
    price: string;
    originalPrice: string;
    description: string;
    image: string;
    features: readonly string[];
    popular?: boolean;
}
  
export function getProductById(id: number): Product | undefined {
    return products.find(product => product.id === id);
}