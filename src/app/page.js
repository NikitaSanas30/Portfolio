"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container ">
      <section className="main-section ">
        <div className="navbar pt-2 "> <Navbar /></div>
       
        <div className=" h-screen flex flex-col  justify-center items-center md:flex-row w-full bg-white text-black">
          <div className="main-text-div flex md:justify-center w-md-1/2 w-full px-9 py-9">
            <div className="text-content flex flex-col justify-start items-start">
              <span className=" px-3 text-sm border-amber-600 bg-[#ff000033] rounded-3xl"><h2 className="py-1">👋 Hello, I’m Nikita</h2></span>
              <h1 className="font-['Montserrat'] hover:text-yellow-600 transition text-yellow-400 text-3xl md:text-6xl font-extrabold leading-8 md:leading-13">
                Frontend Developer
              </h1>
              <h3 className="font-['Montserrat'] text-3xl text-black font-semibold">
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
        className="px-6 py-2 rounded-full border-yellow-400 bg-[#0b3d2e] text-[yellow] font-semibold hover:bg-yellow-300 hover:text-[#0b3d2e]"
      >
        Download CV
      </a>
      <a
        href="#"
        className="px-6 py-2 rounded-full border-yellow-400 bg-[#0b3d2e] text-[yellow] font-semibold hover:bg-yellow-300 hover:text-[#0b3d2e]"
      >
        Contact Me
      </a>
    </div>
            </div>
          </div>
          {/* <div className="main-img-div flex justify-end md:justify-center w-1/2 items-end md:items-center">
            <div className="profile-img flex pt-16 justify-end md:justify-center">
              <img
                src="/images/profile-img.jpg"
                alt="profile-img"
                className="md:w-[90%] md:h-[80%] md:rounded-b-[7rem] md:rounded-tl-[9rem]" 
              />
            </div>
          </div> */}
          {/* <div className="main-img-div w-full h-full">
            <div className="profile-img  w-full h-full flex justify-end">
              <img
                src="/images/profile-img.jpg"
                alt="profile-img"
                className="w-[85%] md:w-[100%] h-[74%] md:h-[90%]  rounded-tl-[30rem] sm:rounded-bl-[30rem] md:rounded-tl-[50rem] md:rounded-bl-none mt-7.5 md:mt-0"
              />
            </div>
          </div> */}
           <div className="main-img-div w-full h-full">
  <div className="profile-img w-full h-full flex ">
    <img
      src="/images/profile-img.jpg"
      alt="profile-img"
      className="
        w-[85%] md:w-[100%] 
        h-[74%] md:h-[90%] 
        object-cover
         
         rounded-tl-[45rem]
        rounded-tr-[0] 
        rounded-bl-[0] 
        rounded-br-[0]

        md:rounded-tl-[45rem]
        md:rounded-tr-[0] 
        md:rounded-bl-[0] 
        md:rounded-br-[0]
      "
    />
  </div>
</div>

        </div>
      </section>
      <section className="about-section ">
        {/* Mobile view */}
        <div class="about-mobile-container  block md:hidden relative h-64 w-full bg-[url('/images/laptop-background.webp')] bg-cover bg-center bg-fixed">
          <div class=" bg-white opacity-50 h-64 w-full">
          <div className="about-text text-black text-center h-64 w-full flex flex-col justify-center items-center">
            <h2 className="font-['Montserrat'] text-3xl md:text-6xl font-extrabold leading-8 md:leading-13">
              Who I Am?
            </h2>
            <p className="font-['Inter'] text-black-400 mt-2 max-w-xl text-1xl md:text-3xl">
              As a <span className="text-yellow-600">Frontend Developer,</span>{" "}
              I'm passionate about building user friendly interfaces that
              enhance the digital experience. My problem-solving skills and
              attention to detail drive me to innovative web slutions.{" "}
            </p>
          </div>
          </div>
        </div>
{/* 
        <div className="about-mobile-container bg-[url('/images/about-me.svg')] bg-cover bg-center h-64 w-full p-12">
          <div className="about-text text-white text-center">
            <h2 className="font-['Montserrat'] text-3xl md:text-6xl font-extrabold leading-8 md:leading-13">
              Who I Am?
            </h2>
            <p className="font-['Inter'] text-gray-400 mt-2 max-w-xl text-1xl md:text-3xl">
              As a <span className="text-pink-600">Frontend Developer,</span>{" "}
              I'm passionate about building user friendly interfaces that
              enhance the digital experience. My problem-solving skills and
              attention to detail drive me to innovative web slutions.{" "}
            </p>
          </div> */}
        {/* </div> */}

        {/* desktop-view */}
        <div className="hidden md:block">
        <div className="about-container flex py-10 justify-around items-center gap-5 px-12">
          <div className="about-img-div">
            <div className="about-img">
              <img
                src="/images/about-me.svg"
                className="md:w-[80%]"
                alt="about-img"
              />
            </div>
          </div>
          <div className="about-text text-white">
            <h2 className="font-['Montserrat'] text-3xl md:text-6xl font-extrabold leading-8 md:leading-13">
              Who I Am?
            </h2>
            <p className="font-['Inter'] text-gray-400 mt-2 max-w-xl text-1xl md:text-3xl">
              As a <span className="text-pink-600">Frontend Developer,</span>{" "}
              I'm passionate about building user friendly interfaces that
              enhance the digital experience. My problem-solving skills and
              attention to detail drive me to innovative web slutions.{" "}
            </p>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
