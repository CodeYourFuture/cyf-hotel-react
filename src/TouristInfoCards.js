import React from "react";

function TouristInfoCards() {
  return (
    <div className="row">
      <div className="card col-4 text-center">
        <img
          src="https://peoplemakeglasgow.com/images/Things_to_do/Top_attractions/City-Chambers-995.jpg"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h4>Glasgow</h4>
          <p>
            Glasgow is a port city on the River Clyde in Scotland's western
            Lowlands. It's famed for its Victorian and art nouveau architecture.
            It's a national cultural hub, home to institutions including the
            Scottish Opera, Scottish Ballet and National Theatre of Scotland, as
            well as acclaimed museums and a thriving music scene.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-light">
            More Information
          </a>
        </div>
      </div>
      <div className="card col-4 text-center">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FTown_Hall_Manchester_-_External_669297268.jpg&action=ProductDetail"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h4>Manchester</h4>
          <p>
            Manchester is a major city in the northwest of England and often
            called the "Capital of the North" with a rich industrial heritage.
            It has many places for the arts, places for learning, businesses
            providing media as well as lots of shops.
          </p>
          <a href="https://www.visitmanchester.com/" className="btn btn-light">
            More Information
          </a>
        </div>
      </div>
      <div className="card col-4 text-center">
        <img
          src="https://cdn.londonandpartners.com/asset/london-by-night-open-top-bus-tour_london-by-night-open-top-bus-tour-image-courtesy-of-golden-tours_a78a06aa1761ee29c3c3c7bcff4d1939.jpg"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h4>London</h4>
          <p>
            A city which has something for everyone: from history and culture to
            parks. United Kingdom’s capital is one of the world’s most visited
            cities with the iconic buildings and landmarks, museums, art
            galleries, verdant royal parks gardens and green spaces, cutesy
            farmers markets and street foods.
          </p>
          <a href="https://visitlondon.com/" className="btn btn-light">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
