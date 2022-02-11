import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-deck m-5">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/assets/general/_1200x630_crop_center-center_none/West-end-Cityscape-of-Kelvingrove-Header.jpg"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body text-center">
          <h5 className="card-title font-weight-bold">Glasgow</h5>
          <p>
            From independent stores to high street retailers, Glasgow is the
            best shopping city. Glasgow's city centre is home to flagship
            stores, impressive shopping centres and designer favourites all
            within an easily walkable area. The city is also rich in artists and
            creators which makes for a thriving and exciting independent
            shopping scene.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
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
        <div className="card-body text-center">
          <h5 className="card-title font-weight-bold">Manchester</h5>
          <p>
            Known throughout the world as the birthplace of the industrial
            revolution, Manchester has a proud history in science, politics,
            music, arts and sport. And today the city combines this heritage
            with a progressive vision to be a city that delivers surprise and
            delight in equal measures.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/asset/hop-on-hop-off-bus-tour_golden-tours-hop-on-hop-off-bus-tour-at-the-london-eye-golden-tours_79082d0e65c390d7276650ec1ee66a97.jpg"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body text-center">
          <h5 className="card-title font-weight-bold">London</h5>
          <p>
            Find things to do in London, from iconic sightseeing spots and
            fun-filled days out to top restaurants, theatre and unmissable
            London events. If you're not able to visit just yet, plan ahead to
            make the most of your next visit.
          </p>
          <a
            href="https://visitlondon.com/"
            className="btn btn-primary align-bottom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
