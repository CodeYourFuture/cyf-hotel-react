import React from "react";

const TouristInfo = [
  {
    title: "Glasgow",
    image: "https://media.timeout.com/images/105400989/1920/1080/image.jpg",
    info: "Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area. The city is also rich in artists and creators which makes for a thriving and exciting independent shopping scene.",
    link: "https://peoplemakeglasgow.com",
  },
  {
    title: "Manchester",
    image:
      "https://www.propertyreporter.co.uk/images/660x350/manchester_895-14609.jpg",
    info: "Welcome to the official tourism site of Greater Manchester where you can search for things to do in Manchester and find out what's on, as well as getting inspiration for your visit to this fantastic city region.",
    link: "https://visitmanchester.com",
  },
  {
    title: "London",
    image:
      "https://www.citysparespace.com/wp-content/uploads/2023/02/london.jpeg",
    info: "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.",
    link: "https://visitlondon.com",
  },
];

const TouristInfoCards = () => {
  return (
    <div id="home" className="container my-4" style={{ paddingTop: "50px" }}>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {TouristInfo.map((card, id) => {
          return (
            <div key={id} className="col">
              <div className="card h-100 border-0 shadow">
                <img
                  src={card.image}
                  className="card-img-top"
                  alt={card.title}
                />
                <div className="card-body d-flex flex-column">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-text flex-grow-1">{card.info}</p>
                  <a
                    href={card.link}
                    className="btn btn-primary mt-auto stretched-link btn-custom"
                  >
                    More Information
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TouristInfoCards;
