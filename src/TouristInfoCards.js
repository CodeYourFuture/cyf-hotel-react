import React from "react";

const TouristInfoCards = (props) => {
  return (

      <div className="cards">
        <div className="card">
          <img className="card-img-top" src={props.image} />
          <div className="card-body">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href={props.link} className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
      </div>
     
   
  );
};

export default TouristInfoCards;
