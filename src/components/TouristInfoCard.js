import React from "react";

const TouristInfoCard = () => {
  return (
    <div className="container d-flex justify-content-around">
      <div className="card">
        <img
          className="card-image-top"
          src="https://a.cdn-hotels.com/gdcs/production95/d16/cc514640-8f0f-11e8-9bad-0242ac110002.jpg"
          alt="glasgow"
        />
        <div className="card-body">
          <h1 className="card-title">Glasgow</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            corrupti, minus quis quos sint ipsam sed eveniet veniam voluptate
            assumenda quod omnis non! Eos quod, eum distinctio non debitis
            repellat!
          </p>
          <a href="peoplemakeglasgow.com">More info</a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image-top"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=1200&h=-1&s=1"
          alt="Manchester"
        />
        <div className="card-body">
          <h1 className="card-title">Manchester</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            reprehenderit necessitatibus quasi soluta quo aliquid. Labore velit,
            neque distinctio suscipit consequatur culpa illum odio quas sed
            consequuntur natus, earum accusamus!
          </p>
          <a href="visitmanchester.com">More info</a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image-top"
          src="https://i2-prod.manchestereveningnews.co.uk/incoming/article24338807.ece/ALTERNATES/s615/0_Manchester-City-Centre-GVs.jpg"
          alt="london"
        />
        <div className="card-body">
          <h1 className="card-title">London</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            exercitationem autem veritatis modi illum? Reprehenderit iure quos
            expedita possimus! Perferendis tempore beatae illum ullam accusamus
            placeat velit officia ad voluptate.
          </p>
          <a href="visitlondon.com">More info</a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCard;
