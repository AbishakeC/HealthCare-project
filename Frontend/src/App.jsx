import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginLayout from "./Pages/LoginLayout"
import MainPage from './Pages/MainPage'
import LandingPage from './Pages/LandingPage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route index element={<LandingPage/>}/>
      <Route path='/login' element={<LoginLayout/>}/>
      <Route path='/Mainpage' element={<MainPage/>}/>
      </>
    )
    
  )
  return (
   <RouterProvider router={router}/>

  )
}

export default App
