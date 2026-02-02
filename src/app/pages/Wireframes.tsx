import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { motion } from 'motion/react';
import {
  Home,
  ShoppingCart,
  Package,
  Heart,
  User,
  Store,
  LogIn,
  UserPlus,
  Grid3x3,
  FileText,
  ShoppingBag,
  BarChart3,
  Search,
  Filter,
  CreditCard,
  MapPin,
} from 'lucide-react';

export function Wireframes() {
  const pages = [
    {
      name: 'Home Page',
      route: '/',
      icon: Home,
      sections: [
        'Hero Section - Animated gradient banner',
        'Featured Categories - Quick navigation',
        'Featured Products - Best sellers grid',
        'Developer Tools Section',
        'Promotional Banner',
        'Newsletter Signup',
        'Footer with links',
      ],
      userAccess: 'Public',
    },
    {
      name: 'Products Page',
      route: '/products',
      icon: Package,
      sections: [
        'Search Bar - Real-time search',
        'Filters Panel - Categories, price, rating',
        'Sort Options - Price, rating, newest',
        'Products Grid - Card layout with images',
        'Product Cards - Image, title, price, badges',
        'Quick View Modal',
        'Pagination',
      ],
      userAccess: 'Public',
    },
    {
      name: 'Product Detail',
      route: '/product/:id',
      icon: ShoppingBag,
      sections: [
        'Product Image Gallery',
        'Product Information - Title, price, rating',
        'Product Description',
        'Specifications Table',
        'Add to Cart Button',
        'Add to Wishlist Button',
        'Related Products',
        'Reviews Section',
      ],
      userAccess: 'Public',
    },
    {
      name: 'Shopping Cart',
      route: '/cart',
      icon: ShoppingCart,
      sections: [
        'Cart Items List - Product cards',
        'Quantity Controls - +/- buttons',
        'Remove Item Button',
        'Order Summary - Subtotal, shipping, tax',
        'Promo Code Input',
        'Checkout Button',
        'Continue Shopping Link',
      ],
      userAccess: 'Public',
    },
    {
      name: 'Wishlist',
      route: '/wishlist',
      icon: Heart,
      sections: [
        'Wishlist Items Grid',
        'Product Cards - Saved items',
        'Move to Cart Button',
        'Remove from Wishlist',
        'Share Wishlist Option',
        'Empty State Message',
      ],
      userAccess: 'Public',
    },
    {
      name: 'Categories',
      route: '/categories',
      icon: Grid3x3,
      sections: [
        'Category Cards Grid',
        'Category Icons',
        'Product Count per Category',
        'Featured Categories',
        'Category Filters',
      ],
      userAccess: 'Public',
    },
    {
      name: 'Login',
      route: '/login',
      icon: LogIn,
      sections: [
        'CENDEV Logo',
        'Email Input Field',
        'Password Input Field',
        'Remember Me Checkbox',
        'Forgot Password Link',
        'Sign In Button',
        'Sign Up Link',
        'Demo Credentials Display',
      ],
      userAccess: 'Guest Only',
    },
    {
      name: 'Register',
      route: '/register',
      icon: UserPlus,
      sections: [
        'CENDEV Logo',
        'Account Type Selection - Buyer/Seller cards',
        'Full Name Input',
        'Email Input',
        'Company Name (Sellers only)',
        'Password Fields - With confirmation',
        'Terms & Conditions Checkbox',
        'Create Account Button',
        'Login Link',
      ],
      userAccess: 'Guest Only',
    },
    {
      name: 'User Profile',
      route: '/profile',
      icon: User,
      sections: [
        'Profile Sidebar - Avatar, role badge',
        'Account Stats - Member since, User ID',
        'Personal Information Form',
        'Edit Profile Toggle',
        'Quick Links - Orders, Dashboard',
        'Logout Button',
        'Security Settings',
      ],
      userAccess: 'Authenticated Users',
    },
    {
      name: 'My Orders',
      route: '/orders',
      icon: FileText,
      sections: [
        'Order History List',
        'Order Cards - ID, date, status',
        'Order Items - Product images & details',
        'Status Badges - Delivered, Shipped, Processing',
        'View Details Button',
        'Track Order Button',
        'Order Summary Stats',
        'Buy Again Button',
      ],
      userAccess: 'Authenticated Users',
    },
    {
      name: 'Seller Dashboard',
      route: '/seller-dashboard',
      icon: Store,
      sections: [
        'Stats Grid - Revenue, Orders, Products, Customers',
        'Recent Orders List',
        'Products Management - CRUD operations',
        'Quick Actions Panel',
        'Performance Metrics - Monthly goals',
        'Product Status Indicators',
        'Analytics Chart',
        'Add Product Button',
      ],
      userAccess: 'Sellers Only',
    },
  ];

  const features = [
    {
      category: 'Core Features',
      items: [
        'Shopping Cart with CRUD operations',
        'Wishlist functionality',
        'Product filtering & search',
        'Quick View modals',
        'Price range filters',
        'Rating filters',
        'Sort options',
      ],
    },
    {
      category: 'Authentication',
      items: [
        'User registration (Buyer/Seller)',
        'Login system',
        'User profiles',
        'Role-based access',
        'Protected routes',
        'Demo credentials',
      ],
    },
    {
      category: 'Design System',
      items: [
        'Gradient UI theme',
        'Smooth animations',
        'Hover effects',
        'Responsive design',
        'Badge system (Sale, New)',
        'Card components',
        'Modal system',
      ],
    },
    {
      category: 'Seller Features',
      items: [
        'Seller dashboard',
        'Product management',
        'Order tracking',
        'Sales analytics',
        'Revenue metrics',
        'Customer management',
      ],
    },
  ];

  const components = [
    { name: 'Navbar', description: 'Sticky navigation with cart, wishlist, user menu' },
    { name: 'Footer', description: 'Links, newsletter signup, social media' },
    { name: 'Product Card', description: 'Image, title, price, badges, actions' },
    { name: 'Quick View Modal', description: 'Product preview without page change' },
    { name: 'Filter Panel', description: 'Category, price, rating filters' },
    { name: 'Cart Item', description: 'Product details with quantity controls' },
    { name: 'Promo Banner', description: 'Promotional announcements' },
    { name: 'Hero Section', description: 'Animated gradient call-to-action' },
    { name: 'Stats Card', description: 'Dashboard metrics display' },
    { name: 'Order Card', description: 'Order history with status tracking' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              CENDEV Site Structure
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Complete wireframes & documentation
            </p>
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-lg px-4 py-2">
              {pages.length} Pages • {components.length} Components
            </Badge>
          </div>

          {/* Site Map */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">📋 Site Map - All Pages</CardTitle>
              <CardDescription>
                Complete overview of all pages and their sections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pages.map((page, index) => (
                  <motion.div
                    key={page.route}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow border-2">
                      <CardHeader className="bg-gradient-to-br from-blue-50 to-purple-50">
                        <div className="flex items-start justify-between mb-2">
                          <page.icon className="w-8 h-8 text-blue-600" />
                          <Badge variant={page.userAccess.includes('Public') ? 'default' : 'secondary'}>
                            {page.userAccess}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{page.name}</CardTitle>
                        <CardDescription className="font-mono text-xs">
                          {page.route}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm font-semibold mb-2 text-gray-700">
                          Page Sections:
                        </p>
                        <ul className="space-y-1.5">
                          {page.sections.map((section, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              <span>{section}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">⚡ Features Overview</CardTitle>
              <CardDescription>
                Comprehensive list of all platform features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50">
                      <CardHeader>
                        <CardTitle className="text-base">{feature.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.items.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start">
                              <span className="text-green-600 mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Reusable Components */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">🧩 Reusable Components</CardTitle>
              <CardDescription>
                Key UI components used throughout the application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {components.map((component, index) => (
                  <motion.div
                    key={component.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                  >
                    <h4 className="font-bold text-blue-600 mb-1">{component.name}</h4>
                    <p className="text-sm text-gray-600">{component.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Flows */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">🔄 User Flows</CardTitle>
              <CardDescription>
                Key user journeys through the platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Buyer Flow */}
              <div className="border-l-4 border-blue-600 pl-6 py-2">
                <h3 className="font-bold text-lg mb-3 text-blue-600">👤 Buyer Journey</h3>
                <div className="flex flex-wrap gap-2 items-center text-sm">
                  <Badge>Home</Badge>
                  <span>→</span>
                  <Badge>Browse Products</Badge>
                  <span>→</span>
                  <Badge>Product Detail</Badge>
                  <span>→</span>
                  <Badge>Add to Cart</Badge>
                  <span>→</span>
                  <Badge>Checkout</Badge>
                  <span>→</span>
                  <Badge>Order Placed</Badge>
                  <span>→</span>
                  <Badge>Track Order</Badge>
                </div>
              </div>

              {/* Seller Flow */}
              <div className="border-l-4 border-purple-600 pl-6 py-2">
                <h3 className="font-bold text-lg mb-3 text-purple-600">🏪 Seller Journey</h3>
                <div className="flex flex-wrap gap-2 items-center text-sm">
                  <Badge className="bg-purple-600">Register as Seller</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-600">Login</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-600">Dashboard</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-600">Add Products</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-600">Manage Orders</Badge>
                  <span>→</span>
                  <Badge className="bg-purple-600">View Analytics</Badge>
                </div>
              </div>

              {/* Guest Flow */}
              <div className="border-l-4 border-green-600 pl-6 py-2">
                <h3 className="font-bold text-lg mb-3 text-green-600">🌐 Guest Journey</h3>
                <div className="flex flex-wrap gap-2 items-center text-sm">
                  <Badge className="bg-green-600">Visit Site</Badge>
                  <span>→</span>
                  <Badge className="bg-green-600">Browse Products</Badge>
                  <span>→</span>
                  <Badge className="bg-green-600">Add to Cart</Badge>
                  <span>→</span>
                  <Badge className="bg-green-600">Register/Login</Badge>
                  <span>→</span>
                  <Badge className="bg-green-600">Complete Purchase</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Stack */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">🛠️ Technical Stack</CardTitle>
              <CardDescription>
                Technologies and libraries used
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-blue-600">Frontend</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• React with TypeScript</li>
                    <li>• React Router (Data mode)</li>
                    <li>• Tailwind CSS v4</li>
                    <li>• Motion (Framer Motion)</li>
                    <li>• Lucide Icons</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-purple-600">State Management</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Context API</li>
                    <li>• CartContext</li>
                    <li>• WishlistContext</li>
                    <li>• AuthContext</li>
                    <li>• LocalStorage persistence</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-green-600">UI Components</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Shadcn UI components</li>
                    <li>• Custom product cards</li>
                    <li>• Modal system</li>
                    <li>• Toast notifications (Sonner)</li>
                    <li>• Form components</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold mb-2">{pages.length}</p>
                <p className="text-sm">Total Pages</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold mb-2">{components.length}</p>
                <p className="text-sm">Components</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold mb-2">
                  {features.reduce((sum, f) => sum + f.items.length, 0)}
                </p>
                <p className="text-sm">Features</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold mb-2">3</p>
                <p className="text-sm">User Roles</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
