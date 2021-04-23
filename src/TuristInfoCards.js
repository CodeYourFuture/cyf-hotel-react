import React from "react";
const TuristInfoCards = () => {
  const cities = [
    {
      cityName: "Glasgow",
      image:
        "https://lh3.googleusercontent.com/xAd1oygV4m47kOEgYzXa2vRiYlkTphj-s4sjgU7ypEYoDmDiWZjSQNPi_AUrkpMXWfCw=s152",
      link: "peoplemakeglasgow.com"
    },
    {
      cityName: "Manchester",
      image:
        "https://lh3.googleusercontent.com/Z_5ZsWOMtkMO_78csI48eS6qWKDeqIvFIwpnLgbqxzxYJlZXT7pLbXLE36ZLE2A8B_hGCiM=s170",
      link: "visitmanchester.com"
    },
    {
      cityName: "London",
      image:
        "https://lh3.googleusercontent.com/5glheekmWX-zSi5sgDJyzHyvxg4BEWHDzct5pABAfVz9ezXBT4l0edxnfvLQ021pZ0oA=s85",
      link: "visitlondon.com"
    }
  ];
  return (
    <div>
      {cities.map(city => (
        <div className="card">
          <img src={city.image} alt="city" className="card-img-top" />
          <h2>{city.cityName}</h2>
          <div className="card-body">
            <a href={city.link} className="btn btn-primary" target="_blank">
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
