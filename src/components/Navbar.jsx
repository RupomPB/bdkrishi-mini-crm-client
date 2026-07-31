import {
  Bell,
  Search,
  UserCircle2,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged Out Successfully");

    navigate("/");
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">

      <div className="flex items-center justify-between px-8 py-5">

        {/* Left */}

        <div>

          <h2 className="text-3xl font-extrabold text-slate-800">
            Dashboard
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            {today}
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="relative hidden md:block">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-72 pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

          </div>

          {/* Notification */}

          <button className="relative w-12 h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center">

            <Bell
              size={20}
              className="text-slate-700"
            />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

          </button>

          {/* User */}

          <div className="flex items-center gap-3 bg-slate-100 rounded-2xl px-4 py-2">

            <UserCircle2
              size={42}
              className="text-blue-600"
            />

            <div>

              <h3 className="font-bold text-slate-800">
                {user?.name || "Admin"}
              </h3>

              <p className="text-sm text-slate-500 capitalize">
                {user?.role || "Administrator"}
              </p>

            </div>

          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl transition shadow-md"
          >
            <LogOut size={18} />

            Logout

          </button>

        </div>

      </div>

    </header>
  );
};

export default Navbar;