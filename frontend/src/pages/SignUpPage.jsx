import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
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
        {/* ================= SIGNUP FORM ================= */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center mx-auto">
          
          {/* LOGO */}
          <div className="mb-6 flex items-center gap-3">
            <ShipWheelIcon className="size-9 text-emerald-400" />
            <span className="text-3xl font-bold font-mono tracking-wide text-emerald-400">
              Streamify
            </span>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
              {error?.response?.data?.message ||
                "Signup failed. Please try again."}
            </div>
          )}

          {/* FORM */}
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <h2 className="text-2xl font-semibold text-slate-100">
                Create an Account
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Join Streamify and start your language journey
              </p>
            </div>

            {/* FULL NAME */}
            <div className="space-y-2">
              <label className="text-sm text-slate-300">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg bg-[#020617]
                           border border-slate-700
                           px-4 py-3 text-slate-200
                           placeholder:text-slate-500
                           focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20
                           outline-none transition"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg bg-[#020617]
                           border border-slate-700
                           px-4 py-3 text-slate-200
                           placeholder:text-slate-500
                           focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20
                           outline-none transition"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
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
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <p className="text-xs text-slate-500">
                Password must be at least 6 characters long
              </p>
            </div>

            {/* TERMS */}
            <label className="flex items-start gap-2 text-xs text-slate-400">
              <input
                type="checkbox"
                required
                className="mt-1 accent-emerald-400"
              />
              <span>
                I agree to the{" "}
                <span className="text-emerald-400 hover:underline cursor-pointer">
                  terms of service
                </span>{" "}
                and{" "}
                <span className="text-emerald-400 hover:underline cursor-pointer">
                  privacy policy
                </span>
              </span>
            </label>

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
              {isPending ? "Creating account..." : "Create Account"}
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-slate-400 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-emerald-400 hover:underline">
                Sign in
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
              Learn together 🌍
            </h2>
            <p className="text-slate-400 mt-2">
              Practice conversations and grow with people worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
