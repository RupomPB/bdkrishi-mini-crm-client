import { Bell, Search, Moon, UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md px-8 py-5 flex justify-between items-center rounded-b-3xl">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 input input-bordered rounded-xl"
          />

        </div>

        <button className="btn btn-circle btn-ghost">
          <Bell />
        </button>

        <button className="btn btn-circle btn-ghost">
          <Moon />
        </button>

        <button className="btn btn-circle btn-success text-white">
          <UserCircle />
        </button>

      </div>
    </header>
  );
};

export default Navbar;