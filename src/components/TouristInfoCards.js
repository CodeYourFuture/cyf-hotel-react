import React from 'react';

const TouristInfoCards = ({citiesData}) => {
  return (
    <div className="container">
      <div className="row">
        {citiesData.map((city, index) => (
          <div className="card mr-1 mt-2 col-12 col-md-3" key={index}>
            <div className="card-body text-center">
              <img
                src={city.img.src}
                className={city.img.className}
                alt={city.img.alt}
              />
              <a
                href={city.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-3"
              >
                {city.city}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristInfoCards;
