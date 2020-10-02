import React from "react";

function TouristInfoCards() {
  return (
    <div id="TouristInfoCards">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mitchell_Library_at_night_-_panoramio.jpg/1280px-Mitchell_Library_at_night_-_panoramio.jpg"
          alt="Glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go to Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Manchester_Town_Hall_from_Lloyd_St.jpg"
          alt="Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go to Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg"
          alt="London"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go to London
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
