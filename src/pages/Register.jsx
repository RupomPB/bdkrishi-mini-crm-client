import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Leaf } from "lucide-react";
import toast from "react-hot-toast";
import api from "../services/api";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/register", data);

      if (res.data.success) {
        toast.success("Registration Successful");
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-base-100 rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <div className="w-16 h-16 bg-success rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
            <Leaf size={30} />
          </div>

          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="opacity-70 mt-2">
            Register to access BDKrishi CRM
          </p>

        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <div>

            <label className="label">
              <span className="label-text">Full Name</span>
            </label>

            <input
              className="input input-bordered w-full"
              placeholder="John Doe"
              {...register("name", {
                required: "Name is required",
              })}
            />

            <p className="text-error text-sm">
              {errors.name?.message}
            </p>

          </div>

          <div>

            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="john@gmail.com"
              {...register("email", {
                required: "Email is required",
              })}
            />

            <p className="text-error text-sm">
              {errors.email?.message}
            </p>

          </div>

          <div>

            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pr-12"
                placeholder="********"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />

              <button
                type="button"
                className="absolute right-4 top-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            <p className="text-error text-sm">
              {errors.password?.message}
            </p>

          </div>

          <div>

            <label className="label">
              <span className="label-text">Role</span>
            </label>

            <select
              className="select select-bordered w-full"
              {...register("role")}
            >
              <option value="sales">Sales</option>
              <option value="admin">Admin</option>
            </select>

          </div>

          <button
            className="btn btn-success w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>

        </form>

        <div className="divider">OR</div>

        <p className="text-center">

          Already have an account?

          <Link
            to="/"
            className="text-success font-semibold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default Register;