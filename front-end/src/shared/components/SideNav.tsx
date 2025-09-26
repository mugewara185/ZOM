import { NavLink } from "react-router-dom";
import { useUI } from "../../app/providers/UIProvider";
import { navLinks } from "../../config/navigation";
import { cn } from "../../utils/cn";

const SideNav = () => {
  const { isSideNavOpen } = useUI();

  return (
    <aside
      className={cn(
        "h-screen bg-white dark:bg-gray-900 shadow-md transition-all fixed top-0 left-0 z-40",
        isSideNavOpen ? "w-40" : "w-14"
      )}
    >
      <nav className="flex flex-col mt-6 gap-4">
        {navLinks.map(({ id, label, path, icon: Icon }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                isActive && "bg-gray-200 dark:bg-gray-700 font-semibold"
              )
            }
          >
            <Icon className="w-5 h-5" />
            {isSideNavOpen && <span className="whitespace-nowrap">{label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideNav;
