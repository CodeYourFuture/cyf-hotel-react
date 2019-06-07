import React from "react";
var TouristCardsLinksAndImages = [
  {
    CityName: "Glasgow",
    Link: "https://peoplemakeglasgow.com/",
    Photo: "https://peoplemakeglasgow.com/templates/people/images/logo.png"
  },
  {
    CityName: "Manchester",
    Link: "https://www.visitmanchester.com/",
    Photo: "https://www.visitmanchester.com/dbimgs/logo(4).png"
  },
  {
    CityName: "London",
    Link: "https://www.visitlondon.com/",
    Photo: "https://cdn.londonandpartners.com/fl/assets/33374-310x174.jpg"
  }
];
const TouristInfoCards = props => {
  return (
    <div className="Card-Container">
      {props.cardContent.map((city, index) => (
        <div key={index} className="card">
          <img src={city.Photo} alt=" " className="card-img-top" />
          <div className="card-body">
            {city.CityName}
            <br />
            <a href={city.Link} className="btn btn-primary">
              Go {city.CityName}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export { TouristCardsLinksAndImages, TouristInfoCards };
