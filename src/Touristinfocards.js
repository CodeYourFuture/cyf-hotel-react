import React from "react";
function TouristInfoCards() {
  const cities = [
    {
      city: " Glasgow",
      image:
        "https://static01.nyt.com/images/2016/04/26/t-magazine/26tmag-glasgow-slide-DWBL/26tmag-glasgow-slide-DWBL-videoSixteenByNineJumbo1600.jpg",
      website: "https://peoplemakeglasgow.com"
    },
    {
      city: "Manchester",
      image: "https://i.ytimg.com/vi/d6wfxBGK8hE/maxresdefault.jpg",
      website: "https://visitmanchester.com"
    },
    {
      city: "London",
      image: "https://c2.staticflickr.com/4/3778/12037742906_06ccd902d2_b.jpg",
      website: "https://visitlondon.com"
    }
  ];
  return (
    <div className="row mx-auto">
      {cities.map((city, index) => (
        <div key={index} className="card">
          <img
            src={city.image}
            className="card-img-top"
            alt="This city has lost its soul"
          />
          <div className="card-body">
            <a href={city.website} className="btn btn-primary">
              Visit {city.city}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristInfoCards;
