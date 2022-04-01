import React from "react";

const TouristInfoCards = () => {
  const locations = [
    {
      name: "Glasgow",
      link: "peoplemakeglasgow.com",
      img: "https://media.timeout.com/images/105400989/750/422/image.jpg"
    },
    {
      name: "Manchester",
      link: "visitmanchester.com",
      img:
        "https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg"
    },
    {
      name: "London",
      link: "visitlondon.com",
      img:
        "https://www.workspace.co.uk/media/locations/shutterstock_417036388.jpg?width=1920&height=800&mode=crop&format=jpeg&quality=60&v=202012161829"
    }
  ];

  return (
    <div>
      {locations.map(locationObject => {
        return (
          <div className="card">
            <img src={locationObject.img} className="card-img-top" />
            <div className="card-body">
              <a
                target="#locationObject.link"
                href={`https://www.${locationObject.link}`}
                className="btn btn-primary"
              >
                Take me to {locationObject.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
