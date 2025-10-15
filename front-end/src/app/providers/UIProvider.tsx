import { createContext, useContext, useState } from "react";
import type{ReactNode} from 'react';

type UIContextType={
    isSideNavOpen:boolean;
    sideNavTog:boolean;
    setSideNavTog: ()=>void;
    setSideNavOpen:()=>void;
  theme: "light" | "dark",
  accentColor: string,
  layoutStyle: "compact" | "spacious",
  animations: boolean,
  navPosition: "top" | "side",
  setTheme: (theme: "light" | "dark") => void,
  setAccentColor: (color: string) => void,
  setLayoutStyle: (style: "compact" | "spacious") => void,
  setAnimations: (enabled: boolean) => void,
  setNavPosition: (pos: "top" | "side") => void,
  resetUI: () => void,
}

const UIContext= createContext<UIContextType | undefined>(undefined);

export const UIProvider= ({children}:{children:ReactNode})=>{
    const [isSideNavOpen, setIsSideNavopen]= useState(true);
    const setSideNavOpen=()=> setIsSideNavopen(prev=> !prev);
    const [sideNavTog, setsideNavTog]= useState(true);
    const setSideNavTog=()=>setsideNavTog(prev=>!prev);
    //settings
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [accentColor, setAccentColor] = useState<string>("#3498db"); // default blue
    const [layoutStyle, setLayoutStyle] = useState<"compact" | "spacious">("compact");
    const [animations, setAnimations] = useState<boolean>(true);
    const [navPosition, setNavPosition] = useState<"top" | "side">("side");

    const resetUI = () => {
  setTheme("light");
  setAccentColor("#3498db");
  setLayoutStyle("compact");
  setAnimations(true);
  setNavPosition("side");
}; 

    return(
        <UIContext.Provider value={{isSideNavOpen, setSideNavOpen, sideNavTog, setSideNavTog,
                    theme, accentColor, animations, layoutStyle, navPosition, resetUI,setAccentColor,setAnimations,setLayoutStyle,setNavPosition,setTheme,
         }}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI=()=>{
    const ctx= useContext(UIContext);
    if(!ctx) throw new Error('useUI must be used within UIProvider');
    return ctx;
};