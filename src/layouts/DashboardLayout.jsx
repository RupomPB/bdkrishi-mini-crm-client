import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-72 fixed left-0 top-0 h-screen">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1 ml-72">

          <Navbar />

          <main className="p-8">

            {/* Welcome Banner */}

            <div className="mb-8 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 shadow-xl">

              <h1 className="text-4xl font-bold text-white">
                Welcome Back 👋
              </h1>

              <p className="text-blue-100 mt-2 text-lg">
                Manage customers, leads and monitor your CRM performance from one place.
              </p>

            </div>

            <Outlet />

          </main>

        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;