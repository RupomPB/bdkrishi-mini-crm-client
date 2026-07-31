import {
  LayoutDashboard,
  Users,
  Target,
  Settings,
  LogOut,
  Leaf,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Customers",
      path: "/dashboard/customers",
      icon: Users,
    },
    {
      name: "Leads",
      path: "/dashboard/leads",
      icon: Target,
    },
    {
      name: "Settings",
      path: "#",
      icon: Settings,
    },
  ];

  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col shadow-2xl">

      {/* Logo */}

      <div className="px-8 py-8 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center shadow-lg">

            <Leaf size={24} />

          </div>

          <div>

            <h1 className="text-2xl font-black tracking-wide">
              BDKrishi
            </h1>

            <p className="text-slate-400 text-sm">
              Mini CRM
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <div className="flex-1 px-5 py-8 space-y-3">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <Icon size={22} />

              {item.name}
            </NavLink>
          );
        })}
      </div>

      {/* Bottom */}

      <div className="p-6 border-t border-slate-800">

        <div className="bg-slate-800 rounded-2xl p-4 mb-4">

          <h3 className="font-bold text-lg">
            Admin
          </h3>

          <p className="text-slate-400 text-sm">
            CRM Administrator
          </p>

        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition rounded-2xl py-4 font-semibold"
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </div>
  );
};

export default Sidebar;