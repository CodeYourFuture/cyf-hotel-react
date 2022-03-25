import React from "react";

function TouristInfoCards() {
  const places = [
    { name: "manchester", link: "visitmanchester.com" },
    { name: "glasgo", link: "peoplemakeglasgow.com" },
    { name: "london", link: "visitlondon.com" }
  ];
  return (
    <div>
      {places.map(placeObject => {
        return (
          <div className="card">
            <img src={`...`} className="card-img-top" />
            <div className="card-body">
              <a
                href={`http://www.${placeObject.link}`}
                className="btn btn-primary"
              >
                Go somewhere like {placeObject.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
