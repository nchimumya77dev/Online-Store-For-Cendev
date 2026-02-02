import { RouterProvider } from "react-router";
import { router } from "@/app/routes";
import { CartProvider } from "@/app/context/CartContext";
import { WishlistProvider } from "@/app/context/WishlistContext";
import { AuthProvider } from "@/app/context/AuthContext";
import { seedDemoUsers } from "@/app/utils/seedDemoUsers";

// Seed demo users once when module loads
seedDemoUsers();

export default function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}