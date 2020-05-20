import React from "react";

const TouristInfoCards = props => {
  console.log(props);
  const infoRows = props.data.map((locationInfo, index) => {
    return (
      <div key={index} className="card">
        <img src={locationInfo.img} alt="img" className="card-img-top" />
        <div className="card-body">
          <a
            href={locationInfo.href}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            {locationInfo.place}
          </a>
        </div>
      </div>
    );
  });

  return <div className="card-control">{infoRows}</div>;
};
export default TouristInfoCards;
