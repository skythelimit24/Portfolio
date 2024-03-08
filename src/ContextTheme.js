import  { createContext } from "react"
import React  from 'react';

import { useContext ,useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
 
      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );

}
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("use Data must be provided within the DataProvider");
    }
    return context;
  };
  

