import React, { useState } from 'react'

const OutletBox = () => {
  const [msg,setMsg] = useState('bot');
  return (
    <div className='h-screen w-[130vh] -ml-3 p-4 bg-white/10 backdrop-blur-sm shadow-lg shadow-black text-gray-700  rounded-lg '>

      {/* Sub top bar */}
      <div className='flex flex-row text-black justify-between  align-middle items-center p-4 rounded-lg backdrop-blur-md'>
        <p>Analysed data</p>
        <p>Download</p>
      </div>

      {/* outlet box */}
      <div className='flex flex-col  scale-90'>
        {msg == "user" ?
        //user messages
        <div className=' w-full h-fit flex flex-row gap-x-3 justify-start items-center align-middle p-3 '>
          <p className='p-4 rounded-full bg-blue-700'>B</p>
          <p className=' max-w-[70vh] text-xs bg-slate-900 rounded-2xl p-3 text-white'>user msg
             Lorem ipsum dolor sit amet.
             lorem15</p>
        </div>:

      // response window
       <div className='flex flex-col justify-start align-middle items-start gap-3 p-2  text-gray-950 max-w-[120vh]'>

        <h1 className='text-6xl'>title</h1>

        <h3 className='text-xl'>descriptions Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt debitis dolores 
                cumque delectus ipsam voluptates asperiores dicta adipisci nam.
        </h3>

        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, neque, minus saepe ipsa aperiam nobis voluptates, accusamus sunt assumenda tempora facilis dolor voluptate quod. Ea itaque sunt minima officiis unde pariatur blanditiis nam debitis odio nobis! Doloremque veritatis dolore unde, voluptate,
                quos sed voluptatum aperiam nisi, inventore perferendis sint voluptatibus.
        </p>

        <p className='text-xl font-semibold'>Reference page : <span className='text-pink-700 font-light cursor-pointer hover:-translate-y-2 duration-200 delay-100'>www.reference-page.in</span></p>
        </div>}
      </div>
    </div>
  )
}

export default OutletBox
