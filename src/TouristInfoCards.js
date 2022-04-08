import React from "react";
import glasgow from "./Images/glasgow.jpeg";
import london from "./Images/london.jpeg";
import Manchester from "./Images/Manchester.jpeg";
const TouristInfoCards = () => {
  return (
    <div className="card">
      <div className="cardDiv">
        <div className="image-wrapper">
          <img src={glasgow} className="card-img-top" alt="glasgow city" />
        </div>
        <div className="card-body">
          <h1>Glasgow</h1>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding.
          </p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-success">
            More information...
          </a>
        </div>
      </div>
      <div class="cardDiv">
        <div className="image-wrapper">
          <img src={london} className="card-img-top" alt="London " />
        </div>
        <div className="card-body">
          <h1>London</h1>
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times.
          </p>
          <a href="https://visitlondon.com" className="btn btn-success">
            More information...
          </a>
        </div>
      </div>
      <div class="cardDiv">
        <div className="image-wrapper">
          <img src={Manchester} className="card-img-top" alt=" Manchester " />
        </div>
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage.
          </p>
          <a href="https://visitmanchester.com" className="btn btn-success">
            More information...
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
