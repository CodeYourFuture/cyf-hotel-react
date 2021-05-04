import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards-wrapper container">
      <div className="card">
        <img
          src="https://avisassets.abgemea.com/dam/jcr:aa3b1977-80d3-4f93-a8ac-09e07feec22e/Glasgow_Squinty_Bridge_Credit_iStock_theasis.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Go to Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSUJZkd-9oi8uBOPu8nh9Zd31mN9TtpAmYVhWgHl01rS_doS09&usqp=CAU"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitlondon.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Go to London
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQZpRbVeQkOINZvrCLWoXEIZozAor5w2oPGVNNhbXImkSa0qXN&usqp=CAU"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
          >
            Go to Manchester
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
