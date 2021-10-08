import React from "react";

const TouristInfoCards = props => {
  return (
    <div>
      {props.imgs.map((img, index) => (
        <div className="card">
          <img key={index} src={img} className="card-img-top" />
        </div>
      ))}

      {props.links.map((link, index) => (
        <div className="card-body">
          <a key={index} href={link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
