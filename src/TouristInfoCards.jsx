import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/imager/general/109009/City-centre-George-Square-Content-Block_aa93d8ee9a3cc573b9a01b328410e8b2.jpg"
          className="card-img-top"
          alt="Glasgow "
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
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FOlympic%20Parade%20nav.jpg&action=FeaturedItems3x2"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h5 className="card-title">Greater Manchester</h5>
          <p className="card-text">
            Manchester is the only UK city to feature in Lonely Planet's Best in
            Travel 2023 list and the only UK city in National Geographic!.
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
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            London is known for its world-class museums, theaters, and galleries
            and its iconic landmarks such as Buckingham Palace ...!
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
