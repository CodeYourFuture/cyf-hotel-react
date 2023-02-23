import React from "react";
import LondonImg from "./london.jpg";
import ManchesterImg from "./manchester.jpg";
import GlasgowImg from "./glasgow.jpeg";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={LondonImg} alt="londonImg" />
        <div className="card-body">
          <h3>London</h3>
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={ManchesterImg} alt="manchesterImg" />
        <div className="card-body">
          <h3>Manchester</h3>
          <p>
            Manchester is the only UK city to feature in Lonely Planet's Best in
            Travel 2023 list and the only UK city in National Geographic's
            influential ‘Best of the World’ list which annually sets out 25 of
            the must-see places to visit around the globe.
          </p>
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>

      <div className="card">
        <img src={GlasgowImg} alt="glasgowImg" />
        <div className="card-body">
          <h3>Glasgow</h3>
          <p>
            Glasgow is in west central Scotland. It’s Scotland’s largest city
            and is easily accessible from the rest of the UK and overseas by
            train, sea, road and air
          </p>
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
