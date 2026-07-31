import { LogOut, UserCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");

    navigate("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-8">

      <div className="flex-1">
        <h2 className="text-2xl font-bold">
          🌱 BDKrishi CRM
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2">

          <UserCircle2 size={36} />

          <div>
            <h3 className="font-semibold">
              {user?.name}
            </h3>

            <p className="text-xs opacity-70">
              {user?.role}
            </p>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="btn btn-error btn-sm"
        >
          <LogOut size={16} />
          Logout
        </button>

      </div>

    </div>
  );
};

export default Navbar;