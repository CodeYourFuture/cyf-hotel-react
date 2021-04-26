import React from "react";

const TouristInfoCard = () => {
  const cities = [
    {
      name: "Glasgow",
      img:
        "https://www.planetware.com/photos-large/SCO/scotland-glasgow-university-of-glasgow-hunterian-museum.jpg",
      link: "peoplemakeglasgow.com"
    },
    {
      name: "Manchester",
      img:
        "https://www.planetware.com/photos-large/ENG/england-manchester-castlefield.jpg",
      link: "visitmanchester.com"
    },
    {
      name: "London",
      img:
        "https://www.planetware.com/photos-large/ENG/london-top-attractions-trafalgar-square.jpg",
      link: "visitlondon.com"
    }
  ];
  return (
    <>
      <div className="card-group">
        {cities.map((city, index) => (
          <div key={index} className="card">
            <div className="overflow">
              <img
                key={city.img}
                src={city.img}
                className="card-img-top"
                alt="location"
              />
            </div>
            <div className="card-body">
              <h2 key={city.name} className="carder-title">
                {city.name}
              </h2>
              <a key={city.link} href={city.link} className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TouristInfoCard;
