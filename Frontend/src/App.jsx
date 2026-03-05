import React from 'react'
import LandingPage from './pages/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import ProcessBox from './pages/ProcessBox';
import ProfilePage from './pages/ProfilePage';
import HistoryPage from "./pages/HistoryPage"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Mainpage' element={<MainPage/>}/>
      <Route path='/ProcessBox' element={<ProcessBox/>}/>
      <Route path='/ProfilePage' element={<ProfilePage/>}/>
      <Route path="/history" element={<HistoryPage/>}/>
    </Routes>
    <div className='bg-black'>
      
    </div>

    </BrowserRouter>
  )
}

export default App
