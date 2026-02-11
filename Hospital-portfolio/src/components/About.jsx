import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import PeopleIcon from '@mui/icons-material/People';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

function About() {
  return (
    <section className="bg-blue-900 min-h-screen flex flex-col justify-center items-end text-blue-900">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold text-white text-right mb-10">আমাদের সম্পর্কে তথ্য</h2>
        <div className="flex flex-col md:flex-row justify-end items-start space-x-0 md:space-x-6 space-y-4 md:space-y-0">
          <div className="border-2 border-blue-900 rounded-3xl p-6 w-[16rem] h-[12rem] flex flex-col items-center justify-center text-center bg-green-200 shadow-lg">
            <EmojiEventsIcon fontSize="large" className="text-blue-900 mb-2"/>
            <h3 className="text-2xl font-bold mb-1">50+</h3>
            <p className="text-sm text-gray-700">সাফল্য অর্জন</p>
          </div>
          <div className="border-2 border-blue-900 rounded-3xl p-6 w-[16rem] h-[12rem] flex flex-col items-center justify-center text-center bg-green-200 shadow-lg">
            <PriorityHighIcon fontSize="large" className="text-blue-900 mb-2"/>
            <h3 className="text-2xl font-bold mb-1">প্রথম</h3>
            <p className="text-sm text-gray-700">রোগীর সুস্থতা আমাদের অগ্রাধিকার</p>
          </div>
          <div className="border-2 border-blue-900 rounded-3xl p-6 w-[16rem] h-[12rem] flex flex-col items-center justify-center text-center bg-green-200 shadow-lg">
            <PeopleIcon fontSize="large" className="text-blue-900 mb-2"/>
            <h3 className="text-2xl font-bold mb-1">120+</h3>
            <p className="text-sm text-gray-700">ডাক্তার ও স্টাফ সংখ্যা</p>
          </div>
          <div className="border-2 border-blue-900 rounded-3xl p-6 w-[16rem] h-[12rem] flex flex-col items-center justify-center text-center bg-green-200 shadow-lg">
            <LocalHospitalIcon fontSize="large" className="text-blue-900 mb-2"/>
            <h3 className="text-2xl font-bold mb-1">5000+</h3>
            <p className="text-sm text-gray-700">সেবা পাওয়া রোগী</p>
          </div>
        </div>
        <div className='p-10 flex text-right justify-end'>
          <p className="text-lg text-white mb-4 leading-relaxed">
            আমাদের হাসপাতাল বাংলাদেশের আধুনিক চিকিৎসা সুবিধা প্রদান করে। অভিজ্ঞ ডাক্তার, উন্নত প্রযুক্তি এবং রোগীর সেবায় সর্বোচ্চ প্রতিশ্রুতি আমাদের মূল লক্ষ্য। আমরা জরুরি সেবা, বহির্বিভাগ, সার্জারি এবং ফার্মেসি সুবিধা দিয়ে থাকি।
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
