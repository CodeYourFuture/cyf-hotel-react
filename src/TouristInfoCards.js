import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards-layout">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://peoplemakeglasgow.com/"
            className="btn btn-primary container"
          >
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1551983627-d46f03818923?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary container"
          >
            Go Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitlondon.com/"
            className="btn btn-primary container"
          >
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
