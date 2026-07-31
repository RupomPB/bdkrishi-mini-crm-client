import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import api from "../services/api";

const EditCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Load customer
  const { data, isLoading } = useQuery({
    queryKey: ["customer", id],
    queryFn: async () => {
      const res = await api.get(`/customers/${id}`);
      return res.data.customer;
    },
  });

  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        address: data.address,
        status: data.status,
        notes: data.notes,
      });
    }
  }, [data, reset]);

  const onSubmit = async (formData) => {
    try {
      const res = await api.put(`/customers/${id}`, formData);

      if (res.data.success) {
        toast.success("Customer Updated Successfully");

        queryClient.invalidateQueries({
          queryKey: ["customers"],
        });

        navigate("/dashboard/customers");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Update Failed"
      );
    }
  };

  if (isLoading) {
    return (
      <div className="text-center mt-20 text-lg">
        Loading Customer...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">

      <div className="bg-base-100 rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold">
          Edit Customer
        </h2>

        <p className="opacity-70 mb-8">
          Update customer information.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-6"
        >

          <div>
            <label className="label">
              <span className="label-text">
                Name
              </span>
            </label>

            <input
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
            />

            <p className="text-error text-sm mt-1">
              {errors.name?.message}
            </p>
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Email
              </span>
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full"
            />

            <p className="text-error text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Phone
              </span>
            </label>

            <input
              {...register("phone", {
                required: "Phone is required",
              })}
              className="input input-bordered w-full"
            />

            <p className="text-error text-sm mt-1">
              {errors.phone?.message}
            </p>
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Company
              </span>
            </label>

            <input
              {...register("company")}
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text">
                Address
              </span>
            </label>

            <textarea
              {...register("address")}
              rows="3"
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Status
              </span>
            </label>

            <select
              {...register("status")}
              className="select select-bordered w-full"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Notes
              </span>
            </label>

            <input
              {...register("notes")}
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 mt-4">

            <button
              type="button"
              className="btn btn-outline"
              onClick={() => navigate("/dashboard/customers")}
            >
              Cancel
            </button>

            <button
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Customer"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditCustomer;