import { categories, products } from '@/app/data/products';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Package, BookOpen, Code, Cpu } from 'lucide-react';

export function Categories() {
  const iconMap: Record<string, any> = {
    'Hardware': Cpu,
    'Books': BookOpen,
    'Courses': Code,
    'Software': Package,
  };

  const getCategoryImage = (categoryName: string) => {
    const categoryProducts = products.filter(
      p => p.category === categoryName
    );
    return categoryProducts[0]?.image || products[0].image;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Browse Categories</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our curated collection of products organized by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories
            .filter(cat => cat.id !== 'all')
            .map((category, index) => {
              const Icon = iconMap[category.name] || Package;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/products?category=${category.id}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
                      <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                            <Icon className="w-10 h-10 text-blue-600" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {category.name}
                        </h3>
                        <Badge variant="secondary" className="mb-3">
                          {category.count} {category.count === 1 ? 'Product' : 'Products'}
                        </Badge>
                        <p className="text-gray-600 text-sm">
                          Explore our selection of {category.name.toLowerCase()}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {products.length}+
              </div>
              <p className="text-gray-700 font-semibold">Total Products</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {categories.length - 1}
              </div>
              <p className="text-gray-700 font-semibold">Categories</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">
                4.8★
              </div>
              <p className="text-gray-700 font-semibold">Average Rating</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
