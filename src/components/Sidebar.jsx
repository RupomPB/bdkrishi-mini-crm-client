import {
  LayoutDashboard,
  Users,
  UserPlus,
  ClipboardList,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white shadow-2xl">

      <div className="p-8 border-b border-slate-700">

        <h1 className="text-3xl font-extrabold text-green-400">
          BDKrishi
        </h1>

        <p className="text-sm text-slate-400 mt-1">
          Mini CRM
        </p>

      </div>

      <nav className="p-5 space-y-3">

        <NavLink
          to="/dashboard"
          end
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-500 duration-300"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/customers"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-500 duration-300"
        >
          <Users size={20} />
          Customers
        </NavLink>

        <NavLink
          to="/dashboard/customers/add"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-500 duration-300"
        >
          <UserPlus size={20} />
          Add Customer
        </NavLink>

        <button
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 duration-300"
        >
          <ClipboardList size={20} />
          Leads
        </button>

        <button
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700 duration-300"
        >
          <Settings size={20} />
          Settings
        </button>

      </nav>

      <div className="absolute bottom-8 left-5">

        <button
          className="flex items-center gap-3 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl duration-300"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>
    </aside>
  );
};

export default Sidebar;