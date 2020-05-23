import React from "react";

const TouristInfoCards = () => {
  const cityData = [
    {
      cityName: "Glasgow",
      imgSource:
        "https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg",
      cityUrl: "https://peoplemakeglasgow.com/"
    },
    {
      cityName: "Manchester",
      imgSource:
        "https://downtowninbusiness.com/wp-content/uploads/2018/05/Manchester-a-young-city.jpg",
      cityUrl: "https://www.visitmanchester.com/"
    },
    {
      cityName: "London",
      imgSource:
        "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
      cityUrl: "https://www.visitlondon.com/"
    }
  ];
  return (
    <div className="cards">
      {cityData.map((city, index) => {
        return (
          <div className="card" key={index}>
            <img
              className="card-img-top"
              src={city.imgSource}
              alt="this is city pic"
            />
            <div className="card-body">
              <a href={city.cityUrl} className="btn btn-primary">
                {city.cityName}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
