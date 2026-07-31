import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import {
  getLeads,
  deleteLead,
} from "../services/leadApi";
const Leads = () => {


  const { data, isLoading } = useQuery({
    
    queryKey: ["leads"],
    queryFn: getLeads,
  });

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
  mutationFn: deleteLead,

  onSuccess: () => {
    toast.success("Lead Deleted");

    queryClient.invalidateQueries({
      queryKey: ["leads"],
    });
  },

  onError: () => {
    toast.error("Delete Failed");
  },
});

const handleDelete = (id) => {
  const ok = window.confirm(
    "Delete this lead?"
  );

  if (!ok) return;

  deleteMutation.mutate(id);
};

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

  {data?.leads?.length > 0 ? (

    data.leads.map((lead) => (

      <tr key={lead._id}>

        <td>{lead.title}</td>

        <td>{lead.customer?.name}</td>

        <td>

          <span className="badge badge-info">
            {lead.status}
          </span>

        </td>

        <td>

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

        </td>

        <td className="space-x-2">

          <Link
            to={`/dashboard/leads/edit/${lead._id}`}
            className="btn btn-info btn-sm"
          >
            <Pencil size={15} />
          </Link>

          <button
            onClick={() =>
              handleDelete(lead._id)
            }
            className="btn btn-error btn-sm"
          >
            <Trash2 size={15} />
          </button>

        </td>

      </tr>

    ))

  ) : (

    <tr>

      <td
        colSpan={5}
        className="text-center py-10"
      >
        No Leads Found
      </td>

    </tr>

  )}

</tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;