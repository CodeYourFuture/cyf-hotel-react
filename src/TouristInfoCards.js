import React from "react";

const TouristInfoCards = () => (
  <div className="cards-parent">
    <div className="card">
      <img
        src="https://avisassets.abgemea.com/dam/jcr:aa3b1977-80d3-4f93-a8ac-09e07feec22e/Glasgow_Squinty_Bridge_Credit_iStock_theasis.jpg"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
          Go Glasgow
        </a>
      </div>
    </div>
    <div className="card">
      <img
        src="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="http://visitmanchester.com" className="btn btn-primary">
          Go Manchester
        </a>
      </div>
    </div>
    <div className="card">
      <img
        src="https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="http://visitlondon.com" className="btn btn-primary">
          Go London
        </a>
      </div>
    </div>
  </div>
);

export default TouristInfoCards;
