import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MedicationIcon from '@mui/icons-material/Medication';

function Home() {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1516575901726-efcb7a9895a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvc3BpdGFsfGVufDB8fDB8fHww")] bg-cover w-full h-screen '>
      
      <div className="relative ">
       
        <div className="relative pt-20 flex items-center justify-end h-full">
          <div className='flex flex-col justify-end p-6 text-right text-white'>
            <h1 className="text-5xl font-bold">স্বাগতম</h1>
            <h1 className="text-4xl font-bold">আপনার সেবায় আমরা সর্বক্ষণ সচেষ্ট</h1>
            <p className="text-lg mt-2">আমাদের হাসপাতাল সর্বোচ্চ মানের সেবা প্রদান করে।</p>
            <button className='bg-blue-900 px-6 py-3 mt-10 border-2 text-white self-end'>
              আরোও জানুন
            </button>
          </div>
        </div>
      </div>
      <div>
        <ul className='flex justify-end text-center items-center space-x-2 p-4'>
          <li className='border-2 bg-green-200 text-xl text-blue-900 h-40 w-60 p-4 rounded-4xl flex flex-col items-center justify-center'>
            <LocalHospitalIcon fontSize="large" className="mb-2"/> 
            ইমার্জেন্সি 911
          </li>
          <li className='border-2 bg-green-200 text-xl text-blue-900 h-40 w-60 p-4 rounded-4xl flex flex-col items-center justify-center'>
            <LocalShippingIcon fontSize="large" className="mb-2"/>
            এম্বুলেন্স সার্ভিস
          </li>
          <li className='border-2 bg-green-200 text-xl text-blue-900 h-40 w-60 p-4 rounded-4xl flex flex-col items-center justify-center'>
            <MedicationIcon fontSize="large" className="mb-2"/>
            মেডিসিন সার্ভিস
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Home
