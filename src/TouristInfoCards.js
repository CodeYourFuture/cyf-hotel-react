import React from "react";

export default function TouristInfoCards() {
  const cities = [
    {
      id: 0,
      placeName: " Glasgow",
      imgUrl:
        "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/Scotland/Glasgow/Glasgow-travel-AP85155025.jpg",
      websiteURL: "//peoplemakeglasgow.com"
    },
    {
      id: 1,
      placeName: "Manchester",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbXYAWCxElz0AZyFg8rhV08RPKfhHuC84KCQ&usqp=CAU",
      websiteURL: "//visitmanchester.com"
    },
    {
      id: 2,
      placeName: "London",
      imgUrl:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      websiteURL: "//visitlondon.com"
    }
  ];
  return (
    <div className="row mx-auto">
      {cities.map(city => (
        <div className="col-sm-4" key={city.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={city.imgUrl} alt="Card  cap" />
            <div className="card-body">
              <h5 className="card-title">Explore {city.placeName}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up.
              </p>
              <a href={city.websiteURL} className="btn btn-primary">
                {city.placeName}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
