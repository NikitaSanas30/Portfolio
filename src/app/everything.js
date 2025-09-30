// Navbar code
// Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b3d2e] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/NS_logo.jpg"
              alt="logo"
              className="w-12 h-12 rounded-full border-2 border-yellow-400"
            />
            <span className="text-lg font-bold text-yellow-400">Nikita</span>
          </div>

          {/* Desktop Menu */}
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

          {/* Right - Connect Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="px-5 py-2 rounded-full border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-[#0b3d2e] transition"
            >
              Connect
            </a>
          </div>

          {/* Mobile Button */}
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

      {/* Mobile Menu */}
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


// main page.js
"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container bg-gradient-to-b from-gray-900 to-gray-800 ">
    // Inside your main-container
    <Navbar/>
<section className="bg-white text-gray-800 py-16 px-6 md:px-12 flex flex-col md:flex-row items-center">
  {/* Left Text */}
  <div className="flex-1 space-y-5">
    <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-sm">
      👋 Hello There!
    </span>
    <h1 className="text-4xl md:text-5xl font-bold leading-snug">
      I’m <span className="text-yellow-500">Nikita</span>, <br />
      Frontend Developer <br />
      Based in India.
    </h1>
    <p className="text-gray-600 max-w-md">
      An experienced Frontend Developer passionate about clean code, responsive design, and creating user-friendly digital experiences.
    </p>

    {/* Buttons */}
    <div className="flex space-x-4 pt-4">
      <a
        href="#"
        className="px-6 py-3 rounded-full bg-yellow-400 text-[#0b3d2e] font-semibold hover:bg-yellow-300"
      >
        View My Portfolio
      </a>
      <a
        href="#"
        className="px-6 py-3 rounded-full border-2 border-yellow-400 text-yellow-600 font-semibold hover:bg-yellow-400 hover:text-[#0b3d2e]"
      >
        Contact Me
      </a>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex-1 mt-10 md:mt-0 flex justify-center">
    <img
      src="/images/profile-img.jpg"
      alt="profile"
      className="w-[80%] md:w-[70%] object-cover rounded-tl-[6rem] rounded-bl-[6rem] rounded-tr-[0] rounded-br-[6rem] shadow-lg"
    />
  </div>
</section>

      {/* ================= About Section ================= */}
<section className="about-section bg-white text-gray-800">
  {/* Mobile View */}
  <div className="block md:hidden relative h-80 w-full bg-[url('/images/laptop-background.webp')] bg-cover bg-center">
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="relative z-10 text-white text-center h-full flex flex-col justify-center items-center px-6">
      <h2 className="font-['Montserrat'] text-3xl font-extrabold text-yellow-400 mb-4">
        Who I Am?
      </h2>
      <p className="font-['Inter'] text-gray-200 text-lg leading-relaxed max-w-md">
        As a <span className="text-yellow-400 font-semibold">Frontend Developer,</span>{" "}
        I’m passionate about building user-friendly interfaces that
        enhance the digital experience. My problem-solving skills and
        attention to detail drive me to create innovative web solutions.
      </p>
    </div>
  </div>

  {/* Desktop View */}
  <div className="hidden md:flex py-16 px-12 max-w-7xl mx-auto items-center gap-12">
    {/* Left Image */}
    <div className="flex-1 flex justify-center">
      <img
        src="/images/about-me.svg"
        alt="about-img"
        className="w-[80%] rounded-tl-[4rem] rounded-br-[4rem] shadow-lg"
      />
    </div>

    {/* Right Text */}
    <div className="flex-1">
      <h2 className="font-['Montserrat'] text-5xl font-extrabold text-[#0b3d2e] mb-6">
        Who I Am?
      </h2>
      <p className="font-['Inter'] text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
        As a <span className="text-yellow-500 font-semibold">Frontend Developer,</span>{" "}
        I’m passionate about building user-friendly interfaces that enhance
        the digital experience. With strong problem-solving skills and
        attention to detail, I focus on delivering{" "}
        <span className="text-[#0b3d2e] font-medium">clean, modern, and innovative solutions</span>.
      </p>
      <a
        href="#"
        className="px-6 py-3 rounded-full bg-yellow-400 text-[#0b3d2e] font-semibold hover:bg-yellow-300 transition"
      >
        Learn More
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
