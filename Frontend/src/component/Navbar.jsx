import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navi = useNavigate();
  return (
      <div className=' w-full z-50 rounded-lg '>      
        <nav className='p-3  flex flex-row justify-between align-middle items-center  backdrop-blur-sm bg-transparent'>
        <span className='text-white p-3 text-2xl'>Ai-HealthCare</span>
        <ul className='flex flex-row gap-x-4 '>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SEARCHES</li>
          <li>PROFILE</li>
          <p className='px-2'>|</p>
          
          <li>Email</li>
          <li onClick={()=>{navi('/ProfilePage')}}>Profile</li>
          <li></li>
        </ul>
        {/* <a className='text-xl font-sans p-2 text-gray-900 rounded-lg inline-flex gap-3 cursor-pointer' onClick={()=>navi("/Login")} >Login<span className='text-white'>Signup</span></a> */}
      </nav>
      </div>

  )
}

export default Navbar
