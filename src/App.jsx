import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/admin/Login";
import React from "react";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import VendorManagement from "./pages/admin/VendorManagement";
import KYCRequests from "./pages/admin/KYCRequests";
import Analytics from "./pages/admin/Analytics";
import Settings from "./pages/admin/Settings";
import AdminProducts from "./pages/admin/AdminProducts";
import VendorSignup from "./pages/VendorSignup";
import VendorLogin from "./pages/vendor/VendorLogin";
import VendorLayout from "./layouts/VendorLayout";
import VendorProfile from "./pages/vendor/VendorProfile";
import VendorSettings from "./pages/vendor/VendorSettings";
import VendorKYC from "./pages/vendor/VendorKYC";
import VendorAnalytics from "./pages/vendor/VendorAnalytics";
import VendorAddProduct from "./pages/vendor/VendorAddProduct";
import VendorOrderDetails from "./pages/vendor/VendorOrderDetails";
import VendorNotifications from "./pages/vendor/VendorNotifications";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerSignup from "./pages/CustomerSignup";
import CustomerProfile from "./pages/CustomerProfile";
import CustomerOrders from "./pages/CustomerOrders";
import CustomerOrderDetails from "./pages/CustomerOrderDetails";
import CustomerWishlist from "./pages/CustomerWishlist";
import CustomerAddresses from "./pages/CustomerAddresses";
import HelpDesk from "./pages/HelpDesk";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import AdminNotifications from "./pages/admin/AdminNotifications";

import Cart from "./pages/Cart";
import { ThemeProvider } from "./context/ThemeProvider";
import { CartProvider } from "./context/CartProvider";
import { VendorProvider } from "./context/VendorProvider";
import { AuthProvider } from "./context/AuthContext";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import VendorProducts from "./pages/vendor/VendorProducts";
import VendorOrders from "./pages/vendor/VendorOrders";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <VendorProvider>
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<CustomerLogin />} />
                <Route path="/signup" element={<CustomerSignup />} />
                <Route path="/profile" element={<CustomerProfile />} />
                <Route path="/orders" element={<CustomerOrders />} />
                <Route
                  path="/orders/:orderId"
                  element={<CustomerOrderDetails />}
                />
                <Route path="/wishlist" element={<CustomerWishlist />} />
                <Route path="/addresses" element={<CustomerAddresses />} />
                <Route path="/help" element={<HelpDesk />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/shop" element={<ProductListing />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route
                  path="/order-confirmation"
                  element={<OrderConfirmation />}
                />
                <Route
                  path="/category/:categorySlug"
                  element={<ProductListing />}
                />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/vendorSignup" element={<VendorSignup />} />
                <Route path="/vendor/login" element={<VendorLogin />} />
                <Route path="/vendor" element={<VendorLayout />}>
                  <Route
                    index
                    element={<Navigate to="/vendor/dashboard" replace />}
                  />
                  <Route path="dashboard" element={<VendorDashboard />} />
                  <Route path="products" element={<VendorProducts />} />
                  <Route path="products/add" element={<VendorAddProduct />} />
                  <Route
                    path="products/edit/:id"
                    element={<VendorAddProduct />}
                  />
                  <Route path="orders" element={<VendorOrders />} />
                  <Route path="orders/:id" element={<VendorOrderDetails />} />
                  <Route path="analytics" element={<VendorAnalytics />} />
                  <Route path="kyc" element={<VendorKYC />} />
                  <Route path="profile" element={<VendorProfile />} />
                  <Route path="settings" element={<VendorSettings />} />
                  <Route
                    path="notifications"
                    element={<VendorNotifications />}
                  />
                  {/* Add other vendor routes here */}
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                  <Route
                    index
                    element={<Navigate to="/admin/dashboard" replace />}
                  />
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="vendors" element={<VendorManagement />} />
                  <Route path="products" element={<AdminProducts />} />
                  <Route path="kyc" element={<KYCRequests />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="settings" element={<Settings />} />
                  <Route
                    path="notifications"
                    element={<AdminNotifications />}
                  />
                </Route>
                {/* 404 Catch-all route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </VendorProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
