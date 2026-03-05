import React, { useState } from 'react'

const Login = () => {

  const [signup,setSignup]=useState(false);
  
  return (
    <div className='bg-[url("../src/assets/Rosegel.jpg")] bg-cover w-full h-screen '>
       <section className=' w-full h-full flex flex-row justify-center align-middle items-center gap-3'>
    
        <div className='p-6 '>
          {signup ?
        <>
         <h1 className='text-2xl font-semibold py-3 ml-3'>Signup</h1>
          <form className='backdrop-blur-2xl bg-black/10 p-4 rounded-xl flex flex-col justify-center align-middle items-center text-gray-900 group  hover:scale-90 duration-200 delay-100 scale-95 ' >

            <div className='flex flex-col justify-start align-middle items-start scale-95 '>
            <label >FullName</label>
            <input type='text' className='bg-white text-gray-900'/>
            
            <label >Email</label>
            <input type='text' className='bg-white text-gray-900'/>

            <label>Password</label>
            <input type='text' className='bg-white text-gray-900'/>
            
            <label>Confirm Password</label>
            <input type='text' className='bg-white text-gray-900'/>
            </div>
            
            <span className='text-pink-900 font-light  mt-2'>Have an existing account ?</span>
            <button className='txet-lg font-bold text-white pb-3 hover:text-black ' onClick={(e)=>{setSignup(false);e.preventDefault()}}>Login to existing account</button>
            <button className='p-3 px-16 text-xl text-white hover:bg-white hover:-translate-y-3 hover:text-gray-900 bg-slate-900 rounded-3xl duration-150 delay-75'>SignIn</button>
          </form>
          </>

          :<>
         <h1 className='text-4xl font-semibold py-3'>Login</h1>
          <form className='backdrop-blur-lg bg-black/10 p-6 rounded-xl flex flex-col justify-center align-middle items-center text-gray-900 '>

            <div className='flex flex-col justify-start align-middle items-start scale-95'>
            <label >Username</label>
            <input type='text' className='bg-white text-gray-900'/>

            <label>Password</label>
            <input type='text' className='bg-white text-gray-900'/>
            </div>
            
            <span className='text-pink-900 font-bold  mt-5'>don't have an account ?</span>
            <button className='txet-lg font-light text-white pb-6' onClick={(e)=>{setSignup(true);e.preventDefault()}}>Create and account</button>
            <button className='p-3 px-16 text-xl text-white hover:bg-white hover:-translate-y-3 hover:text-gray-900 bg-slate-900 rounded-3xl duration-150 delay-75'>Login</button>
          </form>
          </>
           }
         

        </div>
       </section>
    </div>
  )
}

export default Login
