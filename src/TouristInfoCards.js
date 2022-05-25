import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=900&h=-1&s=1"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h3>Manchester</h3>
          <p>
            Some text about cities.Some text about cities.Some text about
            cities. Some text about cities. Some text about cities.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Visit website
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.timeout.com/images/105400989/750/422/image.jpg"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h3>Glasgow</h3>
          <p>
            Some text about cities.Some text about cities.Some text about
            cities. Some text about cities. Some text about cities.
          </p>
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Visit website
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/towerbridge-640x360.jpg?mw=640&hash=9FF3EBA9414733318A48ABDB4F58FBEB3B7E29AC"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h3>London</h3>
          <p>
            Some text about cities.Some text about cities.Some text about
            cities. Some text about cities. Some text about cities.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
