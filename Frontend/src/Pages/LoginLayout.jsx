import React, { useState } from "react";
const LoginLayout = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-200 to-green-300">

      <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl w-full max-w-sm p-6">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-emerald-600 mb-5">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <form className="space-y-3">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-emerald-400 outline-none text-sm"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-emerald-400 outline-none text-sm"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-emerald-400 outline-none text-sm"
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-emerald-600 transition duration-300"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-xs mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-emerald-600 font-semibold cursor-pointer ml-1 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default LoginLayout;