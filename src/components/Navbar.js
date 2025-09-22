import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 ">
      <div className="max-w-7xl mx-auto position-sticky">
        <div className="flex justify-between">
     
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <a
                href="#"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <img src="/images/NS_logo.jpg" alt="logo" className="w-12 h-12 rounded-full"/>
                {/* <svg
                  className="h-6 w-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg> */}
                {/* <span className="font-bold">Better Dev</span> */}
              </a>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                About
              </a>
               <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Project
              </a>
               <a
                href="#"
                className="py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right section - Login/Signup */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
              Download CV
            </a>
            <a
              href="#"
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Connect
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu md:hidden ">
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 border-b-gray-600 h-8"
          >
           Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 border-b-gray-600 h-8"
          >
           About
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 border-b-gray-600 h-8"
          >
           Project
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200 border-b-gray-600 h-8"
          >
           Contact
          </a>
         
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
