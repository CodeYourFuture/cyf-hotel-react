import React from "react";
import glasgow from "./images/glasgow.jpg";
import Manchester from "./images/Manchester.jpg";
import London from "./images/london.jpg";

const TouristInfoCards = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={glasgow} className="card-img-top" />
        <h1> Glasgow</h1>
        <p>
          Glasgow is Scotland's largest city, and it forms an independent
          council area that lies entirely within the historic county of
          Lanarkshire. The city occupies much of the lower Clyde valley, and its
        </p>
        <div className="card-body d-flex flex-column">
          <a
            href="https://peoplemakeglasgow.com/"
            className="btn btn-primary mt-auto"
            target="_blank"
          >
            More Info. About Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img src={Manchester} className="card-img-top" />
        <h1> Manchester</h1>
        <p>
          Greater Manchester is a metropolitan county and combined authority
          area in North West England, with a population of 2.8 million;
          comprising ten metropolitan boroughs: Manchester, Salford, Bolton,
          Bury, Oldham, Rochdale, Stockport, Tameside, Trafford and Wigan.
        </p>
        <div className="card-body d-flex flex-column">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary mt-auto"
            target="_blank"
          >
            More Info. About Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img src={London} className="card-img-top" />
        <h1> London</h1>
        <p>
          London, the capital of England and the United Kingdom, is a
          21st-century city with history stretching back to Roman times. At its
          centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’
          clock tower and Westminster Abbey, site of British monarch
          coronations. Across the Thames River, the London Eye observation wheel
          provides panoramic views of the
        </p>
        <div className="card-body d-flex flex-column">
          <a
            href="https://www.visitlondon.com/"
            className="btn btn-primary mt-auto"
            target="_blank"
          >
            More Info. About London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
