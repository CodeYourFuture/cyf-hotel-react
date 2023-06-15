import React from "react";
import GlasgowImg from "./images/George Square Glasgow.jpeg";
import LancasterCastleImg from "./images/Lancaster Castle.jpeg";
import LondonEyeImg from "./images/London Eye.jpeg";

const TouristInfoCards = () => {
  const glasgow =
    "Where to start but right in the heart of it all! The city's civic square, George Square attracts everything from global events to people watchers. The square is lined with beautiful buildings, including the City Chambers. Join one of their free daily tours to see their Instagram-worthy interiors";
  const lancasterCastle =
    "Steeped in almost 1000 years of history including the trials of the Pendle Witches and the Birmingham Six, Lancaster Castle is one of the most important historic monuments in the North West. Come and visit the old cells, Shire Hall and Crown Court.";
  const londonEye =
    "Enjoy amazing 360-degree views over London from the lastminute.com London Eye - the world’s tallest cantilevered observation wheel. The special engineering achievement has become a symbol of the modern capital and a world-famous icon of architecture.";

  return (
    <div className="tourist-cards">
      <div className="card">
        <img src={GlasgowImg} className="card-img-top" />
        <div className="card-body">
          <h4>George Square</h4>
          <span>{glasgow}</span>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Click for info
          </a>
        </div>
      </div>
      <div className="card">
        <img src={LancasterCastleImg} className="card-img-top" />
        <div className="card-body">
          <h4>Lancaster Castle</h4>
          <span>{lancasterCastle}</span>
          <a
            href="https://www.visitmanchester.com/things-to-see-and-do/gateway-to-the-north/explore-the-north/lancaster-castle-p344321"
            className="btn btn-primary"
          >
            Click for info
          </a>
        </div>
      </div>
      <div className="card">
        <img src={LondonEyeImg} className="card-img-top" />
        <div className="card-body">
          <h4>London Eye</h4>
          <span>{londonEye}</span>
          <br></br>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Click for info
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
