import React from "react";

function TouristInfoCards() {
  const glasgow = "https://freesvg.org/storage/img/thumb/1367392627.png";
  const london = "https://freesvg.org/storage/img/thumb/BigBen.png";
  const manchester =
    "https://freesvg.org/storage/img/thumb/egonpin-Triunfo-Nocturno.png";
  return (
    <div className="threeCards">
      <div className="card">
        <img src={glasgow} className="card-img-top" alt="glasgow" />
        <div className="card-body">
          <p>
            Glasgow is the most populous city in Scotland, and the third most
            populous city in the United Kingdom, as of the 2019 estimated city
            population of 611,748.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img src={manchester} className="card-img-top" alt="manchester" />
        <div className="card-body">
          <p>
            Manchester is a city and metropolitan borough in Greater Manchester,
            England. It has a population of 547,627 as of 2018 . It lies within
            the United Kingdom's second-most populous urban area, with a
            population of 2.5 million[8] and third-most populous metropolitan
            area, a population of 3.3 million.
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img src={london} className="card-img-top" alt="london" />
        <div className="card-body">
          <p>
            London is the capital and largest city of England and the United
            Kingdom. The city stands on the River Thames in the south-east of
            England, at the head of its 50-mile (80 km) estuary leading to the
            North Sea. London has been a major settlement for two millennia.
          </p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
