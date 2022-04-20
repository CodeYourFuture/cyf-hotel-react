import React from "react";

const TouristInfoCards = ({ cardData }) => {
  return (
    <div className="container">
      <div className="card-deck mt-5">
        {cardData.map((data, i) => {
          return (
            <div key={i} className="card">
              <img
                src={data.imgUrl}
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
                  Go {data.title}
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
