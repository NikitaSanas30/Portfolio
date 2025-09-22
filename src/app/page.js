"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main-container mayur bg-gradient-to-b from-gray-900 to-gray-800">
      <section className="main-section ">
        <Navbar />
        <div className="container h-screen flex flex-col justify-center items-center md:flex-row mx-auto  bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="main-text-div flex justify-center w-1/2">
            <div className="text-content flex flex-col justify-start items-start">
              <h2 className="text-lg mb-2">👋 Hello, I’m Nikita</h2>
              <h1 className="font-['Montserrat'] text-6xl font-extrabold leading-13">
                Frontend Developer
              </h1>
              <h3 className="font-['Montserrat'] text-3xl text-gray-200 font-semibold">
                Crafting digital experiences
              </h3>
              <p className="font-['Inter'] text-gray-400 mt-2 max-w-xl">
                Design & build modern, modern, responsive, and user-friendly web
                applications with a passion for clean code and user centered
                design.
              </p>
              <div className="relative inline-flex items-center justify-center gap-4 group my-7">
                <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  role="button"
                  className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  title="payment"
                  href="#"
                >
                  View Projects
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    height="10"
                    width="10"
                    fill="none"
                    className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                  >
                    <path
                      d="M0 5h7"
                      className="transition opacity-0 group-hover:opacity-100"
                    ></path>
                    <path
                      d="M1 1l4 4-4 4"
                      className="transition group-hover:translate-x-[3px]"
                    ></path>
                  </svg>
                </a>
                 <a
                  role="button"
                  className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                  title="payment"
                  href="#"
                >
                  Contact Me
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    height="10"
                    width="10"
                    fill="none"
                    className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                  >
                    <path
                      d="M0 5h7"
                      className="transition opacity-0 group-hover:opacity-100"
                    ></path>
                    <path
                      d="M1 1l4 4-4 4"
                      className="transition group-hover:translate-x-[3px]"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="main-img-div flex justify-center w-1/2 items-center h-full">
            <div className="profile-img flex pt-16 justify-center h-full">
              <img
                src="/images/NS_logo.jpg"
                alt="profile-img"
                className="w-[80%] h-[75%]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

//  <h1 className="font-['Montserrat'] text-5xl font-extrabold leading-13">Frontend Developer Crafting digital experiences</h1>
//           <p className="font-['Inter'] text-gray-600 mt-2 max-w-xl">Design & build modern, modern, responsive, and user-friendly<br></br> web applications with a passion for clean code and user centered design.</p>
