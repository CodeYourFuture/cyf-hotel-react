import React from "react";

const TouristInfoCards = () => (
  <div className="TouristInfoCards">
    <div className="Card">
      <img
        className="CardImage"
        alt="glasgow street art"
        src="https://www.scotsmagazine.com/wp-content/uploads/sites/7/2020/08/Screenshot-2020-08-28-at-14.15.33.png"
        width="282"
        height="250"
      />
      <div className="CardBody">
        <h1>Glasgow</h1>
        <p>
          Glasgow is Scotland’s largest city, and it forms an independent
          council area that lies entirely within the historic county of
          Lanarkshire.
        </p>
        <a
          href="https://peoplemakeglasgow.com/"
          className="CardButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Glasgow
        </a>
      </div>
    </div>
    <div className="Card">
      <img
        className="CardImage"
        alt="manchester street art"
        src="http://jenikya.com/blog/manchester-streetart2019-12.jpg"
        width="282"
        height="250"
      />
      <div className="CardBody">
        <h1>Manchester</h1>
        <p>
          Manchester is the nucleus of the largest metropolitan area in the
          north of England, and is an important regional city.
        </p>
        <a
          href="https://www.visitmanchester.com/"
          className="CardButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Manchester
        </a>
      </div>
    </div>
    <div className="Card">
      <img
        className="CardImage"
        alt="london street art"
        src="https://thesanetravel.com/images/Travels/_1-London-Street-art/26street-art-london-thesanetravel.com-1650418.jpg"
        width="282"
        height="250"
      />
      <div className="CardBody">
        <h1>London</h1>
        <p>
          London is by far the UK's largest metropolis, and also serves as its
          economic, transportation, and cultural centre.
        </p>
        <a
          href="https://www.visitlondon.com/"
          className="CardButton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit London
        </a>
      </div>
    </div>
  </div>
);

export default TouristInfoCards;
