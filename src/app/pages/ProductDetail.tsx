import { useParams, Link, useNavigate } from 'react-router';
import { products } from '@/app/data/products';
import { Product } from '@/app/data/products';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent } from '@/app/components/ui/card';
import { Separator } from '@/app/components/ui/separator';
import { ShoppingCart, Star, ArrowLeft, Heart, Share2, Check } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { toast } from 'sonner';
import { ProductCard } from '@/app/components/ProductCard';
import { QuickViewModal } from '@/app/components/QuickViewModal';
import { useState } from 'react';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist
          </p>
          <Link to="/products">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8 text-gray-600">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </Card>

            {/* Tags */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.tags?.map((tag) => (
                <Badge
                  key={tag}
                  variant={tag === 'Sale' ? 'destructive' : 'default'}
                  className={`text-sm ${
                    tag === 'Sale'
                      ? 'bg-red-500'
                      : tag === 'New'
                      ? 'bg-green-500'
                      : 'bg-blue-500'
                  }`}
                >
                  {tag}
                </Badge>
              ))}
              {discount > 0 && (
                <Badge className="bg-orange-500 text-sm">
                  -{discount}% OFF
                </Badge>
              )}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-4">
              <Badge variant="outline" className="mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-600 text-lg mb-8">
                {product.description}
              </p>
            </div>

            <Separator className="my-6" />

            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-600" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-600" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-600" />
                <span>1-year warranty included</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-green-600" />
                <span>24/7 customer support</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleToggleWishlist}
              >
                <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => toast.success('Link copied to clipboard!')}
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Stock Status */}
            <Card className={product.inStock ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}>
              <CardContent className="p-4">
                <p className={`font-semibold ${product.inStock ? 'text-green-800' : 'text-red-800'}`}>
                  {product.inStock ? '✓ In Stock - Ships within 2-3 business days' : '✗ Out of Stock'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard 
                  key={relatedProduct.id} 
                  product={relatedProduct}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        open={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}