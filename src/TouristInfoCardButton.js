import React from "react";

// Renders card info button, called by `TouristInfoCards.js`.
const TouristInfoCardButton = props => {
  return (
    <div>
      {
        <a
          href={props.city.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary d-flex justify-content-center"
        >
          Visit {props.city.name}
        </a>
      }
    </div>
  );
};

export default TouristInfoCardButton;
