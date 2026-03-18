import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

import Navbar from "../component/Navbar"
import Inbox from "../component/Inbox"

const ProcessBox = () => {

  const location = useLocation()
  const domain = location?.state?.domain || "Drug"

  const [messages, setMessages] = useState([])

  const bottomRef = useRef()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (

    <div className='bg-[url("../src/assets/Rosegel.jpg")] bg-cover min-h-screen flex flex-col'>

      <Navbar />

      {/* ---------------- EMPTY STATE ---------------- */}

      {messages.length === 0 ? (

        <div className="
          flex-1 flex 
          flex-col lg:flex-row   /* mobile → column, desktop → row */
          items-center justify-center 
          gap-6 md:gap-10 
          p-4 md:p-8 lg:p-10
        ">

          {/* 🎥 MEDIA BOX */}
          <div className="
            w-full lg:w-1/2 
            h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px]
            rounded-2xl overflow-hidden shadow-lg relative
          ">

            <video
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            >
              <source src="/video/medical.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/30"></div>

          </div>

          {/* 📄 INFO BOX */}
          <div className="
            w-full lg:w-1/2 
            min-h-[220px] md:min-h-[300px]
            backdrop-blur-xl bg-white/10 border border-white/20 
            rounded-2xl p-4 sm:p-6 md:p-8 
            text-white shadow-lg flex flex-col justify-center
          ">

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              {domain} Assistant
            </h1>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              Ask anything related to {domain}. This AI-powered assistant
              provides accurate medical insights and suggestions.
            </p>

            <ul className="mt-4 md:mt-6 text-sm sm:text-base text-gray-300 list-disc pl-5 space-y-1 md:space-y-2">
              <li>Instant answers</li>
              <li>Symptom analysis</li>
              <li>Drug & illness insights</li>
              <li>Personalized suggestions</li>
            </ul>

          </div>

        </div>

      ) : (

        /* ---------------- CHAT UI ---------------- */

        <div className="
          flex-1 overflow-y-auto 
          p-3 sm:p-4 md:p-6 
          flex flex-col gap-3 md:gap-4
        ">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`
                max-w-[85%] sm:max-w-[70%] md:max-w-xl 
                p-3 sm:p-4 
                rounded-xl shadow-md text-sm sm:text-base
                ${msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-white/20 text-white self-start backdrop-blur"}
              `}
            >
              {msg.text}
            </div>

          ))}

          <div ref={bottomRef}></div>

        </div>

      )}

      {/* INPUT BOX */}
      <div className="p-3 sm:p-4">
        <Inbox domain={domain} setMessages={setMessages} />
      </div>

    </div>

  )
}

export default ProcessBox