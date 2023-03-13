import React from "react";
import glascowImage from "./images/glascow.jpeg"
import manchesterImage from "./images/manchester.jpeg"
const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src="" alt="london" />
        <div className="card-body">
          <h3>London</h3>
          <p>
            London is the capital and largest city of England and the United
            Kingdom. Standing on the River Thames in the south-east of England,
            at the head of its 50-mile (80 km) estuary leading to the North
            Sea,London has been a major settlement for two millennia. Londinium
            was founded by the Romans.
          </p>
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={manchesterImage} alt="manchester" />
        <div className="card-body">
          <h3>Manchester</h3>
          <p>
            Manchester is the nucleus of the largest metropolitan area in the
            north of England, and it remains an important regional city, but it
            has lost the extraordinary vitality and unique influence that put it
            at the forefront of the Industrial Revolution.
          </p>
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={glascowImage} alt="glasgow" />
        <div className="card-body">
          <h3>Glasgow</h3>
          <p>
            Glasgow, Gaelic Glaschu, city, west-central Scotland. It is situated
            along both banks of the River Clyde 20 miles (32 km) from that
            river's mouth on the western, or Atlantic, coast. Glasgow is
            Scotland's largest city, and it forms an independent council area
            that lies entirely within the historic county of Lanarkshire.
          </p>
          
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          > More Information</a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;