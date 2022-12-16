import React from "react";
import SearchResults from "./SearchResults";

const TouristInfoCards = props => {
  const cities = [
    {
      id: 1,
      name: "Glasgow",
      img:
        "https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/glasgow_clyde_arc_vb34161123.jpg",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut velit pharetra, blandit erat",
      link: "https://peoplemakeglasgow.com/"
    },
    {
      id: 2,
      name: "Manchester",
      img:
        "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut velit pharetra, blandit erat",
      link: "https://www.visitmanchester.com/"
    },
    {
      id: 3,
      name: "London",
      img:
        "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock-1920x582.jpg?mw=1920&hash=078DDB24AC457E2D8F231FC3E0F7EC55A00C88E3",
      info:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut velit pharetra, blandit erat",
      link: "https://www.visitlondon.com/"
    }
  ];
  const keys = 0;
  return (
    <div className="card-container">
      {cities.map(element => (
        <div key={element.name} className="card">
          <img src={element.img} className="card-img-top" />
          <h2>{element.name}</h2>
          <p>{element.info}</p>
          <a href={element.link}>
            <button className="btn btn-primary">
              Come visit {element.name}
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
