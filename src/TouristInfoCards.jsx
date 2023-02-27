import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Kingston_Bridge_in_Glasgow.jpg/800px-Kingston_Bridge_in_Glasgow.jpg"
          className="card-img-top"
          alt="Glasgow on a budget"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">
            Glasgow's city centre is home to flagship stores, impressive
            shopping centres and designer within an easily walkable area.
          </p>
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Manchester_Cathedral.JPG"
          className="card-img-top"
          alt="Glasgow on a budget"
        />
        <div className="card-body">
          <h5 className="card-title">Greater Manchester</h5>
          <p className="card-text">
            Manchester is the only UK city to feature in Lonely Planet's Best in
            Travel 2023 list and the only UK city in National Geographic.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg"
          className="card-img-top"
          alt="Glasgow on a budget"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            London is known for its world-class museums, theaters, and galleries
            and its iconic landmarks such as Buckingham Palace ...
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
