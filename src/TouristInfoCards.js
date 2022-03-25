import React from "react";

const TouristInfoCards = () => {
  const locations = [
    { name: "glasgow", link: "peoplemakeglasgow.com" },
    { name: "manchester", link: "visitmanchester.com" },
    { name: "london", link: "visitlondon.com" }
  ];
  return (
    <div>
      {locations.map(locationObject => {
        return (
          <div className="card">
            <img src="..." className="card-img-top" />
            <div className="card-body">
              <a
                target="#locationObject.link"
                href={`https://www.${locationObject.link}`}
                className="btn btn-primary"
              >
                Go somewhere like
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
