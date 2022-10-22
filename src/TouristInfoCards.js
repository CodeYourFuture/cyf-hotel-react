import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="all-cards-wrapper">
      {destinations.map((destination, index) => (
        <div className="card" key={index}>
          <img src={destination.img} className="card-img" />
          <div className="card-body">
            <h5>{destination.name}</h5>
            <p>{destination.description}</p>
            <a href={destination.url}>Go Somewhere in {destination.name}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

const destinations = [
  {
    name: "Glasgow",
    url: "https://peoplemakeglasgow.com/good-to-know/useful-information",
    img:
      "https://media.istockphoto.com/photos/glasgow-city-skyline-from-kelvingrove-park-picture-id1211433221?b=1&k=20&m=1211433221&s=170667a&w=0&h=DDIoxkovMhAmgrh1yQGomS_u_aXwFFsh5haqBZxCTPs=",
    description:
      "Glasgow is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe."
  },
  {
    name: "Manchester",
    url:
      "https://www.visitmanchester.com/visitor-information/manchester-visitor-information-centre-p23991",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXjkg2DumQmBhCuBvHHs4o831NG7fQXEkCQ&usqp=CAU",
    description:
      "Manchester is the most-populous city and metropolitan borough in North West England and Greater Manchester, England.The city is surrounded by outlying towns and the neighbouring city of Salford."
  },
  {
    name: "London",
    url:
      "https://www.visitlondon.com/traveller-information/essential-information/tourist-information-centres",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9INXbFyArXryJD-eCWu1FBcmtw89An1aXQ&usqp=CAU",
    description:
      "London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia."
  }
];
export default TouristInfoCards;
