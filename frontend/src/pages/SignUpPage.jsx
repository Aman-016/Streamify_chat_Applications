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

  // This is how we did it at first, without using our custom hook
  // const queryClient = useQueryClient();
  // const {
  //   mutate: signupMutation,
  //   isPending,
  //   error,
  // } = useMutation({
  //   mutationFn: signup,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  // This is how we did it using our custom hook - optimized version
  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="border border-white/10 flex flex-col lg:flex-row bg-white/5 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
          {/* SIGNUP FORM - LEFT SIDE */}
          <div className="w-full lg:w-1/2 p-8 sm:p-10 md:p-12 flex flex-col bg-gradient-to-br from-white/10 to-white/5">
            {/* LOGO */}
            <div className="mb-8 flex items-center justify-start gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <ShipWheelIcon className="size-7 text-white" />
              </div>
              <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 tracking-wider">
                Streamify
              </span>
            </div>

            {/* ERROR MESSAGE IF ANY */}
            {error && (
              <div className="alert alert-error mb-6 bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                <span className="text-red-200">{error.response.data.message}</span>
              </div>
            )}

            <div className="w-full flex-1">
              <form onSubmit={handleSignup}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Create an Account</h2>
                    <p className="text-gray-300">
                      Join Streamify and start your language learning adventure!
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* FULLNAME */}
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-gray-300 font-medium">Full Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all"
                        value={signupData.fullName}
                        onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                        required
                      />
                    </div>
                    {/* EMAIL */}
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-gray-300 font-medium">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@gmail.com"
                        className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                        required
                      />
                    </div>
                    {/* PASSWORD */}
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-gray-300 font-medium">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        required
                      />
                      <p className="text-xs text-gray-400 mt-2">
                        Password must be at least 6 characters long
                      </p>
                    </div>

                    <div className="form-control">
                      <label className="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" className="checkbox checkbox-sm border-white/30" required />
                        <span className="text-xs leading-tight text-gray-300">
                          I agree to the{" "}
                          <span className="text-blue-400 hover:text-blue-300 font-semibold">terms of service</span> and{" "}
                          <span className="text-blue-400 hover:text-blue-300 font-semibold">privacy policy</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <button 
                    className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white w-full font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/50" 
                    type="submit"
                  >
                    {isPending ? (
                      <>
                        <span className="loading loading-spinner loading-xs"></span>
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>

                  <div className="text-center mt-6">
                    <p className="text-gray-300 text-sm">
                      Already have an account?{" "}
                      <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* SIGNUP FORM - RIGHT SIDE */}
          <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 items-center justify-center p-8 relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            
            <div className="max-w-md p-8 relative z-10 text-center">
              {/* Illustration */}
              <div className="relative aspect-square max-w-sm mx-auto mb-4 drop-shadow-2xl">
                <img src="/i.png" alt="Language connection illustration" className="w-full h-full" />
              </div>

              <div className="space-y-4 mt-6">
                <h2 className="text-2xl font-bold text-white">Connect with language partners worldwide</h2>
                <p className="text-gray-300">
                  Practice conversations, make friends, and improve your language skills together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
