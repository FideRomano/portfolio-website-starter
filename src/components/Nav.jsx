import React from "react";
// import navigation data
import { navigation } from "../data";
// import link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-4 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-accent hover:text-accent-hover cursor-pointer "
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={900}
                className="transition-all duration-200 p-3 relative before:content-[''] before:absolute before:bottom-1 before:left-0 before:h-[2px] before:w-0 before:rounded-md before:transition-all before:bg-accent dark:before:bg-dark-accent hover:before:w-full"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <a
          className="text-accent hover:text-accent cursor-pointer transition-all duration-200 px-3"
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
