import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        
        <div>
          <h2 className="text-xl font-bold mb-4">Jatiya Kabi Kazi Nazrul Islam Hospital</h2>
          <p className="mb-2 font-semibold">To speak with Existing Patients Only:</p>
          <ul className="space-y-1 text-sm">
            <li><strong>Los Angeles:</strong> 213-250-4200</li>
            <li><strong>Van Nuys:</strong> 818-782-6600 ext 8360</li>
            <li><strong>Whittier:</strong> 562-698-0811 ext 12633 or 12533</li>
            <li><strong>Admissions:</strong> 213-202-6878</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li>Careers</li>
            <li>About Barlow</li>
            <li>Refer a Patient</li>
            <li>Donate</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

     
        <div>
          <h2 className="text-xl font-bold mb-4">More Info</h2>
          <ul className="space-y-1 text-sm">
            <li>Services</li>
            <li>Patients and Families</li>
            <li>Outcomes and Value</li>
            <li>Crisis Care</li>
            <li>Price Transparency</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-blue-800 py-4 text-center text-sm">
        © {new Date().getFullYear()} জাতীয় কবি কাজী নজরুল ইসলাম হাসপাতাল | সর্বস্বত্ব সংরক্ষিত | Trishal, Mymensingh
      </div>
    </footer>
  );
}

export default Footer;
