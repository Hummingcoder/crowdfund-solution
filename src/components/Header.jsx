import React, { useState } from "react";

const Header = () => {
  const [showNavSection, setshowNavSection] = useState(false);
  return (
    <header className="relative w-full h-[360px]  md:h-[426px] bg-[#00000056] font-commissioner">
      <img
        src="./images/image-hero-mobile.jpg"
        alt="hero-img-mobile"
        className="absolute block md:hidden w-[100%] h-[100%]  object-cover z-[-1] object-top"
      />
      <img
        src="./images/image-hero-desktop.jpg"
        alt="hero-img-mobile"
        className="absolute hidden md:block w-[100%]  object-cover h-[100%] z-[-1] object-center"
      />
      <section className="w-full p-6 flex justify-between items-center max-w-[1240px] mx-auto">
        <img src="./images/logo.svg" alt="logo" />
        <button
          onClick={(e) => setshowNavSection(!showNavSection)}
          className="absolute right-6 z-[999] md:hidden"
        >
          <img
            src={
              showNavSection
                ? "./images/icon-close-menu.svg"
                : "./images/icon-hamburger.svg"
            }
            alt="hamburger-icon"
            className="z-[99]"
          />
        </button>
        <div
          className={`w-[100vw]  absolute h-screen bg-[#0000007b] z-[9] left-0 top-0 ${
            showNavSection ? "block opacity-100 md:hidden" : "opacity-0 hidden"
          }`}
        ></div>
        <section
          className={`absolute md:relative  text-neutral-black md:text-white bg-white  md:w-fit md:bg-transparent md:px-6 md:min-w-fit  left-[50%] translate-x-[-50%] top-[80px] flex flex-col md:flex-row duration-300 md:justify-end md:left-auto md:top-auto md:translate-x-0 rounded-lg w-[90%] overflow-hidden z-20 ${
            showNavSection ? " h-[200px] md:h-fit" : "md:h-fit h-0"
          } md:gap-8`}
        >
          <a
            className="w-full hover:text-cyan-moderate hover:bg-neutral-lightGray  md:px-2 md:py-1/2 rounded-xl  md:w-fit h-[100%] flex items-center md:text-lg pl-6  font-semibold"
            href=""
          >
            About
          </a>
          <a
            className="w-full hover:text-cyan-moderate hover:bg-neutral-lightGray  md:px-2 md:py-1/2 rounded-xl  md:w-fit h-[100%] flex items-center md:text-lg pl-6  font-semibold"
            href=""
          >
            Discover
          </a>
          <a
            className="w-full hover:text-cyan-moderate hover:bg-neutral-lightGray  md:px-2 md:py-1/2 rounded-xl  md:w-fit h-[100%] flex items-center md:text-lg pl-6  font-semibold"
            href=""
          >
            Get Started
          </a>
        </section>
      </section>
    </header>
  );
};

export default Header;
