import React from "react";
import Card from "./Card";
// import CityInfo from "./data/cityInfo.json";

const TouristInfoCards = () => {
  return (
    <div>
      <Card
        cityInfo={[
          {
            name: "Glasgow",
            link: "https://peoplemakeglasgow.com",
            image:
              "https://glasgowtourismandvisitorplan.com/media/1031/glasgowlife_58440115402.jpg",
            description:
              "Take your time while discovering the many different sides of Glassgo from its top Instagrammable spots to it's tucked away hidden gems! Glasgow has plenty for you to uncover."
          }
        ]}
      />
      <Card
        cityInfo={[
          {
            name: "Manchester",
            link: "https://visitmanchester.com",
            image:
              "https://d3rcx32iafnn0o.cloudfront.net/Pictures/2000x2000fit/1/1/7/1883117_manchestertownhall_purcell_77163.jpg",
            description:
              "Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed."
          }
        ]}
      />
      <Card
        cityInfo={[
          {
            name: "London",
            link: "https://visitlondon.com",
            image:
              "https://lp-cms-production.imgix.net/2019-06/55425108.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
            description:
              "One of the world’s most visited cities, England’s buzzing capital is well worth the visit and has so much to offer, from magnificent history and culture to cutting-edge fashion and food."
          }
        ]}
      />
    </div>
  );
};
export default TouristInfoCards;
