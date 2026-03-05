// import React from 'react'

// const Inbox = ({domain = "Drug"}) => {
//   return (
//     <div className='w-[80vh] h-full scale-90  bg-gray-900/45 rounded-lg m-2 p-4 '>
//        {domain =="Drug" &&
//        <div> 
//         <h1>Title</h1>
//         <form>
//             <div>
//                 <label>Medicine Name:</label>
//                 <input type="text"/>
//             </div>

//             <div>
//                 <label>Dosage or Quantity:</label>
//                 <input type="text"/>
//             </div>

//             <div>
//                 <label>Specifies use case:</label>
//                 <label className='text-xs'>Optional</label>
//                 <input type="text"/>
//             </div>

//             <button className='text-gray-950 text-xl bg-white/25 p-4 rounded-lg'>Search</button>
//         </form>
//         </div>
//  }
//         inbox
//     </div>
//   )
// }

// export default Inbox


import React from 'react'

const Inbox = ({domain}) => {

  return (
    <div className='w-[80vh] scale-90 bg-gray-900/45 rounded-lg m-2 p-4 text-white'>

      <h1 className='text-3xl mb-6'>{domain} Search</h1>

      {domain === "Drug" && (
        <form>

          <div>
            <label>Medicine Name</label>
            <input type="text" className='input'/>
          </div>

          <div>
            <label>Dosage</label>
            <input type="text" className='input'/>
          </div>

          <button className='btn'>Search</button>

        </form>
      )}

      {domain === "Illness" && (
        <form>

          <label>Illness Name</label>
          <input type="text" className='input'/>

          <button className='btn'>Search</button>

        </form>
      )}

      {domain === "Symptoms" && (
        <form>

          <label>Symptoms</label>
          <input type="text" className='input'/>

          <button className='btn'>Analyse</button>

        </form>
      )}

      {domain === "Diet" && (
        <form>

          <label>Health Goal</label>
          <input type="text" className='input'/>

          <button className='btn'>Generate Plan</button>

        </form>
      )}

    </div>
  )
}

export default Inbox