import React from "react";
import design from "./design.jpg";
import manchester from "./manchester.jpeg";
import Citycentre from "./Citycentre.jpg";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card-group">

        <div class="card">
          <img src={design} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Glasgow</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <a href="peoplemakeglasgow.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>


        <div className="card">
          <img src={manchester} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Manchester</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <a href="visitmanchester.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>


        <div className="card">
          <img src={Citycentre} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">London</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <a href="visitlondon.com" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



export default TouristInfoCards;
