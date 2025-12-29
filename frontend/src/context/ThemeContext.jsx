import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);
export const ThemeProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);
  return <ThemeContext.Provider value={{toggleTheme, setToggleTheme}}>{children}</ThemeContext.Provider>;
};
