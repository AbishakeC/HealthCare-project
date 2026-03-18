import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Navbar = () => {

  const navi = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <div className="w-full fixed top-0 z-50">

      <nav className="
        flex items-center justify-between
        px-4 md:px-8 py-4
        backdrop-blur-md bg-white/20
        text-white
      ">

        {/* LOGO */}
        <span
          className="text-xl md:text-2xl font-semibold cursor-pointer"
          onClick={() => navi("/")}
        >
          Ai-HealthCare
        </span>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-sm md:text-base">

          <li className="hover:text-green-400 cursor-pointer transition">
            HOME
          </li>

          <li className="hover:text-green-400 cursor-pointer transition">
            ABOUT
          </li>

          <li className="hover:text-green-400 cursor-pointer transition">
            SEARCHES
          </li>

          <li
            className="hover:text-green-400 cursor-pointer transition"
            onClick={() => navi("/ProfilePage")}
          >
            PROFILE
          </li>

          <span className="text-gray-400">|</span>

          <li className="text-gray-300 text-sm">
            Email
          </li>

        </ul>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

      </nav>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (

        <div className="
          md:hidden
          flex flex-col
          gap-4
          p-4
          bg-black/80 backdrop-blur-lg
          text-white
          animate-fadeIn
        ">

          <li className="hover:text-green-400 cursor-pointer">HOME</li>

          <li className="hover:text-green-400 cursor-pointer">ABOUT</li>

          <li className="hover:text-green-400 cursor-pointer">SEARCHES</li>

          <li
            className="hover:text-green-400 cursor-pointer"
            onClick={() => navi("/ProfilePage")}
          >
            PROFILE
          </li>

          <span className="text-gray-400">|</span>

          <li className="text-gray-300">Email</li>

        </div>

      )}

    </div>

  )
}

export default Navbar