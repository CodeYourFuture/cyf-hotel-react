import React from "react";
import Glasgow from "./glasgow.jpg";
import London from "./london.jpg";
import Manchester from "./manchester.jpeg";

const TouristInfoCards = () => {
  return (
    <div id="container">
      <div className="card">
        <img src={Glasgow} className="card-img-top" />
        <h3>Glasgow</h3>
        <div className="card-body">
          <p>
            Glasgow is a compact city and it’s easy to find your way around,
            whether on foot, by bike or public transport.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={London} className="card-img-top" />
        <h3>London</h3>
        <div className="card-body">
          <p>
            London is the capital and largest city of England and the United
            Kingdom, with a population of just under 9 million.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Manchester} className="card-img-top" />
        <h3>Manchester</h3>
        <div className="card-body">
          <p>
            Manchester is renowned for its entertainment, with a plethora of
            cinemas, theatre and legendary clubs for great night-time amusement.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
