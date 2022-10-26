import React from "react";
import design from "./design.jpg";
import Ecocity from "./Ecocity.jpg";
import Citycentre from "./Citycentre.jpg";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card col-sm-6">
        <img src={design} className="card-img-top" />
        <div className="card-body">
          <h1>Glasgow</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            esse nobis possimus unde odio assumenda.
          </p>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Ecocity} className="card-img-top" />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            necessitatibus.
          </p>
          <a href="visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Citycentre} className="card-img-top" />
        <div className="card-body">
          <h1>London</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            deserunt sed sapiente inventore ea in eligendi, perferendis magni
            nemo nulla quidem maxime nesciunt incidunt.
          </p>
          <a href="visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
