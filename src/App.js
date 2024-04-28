import React, { useState, useEffect } from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";

import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  const [showContent, setShowContent] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };
  useEffect(() => {
    const handleScreenCapture = (event) => {
      event.preventDefault();
      setShowContent(false);
      // openModal();
    };
    document.addEventListener("keyup", handleScreenCapture);
    document.addEventListener("copy", handleScreenCapture);
    document.addEventListener("paste", handleScreenCapture);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    });
    window.addEventListener("blur", () => {
      setShowContent(false);
    });
    window.addEventListener("focus", () => {
      setShowContent(true);
    });

    return () => {
      document.removeEventListener("keyup", handleScreenCapture);
    };
  }, []);

  return (
    <>
      {showContent ? (
        <div>
          <Header />
          <Hero />

          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
          {/* <div style={{ height: "2000px", border: "3px solid blue" }}></div> */}
        </div>
      ) : (
        <div
          style={{ backgroundColor: "black", height: "100vh", width: "100vw" }}
        ></div>
      )}
    </>
  );
};

export default App;
