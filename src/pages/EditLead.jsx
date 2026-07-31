import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { getCustomers } from "../services/customerApi";
import { getLead, updateLead } from "../services/leadApi";

const EditLead = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: customerData } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  const { data: leadData, isLoading } = useQuery({
    queryKey: ["lead", id],
    queryFn: () => getLead(id),
  });

  const mutation = useMutation({
    mutationFn: updateLead,

    onSuccess: () => {
      toast.success("Lead Updated Successfully");
      navigate("/dashboard/leads");
    },

    onError: () => {
      toast.error("Update Failed");
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const lead = leadData?.lead;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    mutation.mutate({
      id,

      leadData: {
        title: form.title.value,
        customer: form.customer.value,
        status: form.status.value,
        priority: form.priority.value,
        notes: form.notes.value,
      },
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-base-100 rounded-2xl shadow-xl p-8">

      <h1 className="text-3xl font-bold mb-8">
        Edit Lead
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          name="title"
          defaultValue={lead.title}
          className="input input-bordered w-full"
          required
        />

        <select
          name="customer"
          defaultValue={lead.customer?._id}
          className="select select-bordered w-full"
        >
          {customerData?.customers?.map((customer) => (
            <option
              key={customer._id}
              value={customer._id}
            >
              {customer.name}
            </option>
          ))}
        </select>

        <select
          name="status"
          defaultValue={lead.status}
          className="select select-bordered w-full"
        >
          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
          <option>Proposal</option>
          <option>Won</option>
          <option>Lost</option>
        </select>

        <select
          name="priority"
          defaultValue={lead.priority}
          className="select select-bordered w-full"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <textarea
          name="notes"
          defaultValue={lead.notes}
          className="textarea textarea-bordered w-full"
        />

        <button className="btn btn-warning w-full">
          Update Lead
        </button>

      </form>

    </div>
  );
};

export default EditLead;