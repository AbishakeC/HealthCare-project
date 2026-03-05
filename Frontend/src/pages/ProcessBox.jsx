// import React from 'react'
// import OutletBox from '../component/OutletBox'
// import Inbox from '../component/Inbox'
// import Navbar from '../component/Navbar'

// const ProcessBox = () => {
//   return (
//     <div className='bg-[url("../src/assets/Rosegel.jpg")] bg-cover content-center w-full h-full pb-9'>

//         <div className=''>
//             <Navbar/>
//         </div>

//       <div className='flex flex-row '>

//         {/* left side */}
//         <div>
//             <Inbox/>
//         </div>
        
//         {/* riggt side */}
//         <div>
//            <OutletBox/>
//         </div>

//       </div>


//     </div>
//   )
// }

// export default ProcessBox


import React from 'react'
import { useLocation } from 'react-router-dom'
import OutletBox from '../component/OutletBox'
import Inbox from '../component/Inbox'
import Navbar from '../component/Navbar'

const ProcessBox = () => {

  const location = useLocation()
  const domain = location.state?.domain || "Drug"

  return (
    <div className='bg-[url("../src/assets/Rosegel.jpg")] bg-cover w-full min-h-screen pb-9'>

      <Navbar/>

      <div className='flex flex-row'>

        <Inbox domain={domain}/>

        <OutletBox domain={domain}/>

      </div>

    </div>
  )
}

export default ProcessBox