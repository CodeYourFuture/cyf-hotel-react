import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="wrap-card">
      <div className="card">
        <img
          src="Glasgow.jpg"
          className="card-img-top"
          width={300}
          height={300}
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding.{" "}
          </p>
          <a href="http://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="Manchester.jpg"
          className="card-img-top"
          width={300}
          height={300}
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation areas 18th-century
            canal system recalls the city’s days as a textile powerhouse, and
            visitors can trace this history at the interactive Museum of Science
            & Industry.
          </p>
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="London.jpg"
          className="card-img-top"
          width={300}
          height={300}
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic Big
            Ben clock tower and Westminster Abbey, site of British monarch
            coronations.{" "}
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
