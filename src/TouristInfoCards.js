import React from "react";

let city = [
  {
    city: "London",
    info:
      "Welcome to London! Discover the official guide to England’s exciting capital.",
    img: "https://azgovernor.gov/sites/default/files/londs_0.jpg",
    link: "https://visitlondon.com/"
  },
  {
    city: "Manchester",
    info:
      "Welcome to the official tourism site of Greater Manchester. Click the link for more information ",
    img:
      "https://media.istockphoto.com/photos/manchester-england-picture-id946961992?k=20&m=946961992&s=170667a&w=0&h=6f0W-vyxpt9NhVJ3Waz52QdmxZJEPnC5gZGV6aRrtjE=",
    link: "https://www.visitmanchester.com/"
  },
  {
    city: "Glasgow",
    info:
      "Glasgow recently topped Condé Nast Traveller’s list of best cities to visit in 2021. More information",
    img:
      "https://media.istockphoto.com/photos/glasgow-scotland-picture-id830486350?k=20&m=830486350&s=612x612&w=0&h=MAhMQzowOAFSx7FskDIlPmdBioY56XQ8SSsGf3QIKLQ=",
    link: "https://peoplemakeglasgow.com/"
  }
];
let TouristInfoCards = () => {
  return (
    <div className="city">
      {city.map(e => {
        return (
          <div className="card">
            <img src={e.img} className="card-img-top" />
            <p class="cardInfo">{e.info}</p>
            <div className="card-body">
              <a
                href={`${e.link}`}
                target="_blank"
                className="city-btn btn btn-info mb-3 pl-3 pr-3"
              >
                {e.city}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
