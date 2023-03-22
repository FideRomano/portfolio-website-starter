import React from "react";

// import woman image
import LottieAnimation from "./Lottie";

import { windowDimensions } from "./WindowsDimentions";

import { Link } from "react-scroll";

const Hero = () => {
  const vh = windowDimensions.windowHeight - windowDimensions.navHeight;
  return (
    <section
      id="home"
      style={{ minHeight: window.innerWidth > 640 ? `${vh}px` : "auto" }}
      className="flex h-[85vh] items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-xl text-accent mb-[22px]">Hola! Soy Fidel</p>
            <h1 className="text-4xl text-center leading-[44px] md:text-5xl lg:text-left md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Full stack <br />
              Web Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Desarrollo de aplicaciones eficientes y escalables.
            </p>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-windowDimensions.navScrolled}
              className="transition-all duration-300"
            >
              <button className="btn btn-md bg-accent hover:bg-accent-hover md-btn-lg">
                Trabaja conmigo
              </button>
            </Link>
          </div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-end items-center h-full opacity-90">
            <LottieAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
