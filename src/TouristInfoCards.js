import React from "react";

var CityCards = [
  {
    city: "Glasgow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Glasgow_new_montage%2C_2017.jpg/290px-Glasgow_new_montage%2C_2017.jpg",
    url: "http://peoplemakeglasgow.com"
  },

  {
    city: "Manchester",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Manchester_Montage_2017.jpg",
    url: "http://visitmanchester.com"
  },
  {
    city: "London",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/275px-London_Montage_L.jpg",
    url: "http://visitlondon.com"
  }
];

const TouristInfoCards = () => {
  return (
    <div class="allCards">
      {CityCards.map(element => {
        return (
          <div className="card">
            <h4>{element.city}</h4>
            <img src={element.image} className="card-img-top" />
            <div className="card-body">
              <a href={element.url} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
