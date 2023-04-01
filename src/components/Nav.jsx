import React from "react";

// import navigation data
import { navigation } from "../data";

// import link
import { Link } from "react-scroll";

import { windowDimensions } from "./WindowsDimentions";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-4 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer "
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-windowDimensions.navScrolled}
                className="transition-all duration-200 p-3"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <a
        className="text-white hover:text-accent cursor-pointer transition-all duration-200 px-3"
          href="https://docs.google.com/document/d/12aM-wGNlq6KT7L12TKPwU5KuFaAnRRgTp-H6-DTox_k/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Curriculum Vitae
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
