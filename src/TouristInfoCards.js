import React from "react";

const TouristInfoCards = () => {
  const cities = [
    {
      name: "London",
      img:
        "https://media-exp1.licdn.com/dms/image/C511BAQHPNW93J97PKA/company-background_10000/0?e=2159024400&v=beta&t=HaJQ7Gn5LImNG12bGlGvij6-v_SlyWxxRuNHhhCGJF4",
      link: "http://visitlondon.com"
    },
    {
      name: "Manchester",
      img:
        "https://image.shutterstock.com/image-photo/beautiful-skyline-salford-quays-manchester-600w-196338704.jpg",
      link: "http://visitmanchester.com"
    },
    {
      name: "Glasgow",
      img:
        "https://events.climateaction.org/sustainable-innovation-forum/wp-content/uploads/DJI_00181-scaled.jpg",
      link: "http://peoplemakeglasgow.com"
    }
  ];
  return (
    <div className="cardsContainer">
      {cities.map((city, index) => {
        return (
          <div key={index} className="card">
            <h1>{city.name}</h1>
            <img src={city.img} className="card-img-top" />
            <div className="card-body">
              <a href={city.link} className="btn btn-primary">
                {city.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
