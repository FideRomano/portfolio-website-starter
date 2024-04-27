import React from "react";
import LottieAnimation from "./Lottie";
import { TypeAnimation } from "react-type-animation";
import Brands from "./Brands";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-between min-h-screen h-screen items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat overflow-hidden transition-all duration-100"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-xl text-accent mb-[22px]">Hola! Soy Fidel</p>
            <h1 className="text-4xl text-center leading-[44px] md:text-5xl lg:text-left md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              <TypeAnimation
                sequence={["Frontend", 2000, "Backend", 2000, "Mobile", 2000]}
                cursor={false}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <h1 className="text-4xl text-center leading-[44px] md:text-5xl lg:text-left md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Developer
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Desarrollo de aplicaciones eficientes y escalables.
            </p>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={900}
              className="transition-all duration-300"
            >
              <button className="btn btn-md rounded-full md:rounded-sm  bg-accent hover:bg-accent-hover md-btn-lg">
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
      <Brands />
    </section>
  );
};

export default Hero;
