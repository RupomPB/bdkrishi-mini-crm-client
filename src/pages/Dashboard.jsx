import { useQuery } from "@tanstack/react-query";
import {
  Users,
  UserCheck,
  Trophy,
  XCircle,
} from "lucide-react";

import DashboardChart from "../components/DashboardChart";
import { getDashboardStats } from "../services/dashboardApi";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardStats,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }

  const cards = [
    {
      title: "Customers",
      value: data?.totalCustomers || 0,
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Leads",
      value: data?.totalLeads || 0,
      icon: UserCheck,
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Won",
      value: data?.wonLeads || 0,
      icon: Trophy,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Lost",
      value: data?.lostLeads || 0,
      icon: XCircle,
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Dashboard
        </p>

        <h1 className="text-5xl font-black text-slate-800 mt-2">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-3 text-lg">
          Monitor customers, leads and sales performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.title}
              className="rounded-3xl bg-white border border-slate-200 shadow-lg p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-slate-500 font-medium">
                    {card.title}
                  </p>

                  <h2 className="text-5xl font-black mt-4 text-slate-800">
                    {card.value}
                  </h2>

                  <p className="text-green-600 text-sm mt-3">
                    +12% this month
                  </p>

                </div>

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center text-white`}
                >
                  <Icon size={30} />
                </div>

              </div>

            </div>

          );

        })}

      </div>

      <div className="grid xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2 bg-white rounded-3xl shadow-lg border border-slate-200 p-6">

          <div className="mb-6">

            <h2 className="text-2xl font-bold text-slate-800">
              CRM Analytics
            </h2>

            <p className="text-slate-500">
              Customer & Lead Overview
            </p>

          </div>

          <DashboardChart stats={data} />

        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Recent Customers
          </h2>

          <div className="space-y-5">

            {data?.recentCustomers?.slice(0, 5).map((customer) => (              <div
                key={customer._id}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                  {customer.name?.charAt(0).toUpperCase()}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800">
                    {customer.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {customer.email}
                  </p>
                </div>

                <span className="badge badge-success badge-outline">
                  {customer.status}
                </span>
              </div>

            ))}

          </div>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Recent Customers */}

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Recent Customers
          </h2>

          <div className="space-y-4">

            {data?.recentCustomers?.map((customer) => (

              <div
                key={customer._id}
                className="flex justify-between items-center border-b border-slate-100 pb-4"
              >

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {customer.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {customer.company || customer.email}
                  </p>

                </div>

                <span className="badge badge-success">
                  {customer.status}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Recent Leads */}

        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">

          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Recent Leads
          </h2>

          <div className="space-y-4">

            {data?.recentLeads?.map((lead) => (              <div
                key={lead._id}
                className="flex justify-between items-center border-b border-slate-100 pb-4"
              >

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {lead.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {lead.customer?.name || "No Customer"}
                  </p>

                </div>

                <span
                  className={`badge ${
                    lead.priority === "High"
                      ? "badge-error"
                      : lead.priority === "Medium"
                      ? "badge-warning"
                      : "badge-success"
                  }`}
                >
                  {lead.priority}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;