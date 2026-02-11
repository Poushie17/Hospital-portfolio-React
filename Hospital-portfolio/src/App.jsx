import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import Cardiology from './components/Cardiology'
import Doctors from './components/Doctors'
import  Contact  from './components/Contact'
import CreateAppointment from './components/CreateAppointment'
import './index.css'


function App() {
  return (
  
    <Router>
      <Navbar/>
      <Routes >
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/services' element={<Services/>}/>
          <Route path='/cardiology' element={<Cardiology/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/appointment' element={<CreateAppointment/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App