import React from "react";
import EachCard from "./eachCard";

const TouristInfoCards = () => {
  const Countrydatas = [
    {
      name: "Glasgow",
      cardText:
        "Glasgow Life delivers services on behalf of Glasgow City Council to both citizens and visitors to the city, providing opportunities through culture, sport and learning. Find out all the essential information for travelling to Glasgow for a holiday or vacation by rail, air, car, or by sea",
      image:
        "https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "London",
      cardText:
        "Whether you are visiting London for the first time or coming back for a special occasion, you’ll discover a city full of unforgettable landmarks and exciting things to do. There are London attractions waiting for you around every corner... ",
      image:
        "https://images.unsplash.com/photo-1523289607602-d9abf1bbd7dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Manchester",
      cardText:
        "Manchester city centre is jam-packed with unique and eclectic restaurants,bars,museums,hotels and places to stay whilst the surrounding Greater Manchester boroughs offer a patch-work of visitor experiences including quaint market towns,beautiful green spaces and ... ",
      image:
        "https://images.unsplash.com/photo-1551983627-d46f03818923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ];
  return (
    <div className="d-lg-flex flex-lg-row mt-2">
      <EachCard datas={Countrydatas} />
    </div>
  );
};

export default TouristInfoCards;
