import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import OutletBox from '../component/OutletBox'
import Inbox from '../component/Inbox'
import Navbar from '../component/Navbar'

const ProcessBox = () => {

  const location = useLocation()
  const domain = location.state?.domain || "Drug"

  const [responseData, setResponseData] = useState(null)

  return (
    <div className='bg-[url("../src/assets/Rosegel.jpg")] bg-cover w-full min-h-screen pb-9'>

      <Navbar/>

      <div className='flex flex-row'>

        <Inbox 
          domain={domain}
          setResponseData={setResponseData}
        />

        <OutletBox 
          data={responseData}
        />

      </div>

    </div>
  )
}

export default ProcessBox