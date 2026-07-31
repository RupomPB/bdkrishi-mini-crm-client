import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Leaf,
  ArrowRight,
  ShieldCheck,
  Users,
} from "lucide-react";import toast from "react-hot-toast";
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
   <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex">

  {/* Left Side */}

  <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white p-16 flex-col justify-between">

    <div>

      <div className="flex items-center gap-3">

        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">

          <Leaf size={28} />

        </div>

        <div>

          <h1 className="text-3xl font-black">
            BDKrishi CRM
          </h1>

          <p className="text-green-100">
            Agriculture Management Platform
          </p>

        </div>

      </div>

      <h2 className="text-5xl font-black leading-tight mt-16">
        Create your CRM Account
      </h2>

      <p className="text-green-100 text-lg mt-8 leading-8">
        Manage customers, leads and sales with one
        modern agriculture CRM platform.
      </p>

    </div>

    <div className="space-y-6">

      <div className="flex items-center gap-4">

        <ShieldCheck />

        <span>Secure Authentication</span>

      </div>

      <div className="flex items-center gap-4">

        <Users />

        <span>Unlimited Customer Management</span>

      </div>

    </div>

  </div>

  {/* Right Side */}

  <div className="flex-1 flex justify-center items-center p-10">

    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-10">

      <div className="text-center mb-8">

        <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 mx-auto flex items-center justify-center text-white shadow-lg">

          <Leaf size={34} />

        </div>

        <h2 className="text-4xl font-black text-slate-800 mt-6">
          Create Account
        </h2>

        <p className="text-slate-500 mt-3">
          Register to access BDKrishi CRM
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
              {/* Full Name */}

        <div>

          <label className="label">
            <span className="label-text font-semibold text-slate-700">
              Full Name
            </span>
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="input input-bordered w-full h-14 rounded-xl bg-slate-50 border-slate-300 focus:border-green-500 text-slate-800"
            {...register("name", {
              required: "Name is required",
            })}
          />

          <p className="text-error text-sm mt-2">
            {errors.name?.message}
          </p>

        </div>

        {/* Email */}

        <div>

          <label className="label">
            <span className="label-text font-semibold text-slate-700">
              Email Address
            </span>
          </label>

          <input
            type="email"
            placeholder="john@gmail.com"
            className="input input-bordered w-full h-14 rounded-xl bg-slate-50 border-slate-300 focus:border-green-500 text-slate-800"
            {...register("email", {
              required: "Email is required",
            })}
          />

          <p className="text-error text-sm mt-2">
            {errors.email?.message}
          </p>

        </div>

        {/* Password */}

        <div>

          <label className="label">
            <span className="label-text font-semibold text-slate-700">
              Password
            </span>
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="input input-bordered w-full h-14 rounded-xl bg-slate-50 border-slate-300 pr-14 focus:border-green-500 text-slate-800"
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
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-slate-500"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          <p className="text-error text-sm mt-2">
            {errors.password?.message}
          </p>

        </div>

        {/* Role */}

        <div>

          <label className="label">
            <span className="label-text font-semibold text-slate-700">
              Role
            </span>
          </label>

          <select
            className="select select-bordered w-full h-14 rounded-xl bg-slate-50 border-slate-300 text-slate-800"
            {...register("role")}
          >
            <option value="sales">Sales</option>
            <option value="admin">Admin</option>
          </select>

        </div>

        <button
          disabled={isSubmitting}
          className="btn w-full h-14 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 border-0 text-white hover:scale-[1.02] transition-all"
        >
          {isSubmitting ? (
            "Creating Account..."
          ) : (
            <>
              Create Account
              <ArrowRight size={18} />
            </>
          )}
        </button>

        <p className="text-center text-slate-600">

          Already have an account?

          <Link
            to="/"
            className="text-green-600 font-bold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>
              </form>


    </div>

  </div>

</div>

  );
};

export default Register;