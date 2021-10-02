import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="cardWrapper">
      <div className="card">
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.VURrH1cM4rNMrNgm0z_bVgHaEo&pid=Api&P=0&w=259&h=162"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            London is the capital and largest city of England and the United
            Kingdom. It stands on the River Thames in south-east England at the
            head of a 50-mile estuary down to the North Sea. It has been a major
            settlement for two millennia
          </p>
          <a
            href="http://visitlondon.com"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.K_zQ812cnQDY18ocKh0ijAHaEK&pid=Api&P=0&w=327&h=185"
          alt="Manchester City"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="http://visitmanchester.com"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.comewalkwithme.com.au/wp-content/uploads/2017/04/Photo-4_1-People-Make-Glasgow.jpg"
          alt="Glasgow City"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="http://peoplemakeglasgow.com"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>{" "}
    </div>
  );
};
export default TouristInfoCards;
