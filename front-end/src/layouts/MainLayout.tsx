import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import SideNav from "../shared/components/SideNav";
import { useUI } from "../app/providers/UIProvider";
import { cn } from "@/utils/cn";

const MainLayout = () => {
  const { isSideNavOpen, sideNavTog } = useUI();

  //width offset
  const sideWidth= isSideNavOpen 
                    ? sideNavTog ? 'ml-40' : 'ml-14'
                   :'ml-0'
  return(
    // <div className="min-h-screen bg-gray-50/20">
    <div className={cn("min-h-screen", 
      "bg-white/5", 'flex'
      )}>
      <Navbar/>
      <div>
        {isSideNavOpen && <SideNav/>}
        <main className={cn('flex-grow items-center', sideWidth, 'px-4 py-15')}>
          <Outlet/>
        </main>
      </div>
    </div>
  )

};

export default MainLayout;
