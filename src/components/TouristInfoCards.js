import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://www.zingarate.com/pictures/2018/08/07/glasgow.jpeg"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h5 className="card-title">Visit Glasgow</h5>
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            GO!
          </a>
        </div>
      </div>

      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://www.visitmanchester.com/imageresizer/?image=%2fdbimgs%2fcityscape-from-staybridge-suites.jpg&action=Background_Overlay"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h5 className="card-title">Visit Manchester</h5>

          <a
            href="https://www.visitmanchester.com "
            className="btn btn-primary"
          >
            GO!
          </a>
        </div>
      </div>

      <div className="card" style={{ width: 18 + "rem" }}>
        <img
          src="https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h5 className="card-title">Visit London</h5>
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            GO!
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
