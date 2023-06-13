import React from "react";
import Hamster from "./Hamster/Hamster";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col lg:flex-row-reverse lg:place-content-between items-center lg:items-start text-center mb-10 p-1 lg:h-fit border-b border-gray-400 pb-10 "
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="100"
      data-aos-duration="400"
      data-aos-once="true">
      <div className="lg:max-w-[45%] border-x-4 border-y-[15px] border-gray-200 rounded-2xl cursor-pointer relative group">
        <a href={item.href} target="_blank" rel="noreferrer">
          {item.description === "Proximamente" && <Hamster />}
          <img
            src={item.image}
            alt=""
            className={item.description !== "Proximamente" &&"transition-all duration-150 lg:group-hover:blur-sm lg:group-hover:opacity-60"}
          />
          {item.description !== "Proximamente" && (
            <h1 className="absolute opacity-0 lg:group-hover:opacity-100 transition-opacity duration-400 text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Ver demo
            </h1>
          )}
        </a>
      </div>

      <div className="lg:w-[45%]">
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
        <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
        <p className="text-sm">{item.description}</p>
        <div className="flex justify-center items-center mt-10">
          {item.links?.map((link, index) => {
            return (
              <a href={link.href} target="_blank" rel="noreferrer">
                <button
                  key={index}
                  className="appearance-none bg-transparent border border-gray-100 box-border text-gray-100 cursor-pointer inline-block font-Roobert font-medium text-base leading-normal my-0 mx-[20px] min-h-12 min-w-0 outline-none px-5 py-4 text-center no-underline transition-all duration-300 ease-cubic-bezier will-change-transform hover:text-primary hover:bg-gray-100 hover:shadow-md active:shadow-none active:translate-y-0 rounded-lg"
                >
                  {link.icon}
                </button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
