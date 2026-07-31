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
    <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
  CRM Analytics
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