import { Product } from '@/app/data/products';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/app/components/ui/card';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.(product);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`}>
        <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow duration-300 group">
          <div className="relative overflow-hidden aspect-square">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Tags */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant={tag === 'Sale' ? 'destructive' : 'default'}
                  className={
                    tag === 'Sale'
                      ? 'bg-red-500'
                      : tag === 'New'
                      ? 'bg-green-500'
                      : 'bg-blue-500'
                  }
                >
                  {tag}
                </Badge>
              ))}
              {discount > 0 && (
                <Badge className="bg-orange-500">
                  -{discount}%
                </Badge>
              )}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full shadow-lg"
                onClick={handleToggleWishlist}
              >
                <Heart 
                  className={`w-4 h-4 ${
                    isInWishlist(product.id) 
                      ? 'fill-red-500 text-red-500' 
                      : ''
                  }`} 
                />
              </Button>
              {onQuickView && (
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full shadow-lg"
                  onClick={handleQuickView}
                >
                  <Eye className="w-4 h-4" />
                </Button>
              )}
            </div>
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

            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}