import React from "react";

function TouristInfoCards() {
  return (
    <div className="cards">
      <div className="card">
        <img
          src="https://www.inspiringtravelscotland.com/wp-content/uploads/2019/07/Glasgow-river-clyde-landscape-night.png"
          className="card-img-top"
          alt="glasgow"
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            Voted one of the friendliest cities in the world, Scotland’s biggest
            city is a stylish mix of arts, culture and unique Celtic charm
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.pexels.com/photos/5212814/pexels-photo-5212814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="card-img-top"
          alt="manchester"
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            Youthful, diverse, energetic and bursting with character; Manchester
            is one of the most exciting places to visit in the UK right now
            where everybody and anybody is very warmly welcomed
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            Find things to do in London, from iconic sightseeing spots and
            fun-filled days out to top restaurants, theatre and unmissable
            London events.{" "}
          </p>
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
