import React, { useState } from "react";

const CreateAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Cardiology",
    appointmentDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serial = Math.floor(Math.random() * 1000) + 1;

    alert(
      `Appointment Booked!\n\nName: ${formData.name}\nEmail: ${formData.email}\nDepartment: ${formData.department}\nDate: ${formData.appointmentDate}\nSerial Number: ${serial}`
    );


    setFormData({
      name: "",
      email: "",
      department: "Cardiology",
      appointmentDate: "",
    });
  };

  return (
    <div className="bg-blue-950 min-h-screen flex items-center justify-center p-6">
      <div className="bg-blue-800 rounded-xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Book Appointment
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-white font-semibold">Name:</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-200"
          />

          <label className="text-white font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400   bg-green-200"
          />

          <label className="text-white font-semibold">Department:</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400  bg-green-200"
          >
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Emergency</option>
            <option>Pediatric</option>
            <option>Gynecology</option>
          </select>

          <label className="text-white font-semibold">Appointment Date:</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
            className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400  bg-green-200"
          />

          <button
            type="submit"
            className="bg-green-400 text-black font-bold py-3 rounded-xl hover:bg-green-500 transition-colors mt-4"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointment;
