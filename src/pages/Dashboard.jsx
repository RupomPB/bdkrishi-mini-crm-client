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
      color: "bg-blue-500",
    },
    {
      title: "Leads",
      value: data.totalLeads,
      icon: UserCheck,
      color: "bg-purple-500",
    },
    {
      title: "Won",
      value: data.wonLeads,
      icon: Trophy,
      color: "bg-green-500",
    },
    {
      title: "Lost",
      value: data.lostLeads,
      icon: XCircle,
      color: "bg-red-500",
    },
  ];

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card) => {

          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl shadow-lg bg-base-100 p-6"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-gray-500">
                    {card.title}
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    {card.value}
                  </h2>

                </div>

                <div
                  className={`${card.color} p-4 rounded-xl text-white`}
                >
                  <Icon size={28} />
                </div>

              </div>

            </div>
          );
        })}

      </div>
        <DashboardChart stats={data} />

    </div>
  );
};

export default Dashboard;