import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  ClipboardList,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Customers",
    value: "124",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Leads",
    value: "58",
    icon: UserPlus,
    color: "bg-blue-500",
  },
  {
    title: "Tasks",
    value: "19",
    icon: ClipboardList,
    color: "bg-orange-500",
  },
  {
    title: "Growth",
    value: "92%",
    icon: TrendingUp,
    color: "bg-purple-500",
  },
];

const recentCustomers = [
  {
    name: "John Doe",
    company: "ABC Ltd",
    status: "Active",
  },
  {
    name: "Sarah Khan",
    company: "TechNova",
    status: "Active",
  },
  {
    name: "David Smith",
    company: "Soft IT",
    status: "Inactive",
  },
  {
    name: "Alex Roy",
    company: "BDKrishi",
    status: "Active",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* Hero */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 p-10 text-white shadow-xl"
      >
        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-3 text-green-100 text-lg">
          Manage your customers, leads and CRM activities from one dashboard.
        </p>

        <button className="btn mt-8 bg-white text-green-600 border-none rounded-xl hover:bg-green-50">
          Explore Dashboard
          <ArrowUpRight size={18} />
        </button>
      </motion.div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card, index) => {

          const Icon = card.icon;

          return (
            <motion.div
              whileHover={{ scale: 1.04 }}
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6"
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
                  className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}
                >
                  <Icon size={30} />
                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Recent Customers */}

      <div className="bg-white rounded-3xl shadow-lg p-8">

        <div className="flex justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Recent Customers
          </h2>

          <button className="btn btn-success rounded-xl">
            View All
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="table">

            <thead>

              <tr>

                <th>Name</th>

                <th>Company</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {recentCustomers.map((customer, index) => (

                <tr key={index}>

                  <td className="font-semibold">
                    {customer.name}
                  </td>

                  <td>
                    {customer.company}
                  </td>

                  <td>

                    <span
                      className={`badge ${
                        customer.status === "Active"
                          ? "badge-success"
                          : "badge-error"
                      }`}
                    >
                      {customer.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;