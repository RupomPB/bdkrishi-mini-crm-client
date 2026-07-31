import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { getCustomers } from "../services/customerApi";

import { deleteCustomer } from "../services/customerApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Customers = () => {

     const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  console.log(data);

  const deleteMutation = useMutation({
    mutationFn: deleteCustomer,

    onSuccess: () => {
      toast.success("Customer Deleted Successfully");

      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },

    onError: () => {
      toast.error("Delete Failed");
    },
  });

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  

  

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?",
    );

    if (!confirmDelete) return;

    deleteMutation.mutate(id);
  };

  return (
    <div className="space-y-6 ">
      <div className="flex justify-between items-center ">
        <h1 className="text-3xl font-bold">Customers</h1>

        <Link to="/dashboard/customers/add" className="btn btn-success">
          <Plus size={18} />
          Add Customer
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto text-black">
        <table className="table text-black">
          <thead>
            <tr className="text-black">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data?.customers?.length > 0 ? (
              data.customers.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>

                  <td>
                    <span className="badge badge-success">
                      {customer.status}
                    </span>
                  </td>

                  <td className="space-x-2">
                    <Link
                      to={`/dashboard/customers/edit/${customer._id}`}
                      className="btn btn-info btn-sm"
                    >
                      <Pencil size={15} />
                    </Link>

                    <button
                      onClick={() => handleDelete(customer._id)}
                      className="btn btn-error btn-sm"
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-10">
                  No Customers Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
