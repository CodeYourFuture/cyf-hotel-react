import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/imager/general/74796/West-end-Cityscape-of-Kelvingrove-Header_961ee30b631a75b37d23eb0e09df30ea.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="HTTPS://peoplemakeglasgow.com" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock-1920x582.jpg?mw=1385&hash=E1C13557B1A5ECE71567559253294E67A723805D"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Visit london
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
