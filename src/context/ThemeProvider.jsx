import React, { createContext, useContext } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // Always force light mode
  const isDarkMode = false;
  const toggleTheme = () => {}; // No-op

  // Ensure dark class is removed on mount
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
