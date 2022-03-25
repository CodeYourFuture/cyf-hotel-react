import React from "react";

function TouristInfoCards() {
  const places = [
    { city: "Glasgow", link: "peoplemakeglasgow.com" },
    { city: "Manchester", link: "visitmanchester.com" },
    { city: "London", link: "visitlondon.com" }
  ];
  return (
    <div>
      {places.map(place => {
        return (
          <div className="card">
            <img src="..." className="card-img-top" />
            <div className="card-body">
              <a
                href={`http://www.${place.link}`}
                className="btn btn-primary"
              >{`${place.city}`}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
