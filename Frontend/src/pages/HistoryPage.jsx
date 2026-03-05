import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const HistoryPage = () => {

  const location = useLocation()

  const historyList = [
    "Paracetamol dosage",
    "Diabetes diet plan",
    "Headache symptoms",
    "Vitamin D deficiency",
    "Cold medication"
  ]

  const [selectedSearch,setSelectedSearch] = useState(location.state?.query || historyList[0])

  return (
    <div className='bg-[url("../src/assets/Rosegel.jpg")] w-full h-screen flex p-6'>

      {/* LEFT COLUMN – HISTORY */}
      <div className='w-[30%] backdrop-blur-lg shadow-black bg-black/35 shadow-lg rounded-xl p-4 mr-4'>

        <h2 className='text-2xl font-semibold mb-4'>
          Search History
        </h2>

        {historyList.map((item,index)=>(
          <div
            key={index}
            onClick={()=>setSelectedSearch(item)}
            className={`p-3 mb-2 rounded-lg cursor-pointer hover:bg-black/20
              ${selectedSearch === item ? "bg-black/20" : ""}
            `}
          >
            {item}
          </div>
        ))}

      </div>


      {/* RIGHT COLUMN – RESULT */}
      <div className='flex-1 bg-black/25 shadow-black shadow-lg backdrop-blur-lg rounded-xl p-6'>

        <h2 className='text-2xl font-semibold mb-4'>
          Search Result
        </h2>

        <div className='bg-transparent p-5 rounded-lg'>

          <h3 className='text-xl font-bold mb-3'>
            {selectedSearch}
          </h3>

          {/* Simulated result */}
          <p>
            This section will display the detailed result for 
            <span className='font-semibold'> {selectedSearch} </span>.
          </p>

          <p className='mt-3'>
            Here you can show:
          </p>

          <ul className='list-disc ml-6 mt-2'>
            <li>Drug information</li>
            <li>Symptoms explanation</li>
            <li>Recommended precautions</li>
            <li>Diet suggestions</li>
          </ul>

        </div>

      </div>

    </div>
  )
}

export default HistoryPage