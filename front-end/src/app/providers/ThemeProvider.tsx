import { createContext, useContext, useState, useEffect } from "react";
import type{ReactNode} from 'react'
type Theme= 'light' | 'dark';

type ThemeContextType={
    theme: Theme;
    toggleTheme:()=>void;
};

const ThemeContext= createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider= ({children}: { children: ReactNode})=>{
    const[theme, setTheme]= useState<Theme>('light');

    useEffect(()=>{
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme])
    
    const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme=()=>{
    const ctx= useContext(ThemeContext);
    if(!ctx) throw new Error('useTheme must be used within themeProvider');
    return ctx;
}