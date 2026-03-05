import React from 'react'
import GreenGirl from '../assets/GreenGirl.jpg'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navi = useNavigate();

  const aboutinfo = [
    {title:"Drug info",description:"gives the detail about the drug and usecases"},
    {title:"Illness/Medication",description:"Provides the medication for the specified illness"},
    {title:"Symptom/Precaution",description:"Analyse the Symptoms and provides Precaution"},
    {title:"Dietary Planing",description:"Provide the dietart planing for the User Specified Input"}
  ]

  const howtouse =[
    {title:"Drug Information , Symptom/Precaution",Subdesc:"Here you can view the details about the drug, Analyse the Symptoms and provides Precaution",image:GreenGirl,
      flexcss:false,
      elobration:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reprehenderit iusto dolores repellat alias harum nostrum id soluta minima beatae optio sit aperiam culpa cum similique ut, quas cupiditate nam labore architecto maiores saepe est. Omnis culpa modi cum labore saepe,iusto qui, delectus ea veniam aliquid soluta esse repellendus!"
    },

    {title:"Illness/Medication , Diet Planning",Subdesc:"Provides the medication for the specified illness, Provide the dietart planing for the User Specified Input",image:GreenGirl,
      flexcss:true,
      elobration:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reprehenderit iusto dolores repellat alias harum nostrum id soluta minima beatae optio sit aperiam culpa cum similique ut, quas cupiditate nam labore architecto maiores saepe est. Omnis culpa modi cum labore saepe,iusto qui, delectus ea veniam aliquid soluta esse repellendus!"
    }
  ]
  return (
    <div>

      <section>

      {/* toopbarr */}
      <div className='fixed w-full z-50 rounded-lg '>      
        <nav className='p-3  flex flex-row justify-between align-middle items-center  backdrop-blur-sm bg-transparent'>
        <span className='text-white p-3 text-2xl'>Ai-HealthCare</span>
        <a className='text-xl font-sans p-2 text-white rounded-lg inline-flex gap-3 cursor-pointer' onClick={()=>navi("/Login")} >Login</a>
      </nav>
      </div>


      {/* interface */}
      <div className='bg-[url("../src/assets/Rosegel.jpg")] w-full h-screen bg-cover inset-0 flex flex-col justify-center align-middle items-center z-20'>
      <div className='p-3 px-8 flex flex-col justify-start align-middle items-start'>
         <h1 className='text-9xl py-8 -ml-2 text-gray-900  '>Healthcare</h1>
         <h6 className='text-4xl font-sans text-gray-900 py-3'>Powered By AI / openFDA API</h6>
         <p className='text-gray-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis obcaecati, quisquam tempora culpa maxime sed et assumenda natus optio odit nemo delectus. Eius sapiente laborum quam sit obcaecati ullam, nihil reiciendis illo voluptate architecto officiis quasi incidunt dolores, pariatur libero doloremque eligendi 
          cupiditate? Rerum quaerat suscipit culpa necessitatibus porro?</p>
          <button className='bg-white p-4 my-4 -ml-1 rounded-xl text-gray-900 font-bold' onClick={()=>navi("/Login")}>Get Started</button>
      </div>
      </div>

      </section>

      {/* featurres section */}
      <section className='bg-gradient-to-r from-black via-pink-950 to-gray-900 px-6 py-10 '>
          {/* about section */}
          <h1 className='text-9xl p-3 pt-3 py-5'>Features</h1>
          <div>
             <div className='flex flex-row justify-center align-middle items-center scale-90'>
             {
              aboutinfo.map((items,index)=>{
                  return(
                    <div key={index} className='hover:bg-white hover:backdrop-blur-sm  p-6 rounded-lg m-2 flex flex-col space-y-2 text-white hover:text-gray-900 group hover:scale-110 bg-transparent shadow-xl  hover:shadow-gray-600 duration-200 delay-100 '>
                      <h1 className='text-3xl font-thin '>{items.title}</h1>
                      <p  className='text-md text-gray-600 '>{items.description}</p>
                    </div>
                  )
              })
             }
             </div>
             
             {/* elobraton para */}
             <p className='px-14 p-4 text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem optio quasi eum, culpa unde nesciunt tempore quaerat ullam voluptatibus, maxime natus assumenda, dolore esse. Ipsum fugiat repellat doloribus eum. Reprehenderit eaque similique, fuga unde molestiae nobis suscipit. Harum numquam facilis fugit, 
              ad accusantium eius sunt temporibus similique voluptas ratione non?</p>
          </div>


      </section>

      {/* specified data */}
      <section className='bg-gradient-to-r from-black via-pink-950 to-gray-900 px-6 py-20 '>

        <h1 className='text-9xl'>Use Cases?</h1>
        <div>
          {/* drug information */}

          {
            howtouse.map((items,index)=>{
              return(
                <div className={`flex ${items.flexcss ? 'flex-row-reverse' : 'flex-row'} justify-center align-middle items-center  px-10 p-5 scale-75`} key={index}>
            <img className=' bg-white w-full h-[400px]' src={items.image}/>
            <div className={`flex flex-col ${items.flexcss ? ' justify-end items-end content-end ' :'justify-start  items-start'} align-middle space-y-6 px-24`}>
            <h1 className='text-7xl font-semibold -ml-2'>{items.title}</h1>
            <h3 className='text-2xl font-sans text-gray-400'>{items.Subdesc}</h3>
            <p className='font-thin '>{items.elobration}</p>
            <button className='bg-white p-2 text-xl rounded-lg w-fit text-gray-900'>Start</button>
            </div>
          </div>
              )
            })
          }
          
        </div>
      </section>

{/* WHY AI HEALTHCARE */}
<section className='bg-gradient-to-r from-black via-pink-950 to-gray-900 px-10 py-24'>

<h1 className='text-9xl mb-10'>Why AI?</h1>

<div className='grid grid-cols-3 gap-10 scale-90'>

<div className='bg-transparent border border-gray-700 p-8 rounded-xl text-white hover:bg-white hover:text-gray-900 duration-300'>
<h2 className='text-3xl mb-3'>Fast Diagnosis</h2>
<p>AI helps analyze symptoms instantly and provides possible medical guidance faster than traditional searches.</p>
</div>

<div className='bg-transparent border border-gray-700 p-8 rounded-xl text-white hover:bg-white hover:text-gray-900 duration-300'>
<h2 className='text-3xl mb-3'>Reliable Data</h2>
<p>Drug information is sourced from the openFDA database to ensure accurate and verified medical data.</p>
</div>

<div className='bg-transparent border border-gray-700 p-8 rounded-xl text-white hover:bg-white hover:text-gray-900 duration-300'>
<h2 className='text-3xl mb-3'>Personalized Guidance</h2>
<p>The system adapts to user inputs to provide health suggestions and dietary planning.</p>
</div>

</div>

</section>

{/* DATA SOURCE */}
<section className='bg-gradient-to-r from-black via-pink-950 to-gray-900 px-10 py-24'>

<h1 className='text-9xl'>Data Source</h1>

<div className='flex justify-center mt-10'>

<div className='bg-white text-gray-900 p-10 rounded-xl shadow-2xl w-[60%]'>

<h2 className='text-4xl mb-4'>openFDA API</h2>

<p className='text-lg'>
This platform uses the openFDA API provided by the U.S Food and Drug Administration.
The API contains verified information about drugs, medical products, and health safety reports.
</p>

<p className='mt-4 text-sm text-gray-700'>
The system retrieves drug labels, usage, warnings and dosage details directly from this database.
</p>

</div>

</div>

</section>



      <section>
        <div className='flex flex-col justify-center align-middle items-center gap-y-8 py-24 '> 
          <h1 className='text-7xl'>Verification</h1>
          
           <div className='flex flex-row-reverse my-3 justify-center align-middle items-center px-14 gap-4'>
            <p className='text-pink-700 w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum impedit laboriosam?
               Est ducimus incidunt repellat perferendis provident cum sit!</p>
               <div className='bg-white p-4 text-gray-900 rounded-lg'>
            <p>abish@123gmail.in</p>
            <p>linked-in</p>
            <p>email</p>
            </div>
          </div>
         
          <p className='text-xl text-gray-800 bg-white w-full inline-flex justify-center align-middle items-center p-4'>copyright climed 2026 @abishake c17a</p>
          
        </div>
      </section>
    </div>
  )
}

export default LandingPage
