import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext=createContext();

export const ThemeProvider = ({children})=>{
  const [theme, setTheme] = useState(() => {
    const savedTheme=localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : 'light';
  });
  useEffect(()=>{
    localStorage.setItem('theme',JSON.stringify(theme));
  },[theme]);
  const toggleTheme=()=>{
    setTheme((prevTheme) => (prevTheme==='light'?'dark':'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};