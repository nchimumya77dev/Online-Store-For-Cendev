import { useWishlist } from '@/app/context/WishlistContext';
import { useCart } from '@/app/context/CartContext';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ShoppingCart, Trash2, Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Badge } from '@/app/components/ui/badge';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleMoveAllToCart = () => {
    wishlist.forEach(product => addToCart(product));
    clearWishlist();
    toast.success('All items moved to cart!');
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-16 h-16 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">
            Save items you love for later
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">My Wishlist</h1>
            <p className="text-gray-600">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handleMoveAllToCart}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add All to Cart
            </Button>
            <Button
              variant="outline"
              onClick={clearWishlist}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Wishlist
            </Button>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden aspect-square">
                  <Link to={`/product/${product.id}`}>
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </Link>

                  {/* Remove Button */}
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute top-3 right-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => {
                      removeFromWishlist(product.id);
                      toast.success('Removed from wishlist');
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>

                  {/* Tags */}
                  {product.tags && product.tags.length > 0 && (
                    <div className="absolute top-3 left-3">
                      <Badge
                        className={
                          product.tags[0] === 'Sale'
                            ? 'bg-red-500'
                            : product.tags[0] === 'New'
                            ? 'bg-green-500'
                            : 'bg-blue-500'
                        }
                      >
                        {product.tags[0]}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
