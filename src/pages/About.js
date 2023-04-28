import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Modal from "../components/Modules";
const About = () => {
  return (
    <div>
      <Heading />
      <section className="about">
        <div className="who">
          <span>Who we are</span>
          <p>lorem lorem ipsum dolor sit amet, consectetur adip</p>
          <Modal />
        </div>
        <div className="why">
          <span>What can offer</span>
          <p> lorem ipsum dolor sit amet, consectetur adip lorem</p>
          <Modal />
        </div>
        <div className="what">
          <span>Why are we</span>
          <p> lorem ipsum dolor sit amet, consectetur adip lorem</p>
          <Modal />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
