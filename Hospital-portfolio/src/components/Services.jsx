import React from 'react'
import { Link } from 'react-router-dom';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Brain,Siren ,Baby,Venus,Dumbbell} from 'lucide-react';

function Services() {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1669216368818-8dcc28259724?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover min-h-screen'>
      <div className="text-blue-950 pl-15">
        <h1 className='text-6xl pt-8 font-extrabold '>Get To Know </h1>
         <h1 className='text-7xl font-extrabold'>Our Services </h1>
         <p className=' text-lg pt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magnam hic dolorem? Expedita ullam necessitatibus temporibus quam animi assumenda officiis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, maiores. Nobis harum natus eaque laborum ab praesentium libero necessitatibus deserunt!</p>



      </div>
      <div className='grid grid-cols-4 gap-8 text-white m-8'>
        <Link to="/cardiology" className='h-60 w-90 bg-blue-950 p-5 m-10 rounded-xl hover:scale-120 hover:bg-blue-900 transition-all duration-300'>
        <MonitorHeartIcon sx={{ fontSize: 80 }} /><div className='text-4xl pb-4 font-bold'>Cardiology</div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sed?</p>
        
        </Link> 
        <Link to="/neurology" className='h-60 w-90 bg-blue-950 p-5 m-10 rounded-xl hover:scale-120 hover:bg-blue-900 transition-all duration-300'>
        <Brain size={80} /><div className='text-4xl pb-4 font-bold'>Neurology</div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sed?</p>
        
        </Link> 
        <Link to="/emergency" className='h-60 w-90 bg-blue-950 p-5 m-10 rounded-xl hover:scale-120 hover:bg-blue-900 transition-all duration-300'>
        <Siren size={80} /><div className='text-4xl pb-4 font-bold'>Emergency</div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sed?</p>
        
        </Link> 
        <Link to="/pediatric" className='h-60 w-90 bg-blue-950 p-5 m-10 rounded-xl hover:scale-120 hover:bg-blue-900 transition-all duration-300'>
        <Baby size={80} /><div className='text-4xl pb-4 font-bold'>Pediactric</div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sed?</p>
        
        </Link> 

        <Link to="/gyn" className='h-60 w-90 bg-blue-950 p-5 m-10 rounded-xl hover:scale-120 hover:bg-blue-900 transition-all duration-300'>
        <Venus size={80} /><div className='text-4xl pb-4 font-bold'>Gynecology</div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sed?</p>
        
        </Link> 
        <Link to="/physical" className='h-60 w-90 bg-blue-950 p-5 m-10 rounded-xl hover:scale-120 hover:bg-blue-900 transition-all duration-300'>
        <Dumbbell size={80} /><div className='text-4xl pb-4 font-bold'>Physical Therapy</div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, sed?</p>
        
        </Link> 
        
        </div>
    </div>
  )
}

export default Services
