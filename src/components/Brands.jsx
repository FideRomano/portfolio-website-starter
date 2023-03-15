import React from "react";

// import brands data
import {brands} from '../data'

import { windowDimensions } from "./WindowsDimentions";


const Brands = () => {
  return <section style={{minHeight:`${windowDimensions.navHeight}px`}} className='bg-tertiary flex items-center'>
    <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        {brands.map((brand,index)=>{
            return <div key={index}>
                <img src={brand.img} alt="" />
            </div>
        })}
    </div>
  </section>;
};

export default Brands;