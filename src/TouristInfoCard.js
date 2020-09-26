import React from "react";
// { imageSrc, city, url }
const TouristInfoCard = ({ props }) => {
  let { imageSrc, city, url } = props;

  return (
    <div className="info-card">
      <img src={imageSrc} className="card-img-top" alt={city} />
      <div className="card-body">
        <a href={url} className="btn btn-primary">
          {city}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
