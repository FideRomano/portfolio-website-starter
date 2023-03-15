import React from "react";

// import skills data
import { skillsFront, skillsBack, skillsOther } from "../data";

import { windowDimensions } from "./WindowsDimentions";

const Skills = () => {
  const diference = windowDimensions.windowHeight - windowDimensions.navScrolled
  return (
    <section style={{minHeight: diference}} className="bg-tertiary flex items-center" id='skills'>
      <div className="container mx-auto  ">
        <h1 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-10">
          Skills
        </h1>
        <div className="rounded-lg bg-secondary mb-5 pt-4 pb-4">
          <h1 className="text-lg ml-5 mb-3">Front end</h1>
          <div className="grid grid-cols-8 md:grid-flow-row  ">
            {skillsFront.map((skill, index) => {
              return (
                <div
                  className="group flex items-center justify-center relative"
                  key={index}
                >
                  <img
                    className="cursor-pointer w-24 transition-all duration-100 ease-linear transform group-hover:scale-110"
                    src={skill.image}
                    alt=""
                  />

                  <span className="text-sm text-center text-white  bg-tertiary absolute top-1 opacity-0 lg:group-hover:opacity-100 md:text-lg px-2 rounded animate-bounce">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-lg bg-secondary mb-5 pt-4 pb-4">
          <h1 className="text-lg ml-5 mb-3">Back end</h1>
          <div className="grid grid-cols-8 md:grid-flow-row  ">
            {skillsBack.map((skill, index) => {
              return (
                <div
                  className="group flex items-center justify-center relative"
                  key={index}
                >
                  <img
                    className="cursor-pointer w-24 transition-all duration-100 ease-linear transform group-hover:scale-110"
                    src={skill.image}
                    alt=""
                  />

                  <span className="text-sm text-center text-white  bg-tertiary absolute top-1 opacity-0 lg:group-hover:opacity-100 md:text-lg px-2 rounded animate-bounce">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-lg bg-secondary mb-5 pt-4 pb-4">
          <h1 className="text-lg ml-5 mb-3">Programming Languages & tools</h1>
          <div className="grid grid-cols-8 md:grid-flow-row  ">
            {skillsOther.map((skill, index) => {
              return (
                <div
                  className="group flex items-center justify-center relative"
                  key={index}
                >
                  <img
                    className="cursor-pointer w-24 transition-all duration-100 ease-linear transform group-hover:scale-110"
                    src={skill.image}
                    alt=""
                  />

                  <span className="text-sm text-center text-white bg-tertiary absolute top-1 opacity-0 lg:group-hover:opacity-100 md:text-lg px-2 rounded animate-bounce">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
