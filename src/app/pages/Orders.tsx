import { useAuth } from '@/app/context/AuthContext';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { motion } from 'motion/react';
import { Package, CheckCircle, Clock, Truck, ArrowLeft, Eye } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// Mock orders data
const mockOrders = [
  {
    id: 'ORD-001',
    date: '2026-01-28',
    status: 'delivered',
    total: 2158,
    items: [
      {
        id: '1',
        name: 'MacBook Pro M3 14"',
        price: 1999,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
      },
      {
        id: '2',
        name: 'Mechanical Keyboard RGB',
        price: 159,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400',
      },
    ],
  },
  {
    id: 'ORD-002',
    date: '2026-01-25',
    status: 'shipped',
    total: 899,
    items: [
      {
        id: '3',
        name: '4K Monitor 32"',
        price: 899,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
      },
    ],
  },
  {
    id: 'ORD-003',
    date: '2026-01-20',
    status: 'processing',
    total: 79,
    items: [
      {
        id: '4',
        name: 'Wireless Mouse',
        price: 79,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
      },
    ],
  },
];

export function Orders() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'delivered':
        return {
          badge: <Badge className="bg-green-500"><CheckCircle className="w-3 h-3 mr-1" />Delivered</Badge>,
          icon: <CheckCircle className="w-5 h-5 text-green-600" />,
        };
      case 'shipped':
        return {
          badge: <Badge className="bg-blue-500"><Truck className="w-3 h-3 mr-1" />Shipped</Badge>,
          icon: <Truck className="w-5 h-5 text-blue-600" />,
        };
      case 'processing':
        return {
          badge: <Badge className="bg-yellow-500"><Clock className="w-3 h-3 mr-1" />Processing</Badge>,
          icon: <Clock className="w-5 h-5 text-yellow-600" />,
        };
      default:
        return {
          badge: <Badge>{status}</Badge>,
          icon: <Package className="w-5 h-5 text-gray-600" />,
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Orders</h1>
              <p className="text-gray-600">
                Track and manage your orders
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          {mockOrders.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center py-16">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
                <p className="text-gray-600 mb-6">
                  Start shopping to see your orders here
                </p>
                <Button onClick={() => navigate('/products')}>
                  Browse Products
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {mockOrders.map((order, index) => {
                const statusInfo = getStatusInfo(order.status);
                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardHeader className="bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg mb-1">
                              Order {order.id}
                            </CardTitle>
                            <p className="text-sm text-gray-600">
                              Placed on {new Date(order.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                          <div className="text-right">
                            {statusInfo.badge}
                            <p className="text-sm text-gray-600 mt-1">
                              Total: <span className="font-bold">${order.total.toFixed(2)}</span>
                            </p>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          {order.items.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                            >
                              <ImageWithFallback
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold mb-1">{item.name}</h4>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <span>Qty: {item.quantity}</span>
                                  <span>•</span>
                                  <span className="font-semibold">${item.price.toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6">
                          <Button variant="outline" className="flex-1">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          {order.status === 'delivered' && (
                            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                              Buy Again
                            </Button>
                          )}
                          {order.status === 'shipped' && (
                            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                              <Truck className="w-4 h-4 mr-2" />
                              Track Order
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Order Summary */}
          {mockOrders.length > 0 && (
            <Card className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">{mockOrders.length}</p>
                    <p className="text-sm text-gray-600 mt-1">Total Orders</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-600">
                      ${mockOrders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Total Spent</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-purple-600">
                      {mockOrders.reduce((sum, order) => sum + order.items.length, 0)}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Items Purchased</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
