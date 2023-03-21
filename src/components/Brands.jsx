import React from "react";

// import brands data
import {brands} from '../data'

import { windowDimensions } from "./WindowsDimentions";


const Brands = () => {
  return <section id='home' style={{minHeight:`${windowDimensions.navHeight}px`}} className='bg-tertiary flex items-center'>
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