import { createContext, useContext, useState } from "react";
import type{ReactNode} from 'react';

type UIContextType={
    isSideNavOpen:boolean;
    toggleSideNav:()=>void;
}
const UIContext= createContext<UIContextType | undefined>(undefined);

export const UIProvider= ({children}:{children:ReactNode})=>{
    const [isSideNavOpen, setIsSideNavopen]= useState(true);
    const toggleSideNav=()=>setIsSideNavopen(prev=>!prev);

    return(
        <UIContext.Provider value={{isSideNavOpen, toggleSideNav}}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI=()=>{
    const ctx= useContext(UIContext);
    if(!ctx) throw new Error('useUI must be used within UIProvider');
    return ctx;
};