import React from "react";

function TouristInfoCards() {
  const places = [
    {
      city: "Glasgow",
      image:
        "https://www.planetware.com/wpimages/2022/02/united-kingdom-uk-best-places-to-visit-glasgow-loch-lomond.jpg",
      link: "peoplemakeglasgow.com",
      alt: "Glasgow",
      text:
        "The Scottish city of Glasgow is a great place to visit for those who enjoy a mix of cultural attractions and the great outdoors."
    },
    {
      city: "Manchester",
      image:
        "https://www.planetware.com/wpimages/2022/02/united-kingdom-uk-best-places-to-visit-manchester-englands-football-mad-city.jpg",
      link: "visitmanchester.com",
      alt: "Manchester",
      text:
        "Manchester is often the first stop for many visitors planning to explore northern England, Scotland, or Wales. It's especially popular for fans of the sport of football."
    },
    {
      city: "London",
      image:
        "https://www.planetware.com/photos-large/ENG/uk-best-places-london.jpg",
      link: "visitlondon.com",
      alt: "London",
      text:
        "The nation's sprawling capital boasts plenty of attractions to keep you busy and beautiful resorts and hotels to make you comfortable."
    }
  ];
  return (
    <div className="cards-wrapper">
      {places.map(place => {
        return (
          <div className="card">
            <img src={place.image} className="card-img-top" alt={place.alt} />
            <div className="card-body">
              <p>{place.text}</p>
              <a
                href={`http://www.${place.link}`}
                className="btn btn-primary"
              >{`Visit ${place.city}`}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
