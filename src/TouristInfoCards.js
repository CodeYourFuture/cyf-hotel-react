import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-wrapper">
      {/* _________________________Glasgow_________________ */}
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1388&q=80"
          className="card-img-top"
        />
        <p className="card-text">
          Glasgow is a port city on the River Clyde in Scotland's western
          Lowlands. It's famed for its Victorian and art nouveau architecture.
          Today it's a national cultural hub, home to institutions including the
          Scottish Opera, Scottish Ballet and National Theatre of Scotland.
        </p>
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>
      {/* ________________________Manchester_________________ */}
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1624699820262-1c6629eed741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          className="card-img-top"
        />
        <p className="card-text">
          Manchester is a major city in the northwest of England with a rich
          industrial heritage. The Castlefield conservation areas 18th-century
          canal system recalls the citys days as a textile powerhouse, and
          visitors can trace this history at the interactive Museum of Science
          Industry.
        </p>
        <div className="card-body">
          <a href="https://visitmanchester.com/" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>
      {/* ____________________London_________________ */}
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          className="card-img-top"
        />
        <p className="card-text">
          London, the capital of England and the United Kingdom, is a
          21st-century city with history stretching back to Roman times. At its
          centre stand the imposing Houses of Parliament, the iconic Big Ben
          clock tower and Westminster Abbey, site of British monarch
          coronations.
        </p>
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
