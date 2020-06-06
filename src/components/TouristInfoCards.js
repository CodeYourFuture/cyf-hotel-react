import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1519044444158-d7b0e8452004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="Glasgow"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1551983627-d46f03818923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="Manchester"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com/" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="London"
        />
        <div className="card-body">
          <a href="https://visitlondon.com/" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
