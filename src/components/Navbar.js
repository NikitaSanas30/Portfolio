import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto bg-[#0b3d2e] text-white shadow-md rounded-4xl px-6">
        <div className="flex justify-between items-center py-2">
      
          <div className="flex items-center space-x-2">
            <img
              src="/images/NS_logo.jpg"
              alt="logo"
              className="w-12 h-12 rounded-full border-2 border-yellow-400"
            />
            <span className="text-lg font-bold text-yellow-400">Nikita</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-yellow-400 border-b-2 border-yellow-400 pb-1">
              Home
            </a>
            <a href="#" className="hover:text-yellow-400 transition">Services</a>
            <a href="#" className="hover:text-yellow-400 transition">Work</a>
            <a href="#" className="hover:text-yellow-400 transition">Projects</a>
            <a href="#" className="hover:text-yellow-400 transition">Blog</a>
            <a href="#" className="hover:text-yellow-400 transition">Testimonials</a>
          </div>
          <div className="hidden md:flex">
            <a
              href="#"
              className="px-5 py-2 rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0b3d2e] transition"
            >
              Connect
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0b3d2e] text-white px-6 pb-4 space-y-2">
          <a href="#" className="block text-yellow-400">Home</a>
          <a href="#" className="block hover:text-yellow-400">Services</a>
          <a href="#" className="block hover:text-yellow-400">Work</a>
          <a href="#" className="block hover:text-yellow-400">Projects</a>
          <a href="#" className="block hover:text-yellow-400">Blog</a>
          <a href="#" className="block hover:text-yellow-400">Testimonials</a>
          <a
            href="#"
            className="block text-center mt-2 px-4 py-2 rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0b3d2e] transition"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;