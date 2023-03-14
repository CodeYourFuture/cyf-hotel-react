import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://www.glasgowlife.org.uk/media/pkdn34gs/glasgow-city-image-credit-glasgow-life.jpg?anchor=center&mode=crop&width=1800&height=700&rnd=132864696763600000"
          className="card-img-top"
        />
        <div className="card-body">
          <h3>Glasgow</h3>
          <a href="http://peoplemakeglasgow.com/" className="btn btn-primary">
            Click for more information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay"
          className="card-img-top"
        />
        <div className="card-body">
          <h3>Manchester</h3>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Click for more information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock-1920x582.jpg?mw=1920&hash=078DDB24AC457E2D8F231FC3E0F7EC55A00C88E3"
          className="card-img-top"
        />
        <div className="card-body">
          <h3>London</h3>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Click for more information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
