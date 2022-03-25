import React from "react";

function TouristInfoCards() {
  const places = [
    { name: "Glasgow", link: "peoplemakeglasgow.com" },
    { name: "Manchester", link: "visitmanchester.com" },
    { name: "London", link: "visitlondon.com" }
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
