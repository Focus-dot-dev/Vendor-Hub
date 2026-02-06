import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("customer_user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userData) => {
    // In a real app, this would come from an API response
    const userToStore = {
      ...userData,
      id: "cust_" + Math.random().toString(36).substr(2, 9),
      role: "customer",
    };
    setUser(userToStore);
    localStorage.setItem("customer_user", JSON.stringify(userToStore));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("customer_user");
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
