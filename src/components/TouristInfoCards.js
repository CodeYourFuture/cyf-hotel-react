import React from "react";
import Carousel from "react-elastic-carousel";
import "../style/touristCards.scss";

const TouristInfoCards = ({ cardData }) => {
  const breakPoints = [
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 1 }
  ];

  return (
    <div className="cards-container " id="about">
      {/* <div className="card-deck mt-5"> */}
      <Carousel breakPoints={breakPoints}>
        {cardData.map((data, i) => {
          return (
            <div key={i} className="card-item">
              <img
                src={data.imgUrl}
                alt="card image"
                className="card-img-top"
              />
              <div className="card-body  text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a
                  href={data.webLink}
                  target="_blank"
                  className="btn card-button"
                >
                  Visit {data.title}
                </a>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TouristInfoCards;
