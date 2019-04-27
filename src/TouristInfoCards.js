import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">London</h5>
            <img
              src="https://images.unsplash.com/photo-1508710985089-e985fabbb184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="London"
            />
            <a
              href="https://www.visitlondon.com/"
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Glasgow</h5>
            <img
              src="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="Glasgow"
            />
            <a href="peoplemakeglasgow.com" className="btn btn-primary" />
          </div>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Manchester</h5>
            <img
              className="card-img"
              src="https://media-cdn.tripadvisor.com/media/photo-s/01/c1/4a/a9/provided-by-visit-manchester.jpg"
              alt="Manchester"
            />
            <a
              href="https://www.visitmanchester.com/"
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
