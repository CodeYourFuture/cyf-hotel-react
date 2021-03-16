import React from "react";

function TouristInfoCards() {
  const cities = [
    {
      city: "Manchester",
      image:
        "https://cdn1.matadornetwork.com/blogs/1/2020/01/Gay-village-alongside-Canal-street-in-Manchester-England-1200x853.jpg",
      website: "https://www.visitmanchester.com/"
    },
    {
      city: "London",
      image:
        "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
      website: "https://visitlondon.com/"
    },
    {
      city: "Glasgow",
      image:
        "https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg",
      website: "https://peoplemakeglasgow.com/"
    }
  ];
  return (
    <div className="cities-cards">
      {cities.map(item => (
        <div className="card">
          <h5>{item.city}</h5>
          <img src={item.image} className="card-img-top" />
          <div className="card-body">
            <a href={item.website} className="btn btn-primary">
              {item.city}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristInfoCards;
