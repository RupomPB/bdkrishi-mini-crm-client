import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const DashboardChart = ({ stats }) => {
  const data = [
    {
      name: "Customers",
      value: stats.totalCustomers,
    },
    {
      name: "Leads",
      value: stats.totalLeads,
    },
    {
      name: "Won",
      value: stats.wonLeads,
    },
    {
      name: "Lost",
      value: stats.lostLeads,
    },
  ];

  return (
    <div className="bg-base-100 rounded-2xl shadow-xl p-6 mt-8">

      <h2 className="text-xl font-bold mb-6">
        CRM Overview
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default DashboardChart;