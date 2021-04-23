import React from "react";
import London from "./images/london.jpg";
import Manchester from "./images/manchester.jpeg";
import Glasgow from "./images/Glasgow.jpg";

const TouristInfoCards = () => {
  return (
    <div className=" container App-content">
      <div className="row justify-content-around text-center">
        <div className="card">
          <img src={London} className="card-img-top" alt="London" />
          <h3 className="pt-2">London</h3>
          <p className="p-1">
            Welcome to London!
            <br /> Discover the best of London with Visit London, the official
            guide to England’s exciting capital.
          </p>
          <div className="card-body">
            <a href="https://visitlondon.com/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Manchester} className="card-img-top" alt="Manchester" />
          <h3 className="pt-2">Manchester</h3>
          <p className="p-1">
            Manchester is one of the most exciting places to visit in the UK
            right now where everybody is very warmly welcomed.
          </p>
          <div className="card-body">
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card">
          <img src={Glasgow} className="card-img-top" alt="Glasgow" />
          <h3 className="pt-2">Glasgow</h3>
          <p className="p-1">
            We encourage you to stay safe and enjoy your time in the city whilst
            following the Scottish Government's current guidance.
          </p>
          <div className="card-body">
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
