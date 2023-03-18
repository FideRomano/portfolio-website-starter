import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col lg:flex-row-reverse lg:place-content-between items-center lg:items-start text-center mb-10 p-1 lg:h-fit border-b border-gray-500 pb-10 "
    >
      <div className="lg:max-w-[45%] border-x-4 border-y-[15px] border-gray-200 rounded-2xl cursor-pointer relative group">
        <a href={item.href} target="_blank" rel="noreferrer">

        <img src={item.image} alt="" className="rounded-2xl transition-all duration-150 lg:group-hover:blur-sm lg:group-hover:opacity-75" />
        <h1 className='absolute opacity-0 lg:group-hover:opacity-100 transition-opacity duration-400 text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Visitar sitio web</h1>
        </a>
      </div>

      <div className="lg:w-[45%]">
        <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
        <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
        <p className="text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default Project;
