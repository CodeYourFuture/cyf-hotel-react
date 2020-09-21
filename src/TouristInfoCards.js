import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="City of Glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80"
          alt="City of Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt="City of London"
          className="card-img-top"
        />
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
