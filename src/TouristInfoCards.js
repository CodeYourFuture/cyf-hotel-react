import React from "react";

function TouristInfoCards() {
  const places = [
    {
      name: "Manchester",
      link: "https://visitmanchester.com",
      image:
        "https://keystone-property.com/wp-content/uploads/2019/01/Manchester.jpg",
      alt: "image of manchester",
      description:
        "Shaped by its success during the Industrial Revolution of the 19th century, Manchester’s strong, pioneering character endures today. Only now its achievements also include shaking up the music scene, nurturing artistic creativity and hosting international sporting events. Manchester is a city that looks to the future with a passion for progress, and warmly invites you to share in its vision and vitality."
    },
    {
      name: "Glasgow",
      link: "https://peoplemakeglasgow.com",
      image:
        "https://peoplemakeglasgow.com/assets/general/_1200x600_crop_center-center_none/East-End-Glasgow-Cathedral-Header.jpg",
      alt: "image of glasgow",
      description:
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene."
    },
    {
      name: "London",
      link: "https://visitlondon.com",
      image:
        "http://sagitterone.co.uk/wp-content/uploads/2016/11/westminster-palace-big-ben-london-wallpaper-1200x600.jpg",
      alt: "image of london",
      description:
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the entire city."
    }
  ];

  return (
    <div className="cards">
      {places.map(placeObject => {
        return (
          <div className="card">
            <img
              src={placeObject.image}
              className="card-img-top"
              alt={placeObject.alt}
            />

            <div className="city-description">
              <p className="description">{placeObject.description}</p>
            </div>

            <div className="card-body">
              <a href={placeObject.link} className="btn btn-primary">
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
