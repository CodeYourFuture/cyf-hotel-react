import React from "react";

export const InfoCards = props => {
  return (
    <div class="outer-wrapper">
      <h1 className="places-heading">Places to visit ...</h1>
      <div className="cards-wrapper">
        {props.cities.map((city, index) => (
          <div key={index} className="card cards">
            <img src={city.img} alt={city.alt} />
            <div className="card-body">
              <a
                href={city.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {city.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
