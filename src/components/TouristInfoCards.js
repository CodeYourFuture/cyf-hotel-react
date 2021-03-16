import React from "react";

const cards = [
  {
    city: "Glasgow",
    link: "https://peoplemakeglasgow.com/",
    img:
      "https://cdn.pixabay.com/photo/2015/09/27/17/03/secc-961001_960_720.jpg"
  },
  {
    city: "Manchester",
    link: "https://www.visitmanchester.com/",
    img:
      "https://cdn.pixabay.com/photo/2014/02/09/23/25/manchester-263210_960_720.jpg"
  },
  {
    city: "London",
    link: "https://visitlondon.com/",
    img:
      "https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg"
  }
];

const TouristInfoCards = () => {
  console.log(cards);
  return (
    <div className="card">
      {cards.map(elem => (
        <div className="card-body">
          <img src={elem.img} alt={elem.city} className="card-img-top" />
          <a href={elem.link} target="_blank" className="btn btn-primary">
            {elem.city};
          </a>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
