"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container mx-auto max-w-7xl">
      <section className="header-section">
          <div className="container navbar pt-2 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"> <Navbar /></div>
        
        <div className="container min-h-max px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl flex flex-col  justify-center items-center md:mt-20 md:pb-12 md:flex-row w-full bg-white text-black">
          <div className="main-text-div flex md:justify-start items-center w-md-1/2 w-full px-9 py-9">
            <div className="text-content flex flex-col justify-start items-center md:items-start">
              <span className=" px-3 mb-1 text-sm border-amber-600 bg-[#ff000033] rounded-3xl"><h2 className="py-1">👋 Hello, I’m Nikita</h2></span>
              <h1 className="font-['Montserrat'] hover:text-yellow-400 transition text-yellow-600 text-3xl md:text-6xl font-extrabold leading-8 md:leading-13">
                Frontend Developer
              </h1>
              <h3 className="font-['Montserrat'] text-3xl text-[#0b3d2e] font-semibold">
                Crafting digital experiences
              </h3>
              <p className="font-['Inter'] text-black mt-2 max-w-xl">
                Design & build modern, modern, responsive, and user-friendly web
                applications with a passion for clean code and user centered
                design.
              </p>
               <div className="flex space-x-4 pt-4">
      <a
        href="#"
        className="px-6 py-2 rounded-full border-2 border-yellow-200 bg-[#0b3d2e] text-[yellow] font-semibold hover:bg-yellow-300 hover:text-[#0b3d2e] hover:border-2 hover:border-green-900"
      >
        Download CV
      </a>
      <a
        href="#"
        className="px-6 py-2 rounded-full border-2 border-yellow-200 bg-[#0b3d2e] text-[yellow] font-semibold hover:bg-yellow-300 hover:text-[#0b3d2e] hover:border-2 hover:border-green-900"
      >
        Contact Me
      </a>
    </div>
            </div>
          </div>
          <div className="main-img-div flex px-4  lg:px-8  items-center md:items-center w-full h-full">
            <div className="profile-img w-full h-full">
              <img
                src="/images/profile-img.jpg"
                alt="profile-img"
                className="h-[400px] w-full  rounded-b-[7rem] rounded-tl-[9rem]
                " 
              />
            </div>
          </div> 
        </div>;
      </section>

      <section className="about-section bg-white text-gray-800">
{/* mobile */}
  <div className="block md:hidden relative h-80 w-full bg-[url('/images/laptop-background.webp')] bg-cover bg-center">
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

  {/* desktop */}
  <div className="hidden md:flex py-16 px-12 max-w-7xl mx-auto items-center gap-12">
    <div className="about-img-div flex-1 flex justify-center">
      <img
        src="/images/about-me.svg"
        alt="about-img"
        className="w-[80%] rounded-tl-[4rem] rounded-br-[4rem] shadow-lg"
      />
    </div>
    <div className="about-content-div flex-1">
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
