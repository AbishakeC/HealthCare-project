import React from "react";
 import { useNavigate } from "react-router-dom"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const ProfilePage = () => {

  const navigate = useNavigate()

  // Search history
  const history = [
    "Paracetamol dosage",
    "Diabetes diet plan",
    "Headache symptoms",
    "Vitamin D deficiency",
    "Cold medication"
  ];

  // Diet planner data
  const dietPlan = [
    { meal: "Breakfast", food: "Oats + Fruits", done: true },
    { meal: "Lunch", food: "Brown Rice + Vegetables", done: true },
    { meal: "Dinner", food: "Soup + Salad", done: false },
    { meal: "Water", food: "5 / 8 Glasses", done: false }
  ];

  // Search analytics chart data
  const searchData = [
    { name: "Drug Info", searches: 12 },
    { name: "Symptoms", searches: 8 },
    { name: "Diet", searches: 5 },
    { name: "Medication", searches: 6 }
  ];

  return (
    <div className="bg-[url('../src/assets/Rosegel.jpg')] bg-cover min-h-screen flex justify-center items-center p-8">

      <div className="w-[95%] backdrop-blur-lg bg-black/25 rounded-2xl shadow-xl flex gap-6 p-8 text-white">

        {/* LEFT SECTION – PROFILE */}
        <div className="w-[25%] flex flex-col items-center border-r border-white/30 pr-6">

          <img
            src="../src/assets/neo.jpg"
            alt="profile"
            className="w-[180px] h-[180px] rounded-full object-cover mb-4"
          />

          <h1 className="text-3xl font-bold">UserName</h1>
          <p className="text-lg mb-4">abish@1234.gmail</p>

          <button className="bg-green-500 px-4 py-2 rounded-lg mb-3 hover:bg-green-600">
            Edit Profile
          </button>

          <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
            Logout
          </button>

        </div>


        {/* MIDDLE SECTION – HISTORY */}
        <div className="w-[35%] border-r border-white/30 pr-6">

          <h2 className="text-2xl font-semibold mb-4">
            Recent Searches
          </h2>

          <div className="flex flex-col gap-3">

         

{history.map((item,index)=>(
  <div
    key={index}
    onClick={()=>navigate("/history",{state:{query:item}})}
    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 cursor-pointer"
  >
    {item}
  </div>
))}

          </div>

        </div>


        {/* RIGHT SECTION – HEALTH TOOLS */}
        <div className="w-[40%] flex flex-col gap-6">

          {/* DIET PLANNER */}
          <div>

            <h2 className="text-2xl font-semibold mb-3">
              Dietary Planner
            </h2>

            {dietPlan.map((item, index) => (
              <div
                key={index}
                className="flex justify-between bg-white/20 p-3 rounded-lg mb-2"
              >
                <span>{item.meal}</span>
                <span>{item.food}</span>
              </div>
            ))}

          </div>


          {/* SEARCH ANALYTICS CHART */}
          <div>

            <h2 className="text-2xl font-semibold mb-3">
              Search Analytics
            </h2>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={searchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="searches" fill="#4ade80" />
              </BarChart>
            </ResponsiveContainer>

          </div>


          {/* SETTINGS */}
          <div className="flex gap-3 mt-2">

            <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
              Medical Records
            </button>

            <button className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600">
              Medication Tracker
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfilePage;