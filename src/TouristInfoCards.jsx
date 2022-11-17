import React from "react";
import Ashton_Lane_Glasgow from "./images/Ashton_Lane_Glasgow.jpg";
import Manchester_Opera_House from "./images/Manchester_Opera_House.jpg";
import London_Bridge from "./images/London_Bridge.jpg";

const TouristInfoCards = () => (
  <div className="Tourist-Info-Cards">
    <div className="card">
      <img src={Ashton_Lane_Glasgow} alt="Glasgow" className="card-img" />
      <a
        href="https://www.peoplemakeglasgow.com"
        className="card-link"
        target="_blank"
      >
        People Make Glasgow
      </a>
    </div>
    <div className="card">
      <img src={Manchester_Opera_House} alt="Manchester" className="card-img" />
      <a
        href="https://www.visitmanchester.com"
        className="card-link"
        target="_blank"
      >
        Visit Manchester
      </a>
    </div>
    <div className="card">
      <img src={London_Bridge} alt="London" className="card-img" />
      <a
        href="https://www.visitlondon.com"
        className="card-link"
        target="_blank"
      >
        Vist London
      </a>
    </div>
  </div>
);

export default TouristInfoCards;
