import React from 'react'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import LoginLayout from "./Pages/LoginLayout"
import MainPage from './Pages/MainPage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<LoginLayout/>}/>
      <Route path='/Mainpage' element={<MainPage/>}/>
      </>
    )
    
  )
  return (
   <RouterProvider router={router}/>
  )
}

export default App
