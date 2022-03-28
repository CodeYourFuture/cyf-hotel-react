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
      link: "https://peoplemakeglasgow.com"
    },
    {
      name: "Manchester",
      img: {
        src:
          "https://static.independent.co.uk/2021/11/03/15/ManchesterRecoveryCampaign-32.jpg?quality=75&width=982&height=726&auto=webp",
        alt: "Manchester scene"
      },
      link: "https://visitmanchester.com"
    },

    {
      name: "London",
      img: {
        src:
          "https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/4:3/w_768/london-travel-guide-lede.jpg",

        alt: "London scene"
      },
      link: "https://visitlondon.com"
    }
  ];
  return (
    <div className="card-container">
      {places.map(place => {
        return (
          <div className="card">
            <img src={place.img.src} className="card-img-top" />
            <div className="card-body">
              <a href={place.link} className="btn btn-primary">
                Go {place.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
