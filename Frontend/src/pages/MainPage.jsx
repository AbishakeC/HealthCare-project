import React from "react";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import { FaPills, FaHeartbeat, FaNotesMedical, FaAppleAlt } from "react-icons/fa";

const MainPage = () => {

  const navi = useNavigate();

  const goToProcess = (type) => {
    navi("/ProcessBox", { state: { domain: type } });
  };

  const cards = [
    {
      title: "Drug Info",
      icon: <FaPills size={40} />,
      value: "Drug",
      desc: "Check drug usage, dosage and details"
    },
    {
      title: "Illness / Medication",
      icon: <FaHeartbeat size={40} />,
      value: "Illness",
      desc: "Find medication for illnesses"
    },
    {
      title: "Symptoms / Precaution",
      icon: <FaNotesMedical size={40} />,
      value: "Symptoms",
      desc: "Analyze symptoms and precautions"
    },
    {
      title: "Diet Planner",
      icon: <FaAppleAlt size={40} />,
      value: "Diet",
      desc: "Get diet plans for better health"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[url('../src/assets/GreenGirl.jpg')] bg-cover bg-center">

      {/* Dark Overlay */}
      <div className="min-h-screen bg-black/10 backdrop-blur-sm">

        <Navbar />

        {/* Hero Section */}
        <div className="flex flex-col  items-center justify-center align-middle text-white pt-20">

          <h1 className="text-5xl font-bold mb-4">
             Verify Your needs
          </h1>

          <p className="text-lg text-gray-200 mb-12">
            AI powered medical information system
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">

            {cards.map((card, index) => (
              <div
                key={index}
                onClick={() => goToProcess(card.value)}
                className="
                group
                cursor-pointer
                backdrop-blur-xl
                rounded-2xl
                p-8
                w-[250px]
                text-center
                bg-black/15
                shadow-xl
                shadow-black
                border border-black/25
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-white/40                "
              >

                <div className="flex justify-center mb-4 text-green-300 group-hover:text-white">
                  {card.icon}
                </div>

                <h2 className="text-xl font-semibold mb-2">
                  {card.title}
                </h2>

                <p className="text-sm text-gray-200">
                  {card.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default MainPage;