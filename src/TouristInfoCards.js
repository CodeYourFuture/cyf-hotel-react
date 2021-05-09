import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-group">
      <div className="card">
        <img
          src="https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg"
          className="card-img-top"
          alt="Glasgow City"
        />
        <div className="card-body">
          <p>
            Glasgow is Scotland's largest city and is renowned for its culture,
            style and the friendliness of its people. Glasgow offers a blend of
            internationally-acclaimed museums and galleries, stunning
            architecture, vibrant nightlife, fantastic shopping and a diverse
            array of restaurants and bars.
          </p>
          <a
            href="https://peoplemakeglasgow.com/glasgow-now"
            className="btn btn-primary"
          >
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.aboutmanchester.co.uk/wp-content/uploads/2020/03/manchester-cityscape01-696x392.jpg"
          className="card-img-top"
          alt="Manchester City"
        />
        <div className="card-body">
          <p>
            Youthful, diverse, energetic and bursting with character; Manchester
            is one of the most exciting places to visit in the UK where
            everybody is very warmly welcomed. Known throughout the world as the
            birthplace of the industrial revolution, Manchester has a proud
            history in science, politics, music, arts and sport.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.musement.com/cover/0002/49/big-ben-westminster-bridge-on-river-thames-in-london-jpg_header-148518.jpeg"
          className="card-img-top"
          alt="London City"
        />
        <div className="card-body">
          <p>
            London, city, capital of the United Kingdom. It is among the oldest
            of the world's great cities—its history spanning nearly two
            millennia—and one of the most cosmopolitan. By far Britain's largest
            metropolis, it is also the country's economic, transportation, and
            cultural centre.
          </p>
          <a href="https://visitlondon.com/" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
