import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

const AddCustomer = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/customers", data);

      if (res.data.success) {
        toast.success("Customer Added Successfully");
        reset();
        navigate("/dashboard/customers");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto">

      <div className="bg-base-100 shadow-xl rounded-3xl p-10">

        <h2 className="text-3xl font-bold mb-2">
          Add New Customer
        </h2>

        <p className="text-base-content/60 mb-8">
          Create a new customer for your CRM.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 gap-6"
        >

          {/* Name */}

          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Full Name
              </span>
            </label>

            <input
              {...register("name", {
                required: "Name is required",
              })}
              className="input input-bordered w-full"
              placeholder="John Doe"
            />

            <p className="text-error text-sm mt-1">
              {errors.name?.message}
            </p>
          </div>

          {/* Email */}

          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Email
              </span>
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full"
              placeholder="john@gmail.com"
            />

            <p className="text-error text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          {/* Phone */}

          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Phone
              </span>
            </label>

            <input
              {...register("phone", {
                required: "Phone is required",
              })}
              className="input input-bordered w-full"
              placeholder="017XXXXXXXX"
            />

            <p className="text-error text-sm mt-1">
              {errors.phone?.message}
            </p>
          </div>

          {/* Company */}

          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Company
              </span>
            </label>

            <input
              {...register("company")}
              className="input input-bordered w-full"
              placeholder="ABC Ltd"
            />
          </div>

          {/* Address */}

          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold">
                Address
              </span>
            </label>

            <textarea
              {...register("address")}
              className="textarea textarea-bordered w-full"
              rows="3"
              placeholder="Dhaka, Bangladesh"
            />
          </div>

          {/* Status */}

          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Status
              </span>
            </label>

            <select
              {...register("status")}
              className="select select-bordered w-full"
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Notes */}

          <div>
            <label className="label">
              <span className="label-text font-semibold">
                Notes
              </span>
            </label>

            <input
              {...register("notes")}
              className="input input-bordered w-full"
              placeholder="Potential client..."
            />
          </div>

          <div className="md:col-span-2 flex justify-end mt-4">

            <button
              className="btn btn-success px-10"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Customer"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddCustomer;