import React from "react";

const TouristInfoCards = () => {
  const places = [
    {
      name: "Glasgow",
      img: {
        src:
          "https://www.whatsonnetwork.co.uk/uploads/800x600/251d1ca49b01dd9048ef9967e46bf339.jpg",
        alt: "Glasgow scene"
      },
      link: "https://peoplemakeglasgow.com",
      info:
        " Glasgow is Scotland’s largest city and is easily accessible from the rest of the UK and overseas by train, sea, road and air.You could easily fill your time exploring the different neighbourhoods, and enjoying the amazing shopping, dining and attractions in Glasgow."
    },
    {
      name: "Manchester",
      img: {
        src:
          "https://static.independent.co.uk/2021/11/03/15/ManchesterRecoveryCampaign-32.jpg?quality=75&width=982&height=726&auto=webp",
        alt: "Manchester scene"
      },
      link: "https://visitmanchester.com",
      info:
        "Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed."
    },

    {
      name: "London",
      img: {
        src:
          "https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/4:3/w_768/london-travel-guide-lede.jpg",

        alt: "London scene"
      },
      link: "https://visitlondon.com",
      info:
        "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events."
    }
  ];
  return (
    <div className="card-container">
      {places.map(place => {
        return (
          <div className="card">
            <img src={place.img.src} className="card-img-top" />
            <div className="card-body">
              <h2>{place.name}</h2>
              <p>{place.info}</p>
              <a href={place.link} className="btn btn-primary">
                Go {place.name}{" "}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
