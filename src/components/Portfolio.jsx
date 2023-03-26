import React from 'react';

// import components
import Projects from './Projects'

const Portfolio = () => {
    return <section id='portfolio' className='section bg-primary'>
        <div className="container mx-auto">
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2  before:-right-1/2  before:hidden before:lg:block'>Mis ultimos trabajos
                </h2>
                {/* <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum architecto iste laudantium aliquam commodi, porro, eveniet nobis atque est alias modi ut laborum expedita quisquam inventore quaerat sunt. Quod, reiciendis!</p> */}
            </div>
            <Projects/>
        </div>
     </section>
};

export default Portfolio