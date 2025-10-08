import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import SideNav from "../shared/components/SideNav";
import { useUI } from "../app/providers/UIProvider";

const MainLayout = () => {
  const { isSideNavOpen, sideNavTog } = useUI();

  return (
    <div className="flex">
      {isSideNavOpen && <SideNav />}
      <div
        className={`flex flex-col flex-grow transition-all ${
          (isSideNavOpen && sideNavTog) ? "ml-40" : (isSideNavOpen && !sideNavTog) ? "ml-14" : ''} `}
      >
        <Navbar />
        <main className="pt-16 justify-center ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
