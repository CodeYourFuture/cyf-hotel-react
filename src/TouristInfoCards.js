import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <img
          alt="holiday-london"
          src="https://www.cityam.com/wp-content/uploads/2020/02/London_Tower_Bridge_City.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey
          </p>
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          alt="holiday-glasgow"
          src="https://api.wearehomesforstudents.com/wp-content/uploads/2020/08/student-accommodation-glasgow.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding.{" "}
          </p>
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          alt="holiday-manchester"
          src="https://absolutely.london/wp-content/uploads/2017/05/MANCHESTER-HERO-1068x712.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse,{" "}
          </p>
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
