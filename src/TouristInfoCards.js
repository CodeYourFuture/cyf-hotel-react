import React from "react";
import GlasgowViews from "./GlasglowViews";

const TouristInfoCards = ({ name, info, link, image, id }) => {
  return (
    <div>
      <div className="card">
        <img src={image} alt="view of Glasgow" className="card-img-top" />
        <div className="card-body">
          <h2>{name}</h2>
          <p>{info}</p>
          <a className="btn btn_primary" href={link}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
