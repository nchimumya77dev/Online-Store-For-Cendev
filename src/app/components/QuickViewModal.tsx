import { Product } from '@/app/data/products';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ShoppingCart, Star, Heart, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { toast } from 'sonner';

interface QuickViewModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, open, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleToggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Quick View: {product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-lg"
            />
            {discount > 0 && (
              <Badge className="absolute top-3 left-3 bg-orange-500">
                -{discount}% OFF
              </Badge>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Badge variant="outline" className="mb-3">
                {product.category}
              </Badge>
              <h2 className="text-2xl font-bold mb-3">{product.name}</h2>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
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
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">
                {product.description}
              </p>

              {product.tags && product.tags.length > 0 && (
                <div className="flex gap-2 mb-6 flex-wrap">
                  {product.tags.map((tag) => (
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
                </div>
              )}
            </div>

            <div className="mt-auto space-y-3">
              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleToggleWishlist}
                  className={isInWishlist(product.id) ? 'bg-red-50 border-red-200' : ''}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isInWishlist(product.id)
                        ? 'fill-red-500 text-red-500'
                        : ''
                    }`}
                  />
                </Button>
              </div>

              <Link to={`/product/${product.id}`} onClick={onClose}>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
