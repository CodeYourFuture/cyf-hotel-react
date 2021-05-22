import React from "react";
const TuristInfoCards = () => {
  const cities = [
    {
      key: 0,
      cityName: "Glasgow",
      image:
        "https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80",
      link: "peoplemakeglasgow.com"
    },
    {
      key: 1,
      cityName: "Manchester",
      image:
        "https://images.unsplash.com/photo-1568835879173-5045ecf8d438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      link: "visitmanchester.com"
    },
    {
      key: 2,
      cityName: "London",
      image:
        "https://images.unsplash.com/photo-1610390558556-336bb2c4620a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      link: "visitlondon.com"
    }
  ];
  return (
    <div>
      {cities.map(city => (
        <div key={city.key} className="card">
          <img src={city.image} alt="city" className="card-img-top" />
          <h2>{city.cityName}</h2>
          <div className="card-body">
            <a
              href={city.link}
              className="btn btn-primary"
              rel="noopener noreferrer"
              target="_blank"
            >
              More Info
            </a>
          </div>
        </div>
      ))}
      <img src="" alt="" />
    </div>
  );
};

export default TuristInfoCards;
