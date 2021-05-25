import React from "react";

const TouristInfoCards = function() {
  return (
    <div className="card-deck mr-0 ml-0">
      <div className="card">
        <img
          src="/images/glasgow.jpg"
          alt="a picture of glasgow skyscraper"
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">Glasgow</h3>
          <p className="card-text">
            Glasgow is a vibrant and welcoming city bursting with character,
            personality and great experiences. No matter when you visit, you’ll
            find world-class visitor attractions, unique neighbourhoods,
            stunning architecture, an ever-evolving food and drink scene and
            legendary nightlife.
          </p>
        </div>
        <div className="card-footer text-center">
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="/images/manchester.jpg"
          alt="a picture of manchester skyscraper"
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">Manchester</h3>
          <p className="card-text">
            Whether you’re seeking culture, nightlife, history, or just good
            fun, there are plenty of things to do in Manchester.
          </p>
          <p>
            Be absorbed by the beautiful attractions such as the gothic
            architecture; discover history, old and new, at Manchester Museum
            and the Imperial War Museum North; see contemporary arts redifined
            at HOME; or even learn to ski at Chill Factore.
          </p>
        </div>
        <div className="card-footer text-center">
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="/images/london.jpg"
          alt="a picture of tower bridge in london"
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">London</h3>
          <p className="card-text">
            One of the world’s most visited cities, England’s buzzing capital is
            well worth the visit and has so much to offer, from magnificent
            history and culture to cutting-edge fashion and food.
          </p>
        </div>
        <div className="card-footer text-center">
          <a
            href="https://www.visitlondon.com/"
            target="_blank"
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
