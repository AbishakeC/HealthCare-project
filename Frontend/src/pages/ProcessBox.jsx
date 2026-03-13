import { useState } from "react"
import { useLocation } from "react-router-dom"

import OutletBox from "../component/OutletBox"
import Inbox from "../component/Inbox"
import Navbar from "../component/Navbar"

const ProcessBox = () => {

  const location = useLocation()

  const domain = location?.state?.domain || "Drug"

  const [responseData, setResponseData] = useState(null)

  return (

    <div className='relative bg-[url("../src/assets/Rosegel.jpg")] bg-cover bg-center w-full min-h-screen'>

      <Navbar />

      <div className='relative w-full min-h-[90vh] flex items-center justify-center p-6'>

        {/* RESULT DISPLAY */}

        <div className='w-full max-w-5xl'>

          <OutletBox data={responseData} />

        </div>

        {/* FLOATING INPUT BOX */}

        <div className='absolute right-10 bottom-10 w-[360px]'>

          <Inbox
            domain={domain}
            setResponseData={setResponseData}
          />

        </div>

      </div>

    </div>

  )
}

export default ProcessBox