import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import SideNav from "../shared/components/SideNav";
import { useUI } from "../app/providers/UIProvider";

const MainLayout = () => {
  const { isSideNavOpen } = useUI();

  return (
    <div className="flex">
      <SideNav />
      <div
        className={`flex flex-col flex-grow transition-all ${
          isSideNavOpen ? "ml-40" : "ml-14"
        }`}
      >
        <Navbar />
        <main className="p-4 justify-center">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
