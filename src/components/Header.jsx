import React, { useState, useEffect } from "react";

// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { windowDimensions } from "./WindowsDimentions";
import Logo from "../assets/img/isotipo-httpfido-blanco-sin-fondo.svg";

const Header = () => {
  const [bg, setBg] = useState(false);
  const scrolled = windowDimensions.navScrolled;
  const nav = windowDimensions.navHeight;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      style={bg ? { minHeight: `${scrolled}px` } : { minHeight: `${nav}px` }}
      className={`${
        bg ? "bg-shadow" : "bg-none"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <a href="/">
          <img src={Logo} alt="" className="h-10 lg:h-11" />
        </a>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="hidden lg:block">
          <Socials />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
