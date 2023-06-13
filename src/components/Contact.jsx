import React from "react";

// import contact data
import { contact } from "../data";

// import emailjs
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kuzc8kh",
        "template_8n8i9ef",
        e.target,
        "jWUavUhEUpUpkgIN7"
      )
      .then((res) => {
        alert("¡Mensaje enviado!");
        console.log(res);
      });
  };

  return (
    <section id="contact" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-1/2  before:-right-1/2  before:hidden before:lg:block">
            Trabaja conmigo
          </h2>
          <p className="subtitle">
            La comunicación constante es muy importante para mi, asi que
            mantengamonos en contacto!
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2 ">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-10 flex items-start justify-center mt-2 lg:mb-0 text-2xl  -green-400 max-w-[40px]">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className="space-y-8 w-full max-w-[780px]" onSubmit={sendEmail}>
            <div className="flex gap-8">
              <input
                type="text"
                className="input"
                placeholder="Tu nombre"
                id="nombre"
                name="nombre"
              />
              <input
                type="email"
                className="input"
                placeholder="Tu email"
                id="email"
                name="email"
              />
            </div>
            <input
              type="text"
              className="input"
              placeholder="Asunto"
              id="asunto"
              name="asunto"
            />
            <textarea
              className="textarea"
              placeholder="Tu mensaje"
              id="mensaje"
              name="mensaje"
            ></textarea>
            <button
              className="btn btn-lg rounded-full md:rounded-sm w-full md:w-auto bg-accent hover:bg-accent-hover"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
