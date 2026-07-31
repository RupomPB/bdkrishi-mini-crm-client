import { useQuery } from "@tanstack/react-query";
import {
  Users,
  UserCheck,
  UserX,
  Activity,
} from "lucide-react";
import { getCustomers } from "../services/customerApi";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }

  const customers = data?.customers || [];

  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (item) => item.status === "Active"
  ).length;

  const inactiveCustomers = customers.filter(
    (item) => item.status === "Inactive"
  ).length;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 p-8 text-white shadow-xl">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-2 opacity-90">
          Manage your customers and leads efficiently.
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="card bg-white shadow-xl">
          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Total Customers
                </p>

                <h2 className="text-4xl font-bold text-black">
                  {totalCustomers}
                </h2>

              </div>

              <Users
                className="text-green-600"
                size={45}
              />

            </div>

          </div>
        </div>

        <div className="card bg-white shadow-xl">
          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Active
                </p>

                <h2 className="text-4xl font-bold text-green-600">
                  {activeCustomers}
                </h2>

              </div>

              <UserCheck
                className="text-green-600"
                size={45}
              />

            </div>

          </div>
        </div>

        <div className="card bg-white shadow-xl">
          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Inactive
                </p>

                <h2 className="text-4xl font-bold text-red-500">
                  {inactiveCustomers}
                </h2>

              </div>

              <UserX
                className="text-red-500"
                size={45}
              />

            </div>

          </div>
        </div>

        <div className="card bg-white shadow-xl">
          <div className="card-body">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  CRM Status
                </p>

                <h2 className="text-2xl font-bold text-blue-600">
                  Running
                </h2>

              </div>

              <Activity
                className="text-blue-600"
                size={45}
              />

            </div>

          </div>
        </div>

      </div>

      {/* Recent Customers */}

      <div className="bg-white rounded-3xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-5 text-black">
          Recent Customers
        </h2>

        <div className="overflow-x-auto">

          <table className="table">

            <thead>

              <tr className="text-black">

                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {customers.slice(0, 5).map((customer) => (

                <tr className="text-black" key={customer._id}>

                  <td>{customer.name}</td>

                  <td>{customer.email}</td>

                  <td>{customer.phone}</td>

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