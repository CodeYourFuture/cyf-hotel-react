import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="d-flex flex-column align-items-center flex-md-row justify-content-around  align-items-md-start">
      {props.cardsInfo.map((ele, index) => {
        return (
          <div className="card mb-2" key={index}>
            <img src={ele.src} alt="#" className="card-img-top" />
            <div className="card-body">
              <h3 className="text-center">{ele.city}</h3>
              <p>{ele.description}</p>
              <a href={ele.href} className="btn btn-secondary">
                More information
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
