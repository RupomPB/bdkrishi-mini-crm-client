import { useQuery, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { createLead } from "../services/leadApi";
import { getCustomers } from "../services/customerApi";

const AddLead = () => {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  const mutation = useMutation({
    mutationFn: createLead,

    onSuccess: () => {
      toast.success("Lead Created Successfully");
      navigate("/dashboard/leads");
    },

    onError: () => {
      toast.error("Failed to Create Lead");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    mutation.mutate({
      title: form.title.value,
      customer: form.customer.value,
      status: form.status.value,
      priority: form.priority.value,
      notes: form.notes.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-2xl p-8">

      <h1 className="text-3xl font-bold mb-8">
        Add Lead
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          name="title"
          placeholder="Lead Title"
          className="input input-bordered w-full"
          required
        />

        <select
          name="customer"
          className="select select-bordered w-full"
          required
        >
          <option value="">
            Select Customer
          </option>

          {data?.customers?.map((customer) => (
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
          className="select select-bordered w-full"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <textarea
          name="notes"
          className="textarea textarea-bordered w-full"
          placeholder="Notes..."
        ></textarea>

        <button className="btn btn-success w-full">
          Create Lead
        </button>

      </form>

    </div>
  );
};

export default AddLead;