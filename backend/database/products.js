const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI.",
    price: 25.99,
    category: "Electronics",
    stock: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    description: "Noise-cancelling over-ear Bluetooth headphones.",
    price: 79.99,
    category: "Electronics",
    stock: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    reviews: 200,
  },
  {
    id: 3,
    name: "4K Monitor",
    description: "27-inch 4K UHD monitor with HDR support.",
    price: 299.99,
    category: "Electronics",
    stock: 20,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1681470644798-dd63dc4a0851?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    reviews: 85,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with blue switches.",
    price: 89.99,
    category: "Electronics",
    stock: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 150,
  },
  {
    id: 5,
    name: "Gaming Chair",
    description: "Ergonomic gaming chair with lumbar support.",
    price: 199.99,
    category: "Furniture",
    stock: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2758&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.4,
    reviews: 65,
  },
  {
    id: 6,
    name: "Smart Watch",
    description: "Water-resistant smart watch with heart rate monitor.",
    price: 129.99,
    category: "Wearables",
    stock: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3,
    reviews: 95,
  },
  {
    id: 7,
    name: "Portable Charger",
    description: "10000mAh portable charger with fast charging.",
    price: 29.99,
    category: "Accessories",
    stock: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1603539550859-3a559eb00687?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.2,
    reviews: 130,
  },
  {
    id: 8,
    name: "Electric Toothbrush",
    description: "Rechargeable electric toothbrush with multiple modes.",
    price: 49.99,
    category: "Health",
    stock: 25,
    imageUrl:
      "https://images.unsplash.com/photo-1559592892-19db4235d786?q=80&w=3030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    reviews: 75,
  },
  {
    id: 9,
    name: "Air Purifier",
    description: "HEPA air purifier for large rooms.",
    price: 199.99,
    category: "Home Appliances",
    stock: 10,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    reviews: 50,
  },
  {
    id: 10,
    name: "Yoga Mat",
    description: "Non-slip yoga mat with carrying strap.",
    price: 19.99,
    category: "Fitness",
    stock: 80,
    imageUrl:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    reviews: 90,
  },
];

module.exports = { products };
