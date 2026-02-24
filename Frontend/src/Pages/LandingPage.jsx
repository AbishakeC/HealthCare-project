import React from "react";

const LandingPage = () => {
  return (
    <div className="w-screen min-h-screen font-sans">

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-screen bg-[url('../src/assets/redbg.jpg')] bg-cover bg-center">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-20 text-white">
          <h1 className="text-2xl font-bold">HealthCare AI</h1>
          <button className="px-5 py-2 bg-green-500 rounded-full hover:bg-green-600 transition">
            Login / Sign Up
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Smart HealthCare System
          </h1>

          <p className="max-w-2xl text-lg md:text-xl mb-8 text-gray-200">
            AI-powered illness detection, medicine descriptions,
            and personalized diet planning — all in one platform.
          </p>

          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full text-lg font-semibold transition shadow-lg">
            Get Started
          </button>

        </div>
      </div>

      {/* ================= GUIDE SECTION ================= */}
      <section className="py-20 bg-black text-center px-10">
        <h2 className="text-4xl font-bold mb-12 text-blue-800">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">
              1. Enter Symptoms
            </h3>
            <p className="text-gray-600">
              Tell us your illness or symptoms and our AI will analyze it instantly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">
              2. Get Medicine Info
            </h3>
            <p className="text-gray-600">
              View detailed medicine descriptions, usage, and precautions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-green-600">
              3. Personalized Diet
            </h3>
            <p className="text-gray-600">
              Receive customized food and diet suggestions for faster recovery.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 HealthCare AI. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default LandingPage;