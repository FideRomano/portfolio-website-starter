import React, { useState } from "react";
import { useThemeContext } from "../context/themeContext";
import { social } from "../data";
import ReactSwitch from "react-switch";

const Socials = () => {
  const [checked, setChecked] = useState(false);
  const { setTheme } = useThemeContext();
  const handleSwitchTheme = (nextChecked) => {
    setTheme((state) => (state === "dark" ? "light" : "dark"));
    setChecked(nextChecked);
  };
  return (
    <ul className="flex space-x-6">
      {/* <ReactSwitch
        checked={checked}
        onChange={handleSwitchTheme}
        onColor="#925a2b"
        onHandleColor="#c2793c"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={16}
        width={40}
        className="react-switch"
        id="material-switch"
      /> */}
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-gray-100 w-12 lg:w-auto h-12 lg:text-accent dark:lg:text-dark-accent border lg:border-none rounded transition-all duration-100"
            key={index}
          >
            <a
              className="text-3xl lg:text-base"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
