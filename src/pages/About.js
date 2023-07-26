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
          <p>
            Experience the best of your destination, with attractions, tours,
            activities and more
          </p>
          <Modal />
        </div>
        <div className="why">
          <span>What can offer</span>
          <p>Find the perfect holiday rental for your trip</p>
          <Modal />
        </div>
        <div className="what">
          <span>Why are we</span>
          <p>
            {" "}
            With instant and flexible booking options on holiday homes, villas,
            apartments and more
          </p>
          <Modal />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
