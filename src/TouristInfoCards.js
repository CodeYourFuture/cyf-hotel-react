import React from "react";

function TouristInfoCards() {
  const places = [
    {
      name: "manchester",
      link: "https://visitmanchester.com",
      image:
        "https://www.visitbritain.com/sites/default/files/styles/consumer_vertical_hero__1920x1080/public/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg?itok=xS8QOYbJ",
      alt: "image of manchester"
    },
    {
      name: "glasgow",
      link: "https://peoplemakeglasgow.com",
      image:
        "https://img.gs/vvjnmlqfld/756/https://www.conferences-uk.org.uk/logos/university-of-glasgow-image-12006-main-big.jpg",
      alt: "image of glasgow"
    },
    {
      name: "london",
      link: "https://visitlondon.com",
      image:
        "http://sagitterone.co.uk/wp-content/uploads/2016/11/westminster-palace-big-ben-london-wallpaper-1200x600.jpg",
      alt: "image of london"
    }
  ];

  return (
    <div>
      {places.map(placeObject => {
        return (
          <div className="card">
            <img
              src={`${placeObject.image}`}
              className="card-img-top"
              alt={`${placeObject.alt}`}
            />
            <div className="card-body">
              <a
                href={`https//:www.${placeObject.link}`}
                className="btn btn-primary"
              >
                Take me to {placeObject.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
