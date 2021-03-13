import React from "react";

function TouristInfoCards() {
  const cities = ["Manchester", "London", "Glasgow"];
  return (
    <>
      {cities.map(city => (
        <div className="card">
          <img src="" className="card-img-top" />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              {city}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default TouristInfoCards;
