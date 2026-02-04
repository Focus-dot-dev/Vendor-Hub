import React, { createContext, useContext, useState } from "react";

const VendorContext = createContext();

export const useVendor = () => useContext(VendorContext);

export const VendorProvider = ({ children }) => {
  // Mock Data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Earbuds",
      price: "129.99",
      stock: 45,
      category: "Electronics",
      status: "Active",
      image: "https://via.placeholder.com/150",
      description: "High quality wireless earbuds with noise cancellation.",
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: "249.99",
      stock: 12,
      category: "Electronics",
      status: "Active",
      image: "https://via.placeholder.com/150",
      description: "Advanced smartwatch with health tracking features.",
    },
    {
      id: 3,
      name: "Leather Messenger Bag",
      price: "89.50",
      stock: 8,
      category: "Accessories",
      status: "Out of Stock",
      image: "https://via.placeholder.com/150",
      description: "Premium leather bag for daily commute.",
    },
  ]);

  const [orders, setOrders] = useState([
    {
      id: "ORD-7829",
      customer: "John Doe",
      email: "john@example.com",
      date: "Oct 24, 2023",
      total: "129.99",
      status: "Pending",
      items: [{ name: "Wireless Earbuds", quantity: 1, price: "129.99" }],
      address: "123 Main St, New York, NY 10001",
    },
    {
      id: "ORD-7830",
      customer: "Sarah Smith",
      email: "sarah@example.com",
      date: "Oct 23, 2023",
      total: "249.99",
      status: "Shipped",
      items: [{ name: "Smart Watch Series 5", quantity: 1, price: "249.99" }],
      address: "456 Oak Ave, San Francisco, CA 94103",
    },
  ]);

  // Product Actions
  const addProduct = React.useCallback((product) => {
    const newProduct = { ...product, id: Date.now(), status: "Active" };
    setProducts((prev) => [...prev, newProduct]);
  }, []);

  const updateProduct = React.useCallback((id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === parseInt(id) ? { ...p, ...updatedProduct } : p,
      ),
    );
  }, []);

  const deleteProduct = React.useCallback((id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const getProduct = React.useCallback(
    (id) => {
      return products.find((p) => p.id === parseInt(id));
    },
    [products],
  );

  // Order Actions
  const updateOrderStatus = React.useCallback((id, status) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  }, []);

  const getOrder = React.useCallback(
    (id) => {
      return orders.find((o) => o.id === id);
    },
    [orders],
  );

  const value = React.useMemo(
    () => ({
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProduct,
      orders,
      orderStats: {
        totalRevenue: orders
          .reduce((acc, curr) => acc + parseFloat(curr.total), 0)
          .toFixed(2),
        totalOrders: orders.length,
      },
      updateOrderStatus,
      getOrder,
    }),
    [
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProduct,
      orders,
      updateOrderStatus,
      getOrder,
    ],
  );

  return (
    <VendorContext.Provider value={value}>{children}</VendorContext.Provider>
  );
};
