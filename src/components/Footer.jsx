import React from 'react';

// import social data
import { social} from '../data'

// import logo
import Logo from '../assets/img/foto-cv2-fondo-azul.png' 

const Footer = () => {
    return <footer className='bg-tertiary py-12'>
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                <div className="flex space-x-6 items-center justify-center">
                    {social.map((item,index)=>{
                        const {href, icon} = item
                        return <a href={href} key={index} className='text-base text-accent' target='_blank' rel='noreferrer'>{icon}</a>
                    })}
                </div>
                <div>
                    {/* <img src={Logo} alt="" /> */}
                </div>
                <p>&copy; 2023 Http Fido. All rights reserved.</p>
            </div>
        </div>
     </footer>
};

export default Footer