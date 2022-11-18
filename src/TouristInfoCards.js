import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="wrapper">
      <div className="card">
        <h2>Glasgow</h2>
        <img src="/images/Glasgow.jpg" alt="Glasgow" className="card-img-top" />
        <div className="card-body">
          <p>
            It has a legendary music scene with many iconic venues and an
            exciting calendar of world-class festivals and events. As a UNESCO
            City of Music, Glasgow is a creative and cultural hub, home to all
            but one of Scotland's national performing arts organisations.
          </p>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <h2>London</h2>
        <img src="/images/London.jpg" alt="London" className="card-img-top" />
        <div className="card-body">
          <p>
            London is bustling, vibrant, multicultural and cosmopolitan. London
            is both old and new, a place where traditional pubs rub shoulders
            with the newest cocktail bars.
          </p>
          <a href="visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <h2>Manchester</h2>
        <img
          src="/images/Manchester.jpg"
          alt="Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Manchester is famous for being the first industrialised city in the
            world. Manchester was responsible for the country's first ever
            working canal in 1761 and the world's first ever railway line in
            1830.
          </p>
          <a href="visitmanchester.com" className="btn btn-primary">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
