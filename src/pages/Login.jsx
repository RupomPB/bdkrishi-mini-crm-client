import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Leaf } from "lucide-react";
import toast from "react-hot-toast";
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
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-base-100 shadow-2xl rounded-3xl p-8">

        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-success text-white flex items-center justify-center mx-auto mb-4">
            <Leaf size={30} />
          </div>

          <h1 className="text-3xl font-bold">
            BDKrishi Mini CRM
          </h1>

          <p className="text-base-content/60 mt-2">
            Sign in to continue
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <div>
            <label className="label">
              <span className="label-text font-medium">
                Email
              </span>
            </label>

            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="admin@example.com"
              {...register("email", {
                required: "Email is required",
              })}
            />

            <p className="text-error text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">
                Password
              </span>
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pr-12"
                placeholder="********"
                {...register("password", {
                  required: "Password is required",
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            <p className="text-error text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>

          <button
            className="btn btn-success w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;