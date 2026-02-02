export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured?: boolean;
  tags?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Developer Laptop',
    description: 'High-performance laptop with 32GB RAM, optimized for development and multitasking',
    price: 1899.99,
    originalPrice: 2199.99,
    image: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY5MzU5MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hardware',
    rating: 4.8,
    reviews: 342,
    inStock: true,
    featured: true,
    tags: ['New', 'Best Seller']
  },
  {
    id: '2',
    name: 'Mechanical Keyboard Pro',
    description: 'RGB mechanical keyboard with custom switches, perfect for coding marathons',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1618586810102-aaa7049200c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMG1lY2hhbmljYWwlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY5NDIwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hardware',
    rating: 4.6,
    reviews: 189,
    inStock: true,
    featured: true,
    tags: ['Popular']
  },
  {
    id: '3',
    name: 'Noise-Canceling Headphones',
    description: 'Premium headphones for focused coding sessions with crystal clear audio',
    price: 279.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1624896386637-c267401a1781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2OTQyMDQzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hardware',
    rating: 4.9,
    reviews: 521,
    inStock: true,
    featured: true,
    tags: ['Sale']
  },
  {
    id: '4',
    name: '4K Developer Monitor',
    description: '32" 4K monitor with 99% sRGB, ideal for coding and design work',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1649704394792-9cd6a3995cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25pdG9yJTIwZGlzcGxheSUyMHNjcmVlbnxlbnwxfHx8fDE3Njk0MjA0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hardware',
    rating: 4.7,
    reviews: 267,
    inStock: true,
    tags: ['Premium']
  },
  {
    id: '5',
    name: 'Ergonomic Mouse',
    description: 'Wireless ergonomic mouse designed for long coding sessions',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VzZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NDIwNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Hardware',
    rating: 4.5,
    reviews: 143,
    inStock: true
  },
  {
    id: '6',
    name: 'Clean Code - Advanced Edition',
    description: 'The definitive guide to writing clean, maintainable code',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1732304719975-1205d9a1c113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY29kaW5nJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY5NDIwNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Books',
    rating: 4.9,
    reviews: 892,
    inStock: true,
    tags: ['Best Seller']
  },
  {
    id: '7',
    name: 'Full Stack Development Course',
    description: 'Complete video course covering React, Node.js, and databases',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RlJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY5MzU5MDg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Courses',
    rating: 4.8,
    reviews: 1243,
    inStock: true,
    featured: true,
    tags: ['Sale', 'Popular']
  },
  {
    id: '8',
    name: 'GitHub Copilot Pro',
    description: 'Annual subscription to AI-powered coding assistant',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1618586810102-aaa7049200c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMG1lY2hhbmljYWwlMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzY5NDIwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Software',
    rating: 4.7,
    reviews: 678,
    inStock: true,
    tags: ['Subscription']
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'hardware', name: 'Hardware', count: products.filter(p => p.category === 'Hardware').length },
  { id: 'books', name: 'Books', count: products.filter(p => p.category === 'Books').length },
  { id: 'courses', name: 'Courses', count: products.filter(p => p.category === 'Courses').length },
  { id: 'software', name: 'Software', count: products.filter(p => p.category === 'Software').length },
];
