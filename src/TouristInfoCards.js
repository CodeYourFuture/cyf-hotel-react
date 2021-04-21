import React from "react";
import London from "./images/london.jpeg";
import Glasgow from "./images/glasgow.jpeg";
import Manchester from "./images/manchester.jpeg";
// import picture from "pic.jpeg";

const TouristInfoCards = () => {
  return (
    <div className="card-container text-center">
      <div className="card">
        <img
          src={London}
          alt="A photo of London city"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            London is the capital and largest city of England and the United
            Kingdom. The city stands on the River Thames in the south-east of
            England, at the head of its 50-mile (80 km) estuary leading to the
            North Sea. London has been a major settlement for two millennia, and
            was originally called Londinium.
          </p>
          <a
            href="https://visitlondon.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More Info
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src={Glasgow}
          alt="A photo of Glasgow city"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            London is the capital and largest city of England and the United
            Kingdom. The city stands on the River Thames in the south-east of
            England, at the head of its 50-mile (80 km) estuary leading to the
            North Sea. London has been a major settlement for two millennia, and
            was originally called Londinium.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More Info
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src={Manchester}
          alt="A photo of Manchester city"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            London is the capital and largest city of England and the United
            Kingdom. The city stands on the River Thames in the south-east of
            England, at the head of its 50-mile (80 km) estuary leading to the
            North Sea. London has been a major settlement for two millennia, and
            was originally called Londinium.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
