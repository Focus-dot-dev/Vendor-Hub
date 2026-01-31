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
import VendorSignup from "./pages/VendorSignup";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ProductListing />} />
          <Route path="/category/:categorySlug" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/vendorSignup" element={<VendorSignup />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="vendors" element={<VendorManagement />} />
            <Route path="kyc" element={<KYCRequests />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
