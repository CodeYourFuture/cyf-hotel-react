import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="cardsContainer">
      {props.cities.map(city => {
        return (
          <div className="card">
            <img
              src={city.imageSrc}
              className="card-img-top"
              alt={city.imageAlt}
            />
            <div className="card-body">
              <h5 className="card-title">{city.city}</h5>
              <p className="card-text" />
              <a href={city.linkHref} className="btn btn-primary">
                Explore {city.city}
              </a>
            </div>

            {/* <div className="card">
        <img
          src="https://th.bing.com/th/id/OIP.KeXgzPo6w9UcVqCPPsECAAHaFj?w=214&h=180&c=7&o=5&dpr=2&pid=1.7"
          className="card-img-top"
          alt="manchesterPhoto"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text" />
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            Explore Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://th.bing.com/th/id/OIP.vnPp4X0EDGjXpxV1uyA0cgHaEo?w=254&h=180&c=7&o=5&dpr=2&pid=1.7"
          className="card-img-top"
          alt="londonPhoto"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text" />
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            Explore London
          </a>
        </div>
      </div>*/}
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
