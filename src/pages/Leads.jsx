import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { getLeads } from "../services/leadApi";

const Leads = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["leads"],
    queryFn: getLeads,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Leads</h1>

        <Link
          to="/dashboard/leads/add"
          className="btn btn-success"
        >
          <Plus size={18} />
          Add Lead
        </Link>
      </div>

      <div className="bg-base-100 rounded-xl shadow overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>

          <tbody>
            {data?.leads?.map((lead) => (
              <tr key={lead._id}>
                <td>{lead.title}</td>

                <td>{lead.customer?.name}</td>

                <td>{lead.status}</td>

                <td>{lead.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;