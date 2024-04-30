import React from "react";

// import social data
import { social } from "../data";

// import logo
import Logo from "../assets/img/isologotipo-httpfido-horizontal-sin-fondo.png";

// import icon
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-dark-tertiary ">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row mx-auto space-y-6 lg:space-y-0 items-center justify-between py-12">
          {/* <div className="flex flex-col md:flex-row w-full justify-center md:justify-between border"> */}

          <div className="w-auto">
            <img
              src={Logo}
              alt=""
              className="h-[80px] lg:h-[100px] mb-10 lg:mb-0"
            />
          </div>
          <div className="flex lg:w-1/2">
            <div className="flex flex-col mx-5 md:mx-[100px]">
              <h1 className="mb-4 text-xl text-white">Redes</h1>
              <div className="flex-col space-x-6 items-center justify-center">
                {social.map((item, index) => {
                  const { href, icon, name } = item;
                  return (
                    <a href={href} key={index} target="_blank" rel="noreferrer">
                      <div className="flex items-center text-gray-300 text-sm">
                        <div className="mr-2">{icon}</div>
                        <p>{name}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
              {/* </div> */}
            </div>
            <div className="flex flex-col mx-5 md:mx-10">
              <h1 className="mb-4 text-xl text-white">Contacto</h1>
              <a
                href="https://wa.me/5491127191198"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-gray-300 text-sm"
              >
                <ImWhatsapp className="mr-2" />
                <p>WhatsApp</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white w-full border-t border-gray-400 px-2 py-4">
        © 2022 | HTTP FIDO Desarrollo Web | Derechos Reservados.
      </p>
    </footer>
  );
};

export default Footer;
