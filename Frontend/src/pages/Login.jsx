import React, { useState } from "react";
import API from "../api/api";
import {useNavigate} from "react-router-dom";

const Login = () => {

  const [signup, setSignup] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const navi = useNavigate();

  const toggleMode = () => {
    setSignup(!signup);
    setEmail("");
    setPassword("");
    setUsername("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
  }

  /* ---------------- LOGIN ---------------- */

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await API.post("/login", {
  email,
  password
})


      localStorage.setItem("token", res.data.access_token);
      setSuccess("Login successful! Redirecting...");
      
      setTimeout(() => {
        setLoading(false);
        navi("/Mainpage");
      }, 800);

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Login failed. Please check your credentials.");
      setLoading(false);
    }
  }


  /* ---------------- SIGNUP ---------------- */

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await API.post("/signup", {
  username,
  email,
  password
})

      setSuccess("Registered successfully! You can now log in.");

      setTimeout(() => {
        setLoading(false);
        toggleMode();
      }, 1200);

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Signup failed. Email might already be registered.");
      setLoading(false);
    }
  }


  return (

    <div className='bg-[url("../src/assets/Rosegel.jpg")] bg-cover w-full h-screen'>

      <section className='w-full h-full flex flex-row justify-center items-center gap-3'>

        <div className='p-6'>

          {signup ?

            /* ===================== SIGNUP ===================== */

            <>

              <h1 className='text-3xl font-semibold py-3 ml-3 text-center'>Signup</h1>

              <form
                onSubmit={handleSignup}
                className='backdrop-blur-2xl bg-black/10 p-6 rounded-xl flex flex-col justify-center items-center text-gray-900 group hover:scale-90 duration-200 delay-100 scale-95'
                style={{minWidth: '320px'}}
              >
                {/* Messages */}
                {error && <div className="text-red-700 bg-red-100 p-2 rounded-md w-full text-center text-sm mb-4">{error}</div>}
                {success && <div className="text-emerald-700 bg-emerald-100 p-2 rounded-md w-full text-center text-sm mb-4">{success}</div>}

                <div className='flex flex-col w-full justify-start items-start scale-95'>

                  <label className="font-medium mb-1">Full Name</label>
                  <input
                    type='text'
                    required
                    className='bg-white text-gray-900 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-slate-900 mb-3'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <label className="font-medium mb-1">Email</label>
                  <input
                    type='email'
                    required
                    className='bg-white text-gray-900 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-slate-900 mb-3'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label className="font-medium mb-1">Password</label>
                  <input
                    type='password'
                    required
                    minLength="4"
                    className='bg-white text-gray-900 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-slate-900 mb-3'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <label className="font-medium mb-1">Confirm Password</label>
                  <input
                    type='password'
                    required
                    minLength="4"
                    className='bg-white text-gray-900 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-slate-900 mb-4'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                </div>

                <span className='text-pink-900 font-medium mt-2'>
                  Have an existing account?
                </span>

                <button
                  className='text-lg font-bold text-white pb-4 hover:text-black transition-colors'
                  onClick={toggleMode}
                  type="button"
                  disabled={loading}
                >
                  Login to existing account
                </button>

                <button
                  className={`p-3 px-16 text-xl text-white rounded-3xl duration-150 delay-75 transition-all w-full
                    ${loading ? 'bg-slate-700 cursor-not-allowed' : 'bg-slate-900 hover:bg-white hover:-translate-y-2 hover:text-gray-900 shadow-lg'}`}
                  type='submit'
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Sign In'}
                </button>

              </form>

            </>

            :

            /* ===================== LOGIN ===================== */

            <>

              <h1 className='text-4xl font-semibold py-3 text-center'>Login</h1>

              <form
                onSubmit={handleLogin}
                className='backdrop-blur-lg bg-black/10 p-8 rounded-xl flex flex-col justify-center items-center text-gray-900'
                style={{minWidth: '320px'}}
              >
                {/* Messages */}
                {error && <div className="text-red-700 bg-red-100 p-2 rounded-md w-full text-center text-sm mb-4">{error}</div>}
                {success && <div className="text-emerald-700 bg-emerald-100 p-2 rounded-md w-full text-center text-sm mb-4">{success}</div>}


                <div className='flex flex-col w-full justify-start items-start scale-95'>

                  <label className="font-medium mb-1">Email</label>
                  <input
                    type='email'
                    required
                    className='bg-white text-gray-900 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-slate-900 mb-4'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label className="font-medium mb-1">Password</label>
                  <input
                    type='password'
                    required
                    className='bg-white text-gray-900 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-slate-900 mb-2'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                </div>

                <span className='text-pink-900 font-bold mt-6'>
                  Don't have an account?
                </span>

                <button
                  className='text-lg font-medium text-white pb-6 hover:text-slate-800 transition-colors'
                  onClick={toggleMode}
                  type="button"
                  disabled={loading}
                >
                  Create an account
                </button>


                <button
                  className={`p-3 px-16 text-xl text-white rounded-3xl duration-150 delay-75 transition-all w-full
                    ${loading ? 'bg-slate-700 cursor-not-allowed' : 'bg-slate-900 hover:bg-white hover:-translate-y-2 hover:text-gray-900 shadow-lg'}`}
                  type='submit'
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>

              </form>

            </>

          }

        </div>

      </section>

    </div>

  )

}

export default Login