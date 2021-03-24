import React from "react";
const TouristInfoCards = () => {
  const cities = [
    {
      name: "Glasgow",
      image:
        "https://i1.wp.com/www.hisour.com/wp-content/uploads/2018/05/Architecture-in-Glasgow.jpg?fit=1024%2C640&ssl=1",
      website: "https://peoplemakeglasgow.com/"
    },
    {
      name: "Manchester",
      image:
        "https://assets.hs2.org.uk/wp-content/uploads/2018/03/30101135/H5A1HwPQ-unsplash-900x600.jpg",
      website: "https://visitmanchester.com/"
    },
    {
      name: "London",
      image: "https://lp-cms-production.imgix.net/2019-06/55425108.jpg",
      website: "https://visitlondon.com/"
    }
  ];
  return (
    <div className="cities">
      {cities.map((city, index) => (
        <div key={index} className="card">
          <img src={city.image} alt="city" className="card-img-top" />
          <div className="card-body">
            <a
              href={city.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Visit {city.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
