import React from "react";

import Card from "./Card";

const cityDetails = {
  glasow: {
    title: "Glasow",
    link: "peoplemakeglasgow.com",
    desc: "some thing something else",
    imgSrc: ""
  },
  manchester: {
    title: "Manchester",
    link: "visitmanchester.com",
    desc: "some thing something else",
    imgSrc: ""
  },
  london: {
    title: "London",
    link: "visitlondon.com",
    desc: "some thing something else",
    imgSrc: ""
  }
};

const TouristInfoCards = () => {
  return (
    <>
      <Card {...cityDetails.glasow} />
      <Card {...cityDetails.manchester} />
      <Card {...cityDetails.london} />
    </>
  );
};

export default TouristInfoCards;
