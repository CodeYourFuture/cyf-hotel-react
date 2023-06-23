import React from "react";
import InfoCard from "./InfoCard";
import manchesterImg from "../../assets/manchester.webp";
import londonImg from "../../assets/london.jpeg";
import glassgowImg from "../../assets/glasgow.jpeg";
import classes from "./TouristInfoCards.module.css"

const TouristInfoCards = (props) => {
  return (
    <section className={classes["info_cards"]}>
      <InfoCard
        img={glassgowImg}
        cityTitle="Glasgow"
        cityDescription="Glasgow's vibrant culture, historic architecture, and lively music scene make it a captivating destination for tourists."
        cityWebsite="https://peoplemakeglasgow.com/"
      />
      <InfoCard
        img={manchesterImg}
        cityTitle="Manchester"
        cityDescription="With its rich cultural offerings, including galleries, theaters, and festivals, Manchester is a haven for art and entertainment lovers."
        cityWebsite="https://www.visitmanchester.com/"
      />
      <InfoCard
        img={londonImg}
        cityTitle="London"
        cityDescription="London is the capital city of the United Kingdom, attracting tourists with its iconic landmarks and vibrant multicultural atmosphere."
        cityWebsite="https://www.visitlondon.com/"
      />
    </section>
  );
};

export default TouristInfoCards;
