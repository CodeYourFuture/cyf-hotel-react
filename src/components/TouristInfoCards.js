import React from "react";
import Lisboncard from "./lisbon.jpg";
import Manchestercard from "./manchester.jpg";
import Pariscard from "./paris.jpg";
function TouristInfoCards() {
  return (
    <div className="cardsEl">
      <div className="card">
        <img src={Lisboncard} alt="Lisbon" className="card-img-top" />
        <div className="card-body">
          <a
            href="https://www.getyourguide.com/lisbon"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src={Manchestercard} alt="Manchester" className="card-img-top" />
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
        <img src={Pariscard} alt="Paris" className="card-img-top" />
        <div className="card-body">
          <a
            href="https://www.getyourguide.com/paris"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
