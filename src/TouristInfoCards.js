import React from "react";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img
          src="https://media.timeout.com/images/105400989/750/422/image.jpg"
          className="card-img-top"
          alt="#"
        />
        <div className="card-body">
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            People Make Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img src="https://bit.ly/3JIjwvE" className="card-img-top" alt="#" />
        <div className="card-body">
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img src="https://bit.ly/3IEbjXZ" className="card-img-top" alt="#" />
        <div className="card-body">
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
