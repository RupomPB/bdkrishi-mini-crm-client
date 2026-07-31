import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/auth/login", data);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        toast.success("Welcome back!");

        navigate("/dashboard");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex">

  {/* Left */}

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
        Manage your Customers & Leads
        in one beautiful dashboard.
      </h2>

      <p className="text-green-100 text-lg mt-8 leading-8">

        A modern CRM system for agriculture businesses with
        customer management, lead tracking and analytics.

      </p>

    </div>

    <div className="space-y-6">

      <div className="flex items-center gap-4">

        <ShieldCheck />

        <span>Secure Authentication</span>

      </div>

      <div className="flex items-center gap-4">

        <Users />

        <span>Unlimited Customers</span>

      </div>

    </div>

  </div>

  {/* Right */}

  <div className="flex-1 flex justify-center items-center p-10">

    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-10">

      <div className="text-center mb-8">

        <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 mx-auto flex justify-center items-center text-white shadow-lg">

          <Leaf size={34} />

        </div>

        <h2 className="text-4xl font-black text-slate-800 mt-6">
          Welcome Back
        </h2>

        <p className="text-slate-500 mt-3">
          Login to your account
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
              {/* Email */}

        <div>

          <label className="label">

            <span className="label-text font-semibold text-slate-700">
              Email Address
            </span>

          </label>

          <input
            type="email"
            placeholder="admin@example.com"
            className="input input-bordered w-full h-14 rounded-xl bg-slate-50 border-slate-300 focus:border-green-500 focus:outline-none text-slate-800"
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
              })}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
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

        <div className="flex justify-between items-center">

          <label className="flex items-center gap-2 cursor-pointer">

            <input
              type="checkbox"
              className="checkbox checkbox-success checkbox-sm"
            />

            <span className="text-sm text-slate-600">
              Remember Me
            </span>

          </label>

          <button
            type="button"
            className="text-green-600 text-sm font-semibold hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        <button
          disabled={isSubmitting}
          className="btn w-full h-14 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 border-0 text-white hover:scale-[1.02] transition-all"
        >
          {isSubmitting ? (
            "Signing In..."
          ) : (
            <>
              Login
              <ArrowRight size={18} />
            </>
          )}
        </button>

        <p className="text-center text-slate-600">

          Don't have an account?

          <a
            href="/register"
            className="text-green-600 font-bold ml-2 hover:underline"
          >
            Register
          </a>

        </p>
              </form>

    </div>

  </div>

</div>

  );
};

export default Login;