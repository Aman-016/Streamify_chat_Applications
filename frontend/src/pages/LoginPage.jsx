import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 
                 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]"
      data-theme="forest"
    >
      <div
        className="w-full max-w-md sm:max-w-lg lg:max-w-5xl mx-auto
                   bg-[#020617]/90 backdrop-blur-xl
                   border border-emerald-500/20
                   rounded-2xl shadow-2xl overflow-hidden
                   flex flex-col lg:flex-row transition-all duration-300"
      >
        {/* ================= LOGIN FORM ================= */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center mx-auto">
          
          {/* LOGO */}
          <div className="mb-6 flex items-center gap-3">
            <ShipWheelIcon className="size-9 text-emerald-400" />
            <span className="text-3xl font-bold font-mono tracking-wide text-emerald-400">
              Streamify
            </span>
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
              {error?.response?.data?.message ||
                "Login failed. Please try again."}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold text-slate-100">
                Welcome Back
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Sign in to continue your language journey
              </p>
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full rounded-lg bg-[#020617]
                           border border-slate-700
                           px-4 py-3 text-slate-200
                           placeholder:text-slate-500
                           focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20
                           outline-none transition"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <label className="text-sm text-slate-300">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg bg-[#020617]
                           border border-slate-700
                           px-4 py-3 text-slate-200
                           placeholder:text-slate-500
                           focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20
                           outline-none transition"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-lg bg-emerald-500
                         hover:bg-emerald-400
                         text-slate-900 font-semibold
                         py-3 transition
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? "Signing in..." : "Sign In"}
            </button>

            {/* SIGNUP */}
            <p className="text-center text-sm text-slate-400 mt-4">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-emerald-400 hover:underline">
                Create one
              </Link>
            </p>
          </form>
        </div>

        {/* ================= IMAGE SECTION ================= */}
        <div className="hidden lg:flex w-1/2 items-center justify-center
                        bg-gradient-to-br from-emerald-500/10 to-transparent">
          <div className="max-w-md p-10 text-center">
            <img
              src="/i.png"
              alt="Language connection illustration"
              className="rounded-xl shadow-lg"
            />
            <h2 className="text-xl font-semibold text-slate-100 mt-6">
              Connect globally 🌍
            </h2>
            <p className="text-slate-400 mt-2">
              Practice conversations, make friends, and grow together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
