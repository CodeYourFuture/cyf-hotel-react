import React, { Fragment } from "react";

const TouristInfoCards = () => {
  return (
    <Fragment>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1551983627-d46f03818923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com/" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitlondon.com/" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default TouristInfoCards;
