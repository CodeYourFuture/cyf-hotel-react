import React from "react";

const cities = [
  {
    name: "Glasgow",
    image:
      "https://images.unsplash.com/photo-1611605877189-b9743c2ef324?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
    info:
      "From independent stores to high street retailers, Glasgow is the best shopping city.",
    link: "https://peoplemakeglasgow.com"
  },
  {
    name: "Manchester",
    image:
      "https://images.unsplash.com/photo-1605021149343-bb75d2a2fa44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    info:
      "Youthful, diverse, energetic and bursting with character, where everybody and anybody is very warmly welcomed.",
    link: "https://visitmanchester.com"
  },
  {
    name: "London",
    image:
      "https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    info:
      "Explore the city on sightseeing tours, soak up culture at museums and galleries, or choose from the many free things to do.",
    link: "https://visitlondon.com/"
  }
];

const TouristInfoCards = () => {
  return (
    <div className="card-wrapper">
      {cities.map((city, index) => (
        <div className="card" key={index}>
          <img src={city.image} alt="city-img" className="card-img-top" />
          <div className="card-body">
            <p>{city.info}</p>
            <a
              href={city.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
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

//1. img of city x3 (Glasgw, Manny, Ldn)
//2. City name
//3. info abt city
//4. link to city page
