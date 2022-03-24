import React from "react";

const TouristInfoCards = ({ cardData }) => {
  return (
    <div className="container">
      <div className="card-deck">
        {cardData.map(data => {
          return (
            <div className="card">
              <img
                src={data.imageUrl}
                alt="card image"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a
                  href={data.webLink}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TouristInfoCards;
