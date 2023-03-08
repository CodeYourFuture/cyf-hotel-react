import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="CardsCities">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture,
            a rich legacy of the city's 18th–20th-century prosperity due to
            trade and shipbuilding.
          </p>
          <a
            href="https://peoplemakeglasgow.com"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1605069580490-1474a6ef1908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            Manchester is a major city in the northwest of England with a rich
            industrial heritage. The Castlefield conservation area’s
            18th-century canal system recalls the city’s days as a textile
            powerhouse, and visitors can trace this history at the interactive
            Museum of Science & Industry.
          </p>
          <a
            href="https://visitmanchester.com"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations.{" "}
          </p>
          <a
            href="https://visitlondon.com"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
