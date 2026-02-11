import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_vtcc4sz",
      "template_hrquh9q",
      formData,
      "gmSxmptvOXZgfUuKK"
    ).then(() => {
      alert('Email Sent Successfully');
      setFormData({ name: "", email: "", message: "" });
    }).catch(() => {
      alert('Failed to send');
    });
  };

  return (
    <div className='bg-blue-900 min-h-screen flex items-center justify-center p-6'>
      <div className='bg-blue-800 rounded-xl shadow-lg w-full max-w-6xl p-8 flex flex-col md:flex-row gap-8'>
        
      
        <div className='flex-1'>
          <h1 className='text-4xl font-bold text-white mb-6 text-center md:text-left '>Send Email</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <label className='text-white font-semibold'>Name:</label>
            <input 
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-200'
              placeholder='Your Name'
            />

            <label className='text-white font-semibold'>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className='p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-200'
              placeholder='Your Email'
            />

            <label className='text-white font-semibold'>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className='p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-200'
              placeholder='Your Message'
            />

            <button
              type="submit"
              className='bg-green-400 text-black font-bold py-3 rounded-xl hover:bg-green-500 transition-colors mt-4'
            >
              Send Message
            </button>
          </form>
        </div>

      
        <div className='flex-1 text-white flex flex-col justify-center gap-4 p-4 bg-blue-800 rounded-lg'>
          <h2 className='text-3xl font-bold mb-4'>Contact Info</h2>
          <p className='text-lg'><strong>Location:</strong> Jatiya Kabi Kazi Nazrul Islam Hospital, trishal, Mymensing</p>
          <p className='text-lg'><strong>Phone:</strong> +123 456 7890</p>
          <p className='text-lg'><strong>Email:</strong> info@hospital.com</p>
          <p className='text-lg'><strong>Working Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM</p>
           <iframe
      title="hospital-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.2085646436976!2d90.37261777515475!3d24.581997378112092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756417d5fe9a2a3%3A0xc4807b9570837651!2sJatiya%20Kabi%20Kazi%20Nazrul%20Islam%20University!5e0!3m2!1sen!2sbd!4v1770822216086!5m2!1sen!2sbd"
      width="100%"
      height="100%"
      className='rounded-lg'
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
