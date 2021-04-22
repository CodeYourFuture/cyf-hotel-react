import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container-fluid">
      <div className="card-deck touristCards">
        {/* first tourist card */}
        <div className="card text-center">
          <div
            className="card-img-top bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              src="/images/glasgow-skyline.jpeg"
              className="img-fluid"
              alt="Glasgow"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Glasgow</h5>
            <p className="card-text">
              Glasgow is a lively and friendly city brimming with personality,
              charm, and unforgettable experiences. You'll discover
              world-className tourist attractions, unique neighbourhoods,
              breathtaking architecture, an ever-changing food and drink scene,
              and legendary nightlife no matter when you come.
            </p>
            <a
              href="https://peoplemakeglasgow.com/"
              className="btn visitButton"
              target="blank"
            >
              Visit
            </a>
          </div>
        </div>
        {/* second tourist card */}
        <div className="card text-center">
          <div
            className="card-img-top bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              src="/images/manchester-city.jpg"
              className="img-fluid"
              alt="Manchester"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Manchester</h5>
            <p className="card-text">
              One of the most exciting places to visit in the UK right now, with
              a welcoming atmosphere for all. It is youthful, diverse,
              enthusiastic, and full of character. Away from the hustle and
              bustle of the city centre, the surrounding areas provide quaint
              market towns, stunning green spaces and accessible waterways.
            </p>
            <a
              href="https://visitmanchester.com/"
              className="btn visitButton"
              target="blank"
            >
              Visit
            </a>
          </div>
        </div>
        {/* third tourist card */}
        <div className="card text-center">
          <div
            className="card-img-top bg-image hover-overlay ripple"
            data-mdb-ripple-color="light"
          >
            <img
              src="/images/london-skyline.jpg"
              className="img-fluid"
              alt="London"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">London</h5>
            <p className="card-text">
              From legendary sightseeing spots, film locations, and fun-filled
              days out to top restaurants, theatre, and must-see activities.
              Music or food festivals are very popular, museums entice you to
              keep updated and diverse natural spaces within reach. There's
              always something for everyone who wants to venture out!
            </p>
            <a
              href="https://visitlondon.com/"
              className="btn visitButton"
              target="blank"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
