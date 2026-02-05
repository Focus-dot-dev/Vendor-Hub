// Helper data for random generation
// Helper data for random generation
export const vendors = [
  "TechGiant Ltd",
  "FashionHub",
  "GreenGardens",
  "LuxuryBeauty",
  "SpeedyAuto",
  "SportyLife",
  "GadgetWorld",
  "HomeEssentials",
];

const users = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona"];

const sampleReviews = [
  "Great product, highly recommended!",
  "Good value for money.",
  "Fast shipping and excellent quality.",
  "Average experience, could be better.",
  "Absolutely love it!",
  "Not what I expected, but okay.",
];

// Helper to get random item from array
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Helper to generate random reviews
const generateReviews = (count = 2) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    user: getRandom(users),
    rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars mostly
    comment: getRandom(sampleReviews),
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
  }));
};

const rawProducts = [
  // Electronics
  {
    id: 1,
    title: "Wireless Noise Cancelling Headphones",
    price: 299.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Electronics",
  },
  {
    id: 2,
    title: "Smart Fitness Watch Series 5",
    price: 199.5,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Electronics",
  },
  {
    id: 3,
    title: "4K Digital Camera Professional",
    price: 850.0,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60",
    discount: 5,
    category: "Electronics",
  },
  {
    id: 4,
    title: "Gaming Laptop Pro X",
    price: 1299.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop&q=60",
    discount: 20,
    category: "Electronics",
  },
  {
    id: 5,
    title: "Smartphone 15 Pro Max",
    price: 1199.0,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Electronics",
  },
  {
    id: 6,
    title: "VR Headset Reality",
    price: 399.0,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Electronics",
  },
  {
    id: 7,
    title: "Wireless Earbuds Pro",
    price: 149.0,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Electronics",
  },
  {
    id: 8,
    title: "Bluetooth Speaker Portable",
    price: 89.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60",
    discount: 10,
    category: "Electronics",
  },
  {
    id: 9,
    title: "Mechanical Gaming Keyboard RGB",
    price: 129.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60",
    discount: 25,
    category: "Electronics",
  },
  {
    id: 10,
    title: "Wireless Gaming Mouse",
    price: 79.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Electronics",
  },
  {
    id: 11,
    title: "27-inch 4K Monitor",
    price: 449.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Electronics",
  },
  {
    id: 12,
    title: "Tablet Pro 12.9 inch",
    price: 899.0,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Electronics",
  },

  // Fashion
  {
    id: 13,
    title: "Men's Casual Jacket",
    price: 59.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60",
    discount: 30,
    category: "Fashion",
  },
  {
    id: 14,
    title: "Women's Summer Dress",
    price: 45.0,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Fashion",
  },
  {
    id: 15,
    title: "Designer Leather Bag",
    price: 120.0,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60",
    discount: 10,
    category: "Fashion",
  },
  {
    id: 16,
    title: "Running Sneakers",
    price: 89.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Fashion",
  },
  {
    id: 17,
    title: "Classic Denim Jeans",
    price: 49.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60",
    discount: 20,
    category: "Fashion",
  },
  {
    id: 18,
    title: "Leather Wallet Premium",
    price: 39.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Fashion",
  },
  {
    id: 19,
    title: "Sunglasses Aviator",
    price: 79.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Fashion",
  },
  {
    id: 20,
    title: "Winter Coat Wool",
    price: 149.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop&q=60",
    discount: 25,
    category: "Fashion",
  },
  {
    id: 21,
    title: "Formal Dress Shoes",
    price: 99.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Fashion",
  },
  {
    id: 22,
    title: "Backpack Travel",
    price: 69.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
    discount: 10,
    category: "Fashion",
  },

  // Home
  {
    id: 23,
    title: "Ergonomic Office Chair",
    price: 159.0,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format&fit=crop&q=60",
    discount: 10,
    category: "Home",
  },
  {
    id: 24,
    title: "Modern Floor Lamp",
    price: 89.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Home",
  },
  {
    id: 25,
    title: "Coffee Maker Automatic",
    price: 129.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Home",
  },
  {
    id: 26,
    title: "Vacuum Cleaner Robot",
    price: 299.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&auto=format&fit=crop&q=60",
    discount: 20,
    category: "Home",
  },
  {
    id: 27,
    title: "Air Purifier HEPA",
    price: 199.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Home",
  },
  {
    id: 28,
    title: "Bedding Set Luxury",
    price: 79.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&auto=format&fit=crop&q=60",
    discount: 25,
    category: "Home",
  },
  {
    id: 29,
    title: "Kitchen Knife Set Professional",
    price: 149.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&auto=format&fit=crop&q=60",
    discount: 10,
    category: "Home",
  },
  {
    id: 30,
    title: "Dining Table Set",
    price: 499.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Home",
  },

  // Sports
  {
    id: 31,
    title: "Yoga Mat Premium",
    price: 39.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Sports",
  },
  {
    id: 32,
    title: "Dumbbell Set Adjustable",
    price: 149.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60",
    discount: 20,
    category: "Sports",
  },
  {
    id: 33,
    title: "Treadmill Electric Folding",
    price: 599.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=60",
    discount: null,
    category: "Sports",
  },
  {
    id: 34,
    title: "Basketball Official Size",
    price: 29.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Sports",
  },
  {
    id: 35,
    title: "Tennis Racket Professional",
    price: 119.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500&auto=format&fit=crop&q=60",
    discount: 10,
    category: "Sports",
  },
  {
    id: 36,
    title: "Cycling Helmet Safety",
    price: 49.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Sports",
  },
  {
    id: 37,
    title: "Swimming Goggles Pro",
    price: 24.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Sports",
  },
  {
    id: 38,
    title: "Resistance Bands Set",
    price: 19.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&auto=format&fit=crop&q=60",
    discount: 25,
    category: "Sports",
  },

  // Beauty
  {
    id: 39,
    title: "Luxury Skin Care Set",
    price: 89.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Beauty",
  },
  {
    id: 40,
    title: "Premium Hair Dryer",
    price: 129.0,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Beauty",
  },
  {
    id: 41,
    title: "Organic Face Serum",
    price: 45.0,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&auto=format&fit=crop&q=60",
    discount: 20,
    category: "Beauty",
  },
  {
    id: 42,
    title: "Massage Gun Pro",
    price: 199.0,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format&fit=crop&q=60",
    discount: 10,
    category: "Beauty",
  },
  {
    id: 43,
    title: "Makeup Brush Set Professional",
    price: 59.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&auto=format&fit=crop&q=60",
    discount: 30,
    category: "Beauty",
  },
  {
    id: 44,
    title: "Electric Facial Cleansing Brush",
    price: 79.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Beauty",
  },
  {
    id: 45,
    title: "Perfume Luxury Collection",
    price: 149.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Beauty",
  },
  {
    id: 46,
    title: "Hair Straightener Ceramic",
    price: 69.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&auto=format&fit=crop&q=60",
    discount: 20,
    category: "Beauty",
  },

  // Auto
  {
    id: 47,
    title: "Car Dash Camera 4K",
    price: 129.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&auto=format&fit=crop&q=60",
    discount: 10,
    category: "Auto",
  },
  {
    id: 48,
    title: "Tire Pressure Gauge Digital",
    price: 19.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Auto",
  },
  {
    id: 49,
    title: "Car Phone Mount Magnetic",
    price: 24.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&auto=format&fit=crop&q=60",
    discount: 15,
    category: "Auto",
  },
  {
    id: 50,
    title: "Jump Starter Portable",
    price: 89.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&auto=format&fit=crop&q=60",
    discount: 20,
    category: "Auto",
  },
  {
    id: 51,
    title: "Car Vacuum Cleaner Cordless",
    price: 59.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&auto=format&fit=crop&q=60",
    discount: null,
    category: "Auto",
  },
  {
    id: 52,
    title: "LED Headlight Bulbs",
    price: 39.99,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60",
    discount: 25,
    category: "Auto",
  },
];

export const allProducts = rawProducts.map((product) => ({
  ...product,
  vendor: getRandom(vendors),
  reviews: generateReviews(Math.floor(Math.random() * 5) + 1),
}));

export const getProductById = (id) => {
  return allProducts.find((product) => product.id === parseInt(id));
};
