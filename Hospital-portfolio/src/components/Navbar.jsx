import React from 'react'
import logo from "../assets/logo.jpg"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="bg-blue-950 flex text-green-100 text-xl  w-full ">
        <ul className='flex space-x-6 justify-between items-center w-full p-4'>
            <img className='h-10' src={logo} alt="" />
            <li > <Link to="/">Home</Link></li>
            <li><Link to="/about">About hospital</Link></li>
            <li > <Link to="/services">Services list</Link></li>
            <li> <Link to="/doctors">Doctors listing </Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li className='bg-blue-900 p-3 border-2 rounded-lg ' > <Link to="/appointment">Create Appointment</Link></li>
        </ul>
    </div>
  )
}

export default Navbar