import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>Glasgow</h2>
        <img
          src="https://www.cyclingworldchamps.com/media/q1ml2abm/glasgow-green-2.jpg?width=1960&height=1103&format=webp&rnd=133174922661270000"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <h2>Manchester</h2>
        <img
          src="https://cdn.businesstraveller.com/wp-content/uploads/fly-images/988796/Manchester-916x516.jpeg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <h2>London</h2>
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/tower-bridge-shutterstock-1920x582.jpg?mw=1920&hash=078DDB24AC457E2D8F231FC3E0F7EC55A00C88E3"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;