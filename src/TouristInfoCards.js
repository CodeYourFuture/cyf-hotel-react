import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="cardWrapper">
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.comewalkwithme.com.au/wp-content/uploads/2017/04/Photo-4_1-People-Make-Glasgow.jpg"
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
