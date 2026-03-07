import React, { useState } from "react";
import API from "../api/api";

const Login = () => {

const [signup,setSignup] = useState(false)

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [username,setUsername] = useState("")
const [confirmPassword,setConfirmPassword] = useState("")


/* ---------------- LOGIN ---------------- */

const handleLogin = async(e)=>{
e.preventDefault()

try{

const res = await API.post("/Login",{
email:email,
password:password
})

localStorage.setItem("token",res.data.access_token)

console.log(res.data)

alert("Login successful")

}catch(err){

console.log(err.response?.data || err)
alert("Login failed")

}

}


/* ---------------- SIGNUP ---------------- */

const handleSignup = async(e)=>{
e.preventDefault()

if(password !== confirmPassword){
 alert("Passwords do not match")
 return
}

try{

const res = await API.post("/Signup",{
username:username,
email:email,
password:password
})

console.log(res.data)

alert("Registered successfully")

setSignup(false)

}catch(err){

console.log(err.response?.data)
alert("Signup failed")

}

}


return (

<div className='bg-[url("../src/assets/Rosegel.jpg")] bg-cover w-full h-screen'>

<section className='w-full h-full flex flex-row justify-center items-center gap-3'>

<div className='p-6'>

{signup ?

/* ===================== SIGNUP ===================== */

<>

<h1 className='text-2xl font-semibold py-3 ml-3'>Signup</h1>

<form
onSubmit={handleSignup}
className='backdrop-blur-2xl bg-black/10 p-4 rounded-xl flex flex-col justify-center items-center text-gray-900 group hover:scale-90 duration-200 delay-100 scale-95'
>

<div className='flex flex-col justify-start items-start scale-95'>

<label>FullName</label>

<input
type='text'
className='bg-white text-gray-900 p-1'
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>


<label>Email</label>

<input
type='email'
className='bg-white text-gray-900 p-1'
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


<label>Password</label>

<input
type='password'
className='bg-white text-gray-900 p-1'
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>


<label>Confirm Password</label>

<input
type='password'
className='bg-white text-gray-900 p-1'
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
/>

</div>


<span className='text-pink-900 font-light mt-2'>
Have an existing account ?
</span>

<button
className='text-lg font-bold text-white pb-3 hover:text-black'
onClick={()=>setSignup(false)}
type="button"
>
Login to existing account
</button>


<button
className='p-3 px-16 text-xl text-white hover:bg-white hover:-translate-y-3 hover:text-gray-900 bg-slate-900 rounded-3xl duration-150 delay-75'
type='submit'
>
SignIn
</button>

</form>

</>

:

/* ===================== LOGIN ===================== */

<>

<h1 className='text-4xl font-semibold py-3'>Login</h1>

<form
onSubmit={handleLogin}
className='backdrop-blur-lg bg-black/10 p-6 rounded-xl flex flex-col justify-center items-center text-gray-900'
>

<div className='flex flex-col justify-start items-start scale-95'>

<label>Email</label>

<input
type='email'
className='bg-white text-gray-900 p-1'
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


<label>Password</label>

<input
type='password'
className='bg-white text-gray-900 p-1'
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

</div>


<span className='text-pink-900 font-bold mt-5'>
Don't have an account ?
</span>

<button
className='text-lg font-light text-white pb-6'
onClick={()=>setSignup(true)}
type="button"
>
Create an account
</button>


<button
className='p-3 px-16 text-xl text-white hover:bg-white hover:-translate-y-3 hover:text-gray-900 bg-slate-900 rounded-3xl duration-150 delay-75'
type='submit'
>
Login
</button>

</form>

</>

}

</div>

</section>

</div>

)

}

export default Login