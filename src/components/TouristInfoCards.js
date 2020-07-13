import React from "react";

let image = [
  "https://avisassets.abgemea.com/dam/jcr:aa3b1977-80d3-4f93-a8ac-09e07feec22e/Glasgow_Squinty_Bridge_Credit_iStock_theasis.jpg",
  "https://i2-prod.manchestereveningnews.co.uk/incoming/article14967200.ece/ALTERNATES/s615/0_CJH_MEN_Northern_Rail_Piccadilly_310518_11.jpg",
  "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
];
function TouristInfoCards() {
  return (
    <div>
      {image.map((i, index) => {
        return (
          <div key={index} className="card">
            <img src={i} className="card-img-top" />
            <div className="card-body">
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
