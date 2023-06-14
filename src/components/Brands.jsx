import React from "react";
// import brands data
import {brands} from '../data'

const Brands = () => {
  return <section id='home' className='bg-tertiary w-full flex items-center border-t border-slate-400'>
    <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly '>
        {brands.map((brand,index)=>{
          const {href} = brand
            return <div key={index}>
              <a href={href} target='_blank' rel="noreferrer">
                <img src={brand.img} alt="" />

              </a>
            </div>
        })}
    </div>
  </section>;
};

export default Brands;