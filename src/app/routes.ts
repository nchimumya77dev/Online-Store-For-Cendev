import { createBrowserRouter } from 'react-router';
import { Root } from '@/app/Root';
import { Home } from '@/app/pages/Home';
import { Products } from '@/app/pages/Products';
import { ProductDetail } from '@/app/pages/ProductDetail';
import { Cart } from '@/app/pages/Cart';
import { Categories } from '@/app/pages/Categories';
import { Wishlist } from '@/app/pages/Wishlist';
import { Login } from '@/app/pages/Login';
import { Register } from '@/app/pages/Register';
import { Profile } from '@/app/pages/Profile';
import { SellerDashboard } from '@/app/pages/SellerDashboard';
import { Orders } from '@/app/pages/Orders';
import { Wireframes } from '@/app/pages/Wireframes';
import { NotFound } from '@/app/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'products', Component: Products },
      { path: 'product/:id', Component: ProductDetail },
      { path: 'cart', Component: Cart },
      { path: 'categories', Component: Categories },
      { path: 'wishlist', Component: Wishlist },
      { path: 'profile', Component: Profile },
      { path: 'seller-dashboard', Component: SellerDashboard },
      { path: 'orders', Component: Orders },
      { path: 'wireframes', Component: Wireframes },
      { path: '*', Component: NotFound },
    ],
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/register',
    Component: Register,
  },
]);