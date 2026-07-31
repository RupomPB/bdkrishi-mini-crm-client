import { useQuery } from "@tanstack/react-query";
import { Users, UserCheck, Trophy, XCircle } from "lucide-react";

import DashboardChart from "../components/DashboardChart";

import { getDashboardStats } from "../services/dashboardApi";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardStats,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const cards = [
  {
    title: "Customers",
    value: data.totalCustomers,
    icon: Users,
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    title: "Leads",
    value: data.totalLeads,
    icon: UserCheck,
    color: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
  },
  {
    title: "Won",
    value: data.wonLeads,
    icon: Trophy,
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
  {
    title: "Lost",
    value: data.lostLeads,
    icon: XCircle,
    color: "bg-gradient-to-r from-red-500 to-orange-500",
  },
];

  return (
    <div>
      <div className="mb-10">
        <span className="text-blue-600 font-semibold uppercase tracking-widest">
          Dashboard
        </span>

        <h1 className="text-5xl font-extrabold text-slate-800 mt-2">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-3 text-lg">
          Monitor your customers, leads and CRM performance in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="group bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-slate-500 font-medium">{card.title}</p>

                  <h2 className="text-5xl font-black text-slate-800 mt-3">
                    {card.value}
                  </h2>
                </div>

                <div
                  className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        {/* Recent Customers */}

        <div className="bg-base-100 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold mb-5">Recent Customers</h2>

          <div className="space-y-4">
            {data.recentCustomers.map((customer) => (
              <div
                key={customer._id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <h3 className="font-semibold">{customer.name}</h3>

                  <p className="text-sm text-gray-500">{customer.email}</p>
                </div>

                <span className="badge badge-success">{customer.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Leads */}

        <div className="bg-base-100 rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold mb-5">Recent Leads</h2>

          <div className="space-y-4">
            {data.recentLeads.map((lead) => (
              <div
                key={lead._id}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <h3 className="font-semibold">{lead.title}</h3>

                  <p className="text-sm text-gray-500">{lead.customer?.name}</p>
                </div>

                <span className="badge badge-info">{lead.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DashboardChart stats={data} />
    </div>
  );
};

export default Dashboard;
