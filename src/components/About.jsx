import React from "react";

// import image
import Image from "../assets/img/foto-cv2-sin-fondo.png";
import { windowDimensions } from "./WindowsDimentions";
import { Link } from "react-scroll";

const About = () => {
  const vh = windowDimensions.windowHeight - windowDimensions.navScrolled;
  return (
    <section
      className="section bg-secondary flex items-center min-h-screen"
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24" >
          <img
            className="object-cover h-full md:mx-auto md:h-1/2 md:w-1/2 lg:w-1/3 lg:mx-0 rounded-3xl bg-tertiary"
            src={Image}
            alt=""
            data-aos="fade-zoom-in"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-offset="200"
          />
          <div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            data-aos="fade-zoom-in"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-offset="200"
          >
            <div className="flex flex-col" >
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before::opacity-40 xl:mt-[2.5rem] before:-top-[2rem] before:hidden before:lg:block">
                Fidel Romano
              </h2>
              <p className="mb-4 text-accent">Freelance Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Soy Desarrollador de Software Full Stack con experiencia en la creación de
                aplicaciones web eficientes y escalables, desarrolladas en el stack PERN. Trabajo
                con React, Redux, PostgreSQL, Express, Node js, HTML, CSS, Express, JavaScript y
                Sequelize.
                <br />
                <br />
                Cuento con cualidades de trabajo en equipo y de comunicación efectiva, apoyandome en
                el uso de metodologias agiles, lo cual me convierte en un profesional organizado y
                eficaz.
              </p>
            </div>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-windowDimensions.navScrolled}
              className="transition-all duration-300"
            >
              <button className="btn btn-md bg-accent hover:bg-accent-hover md-btn-lg">
                Trabaja conmigo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
