import React from "react";

const TouristInfoCards = () => {
  const locations = [
    {
      name: "Glasgow",
      link: "peoplemakeglasgow.com",
      img: "https://media.timeout.com/images/105400989/750/422/image.jpg",
      alt: "Glasgow city",
      text:
        "Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene."
    },
    {
      name: "Manchester",
      link: "visitmanchester.com",
      img:
        "https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg",
      alt: "Manchester city",
      text:
        "Manchester is a major city in the northwest of England with a rich industrial heritage. The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse, and visitors can trace this history at the interactive Museum of Science & Industry. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre. "
    },
    {
      name: "London",
      link: "visitlondon.com",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZQdRCAkbZrglN6zzMI9AW-sUZcDRgPub1w&usqp=CAU",
      alt: "London city",
      text:
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."
    }
  ];

  return (
    <div className="tourist-info-container">
      {locations.map(locationObject => {
        return (
          <div className="card">
            <img
              src={locationObject.img}
              alt={locationObject.alt}
              className="card-img-top"
            />
            <p className="card-body-text">{locationObject.text}</p>
            <div className="card-body">
              <a
                target="#locationObject.link"
                href={`https://www.${locationObject.link}`}
                className="btn btn-primary"
              >
                Go to {locationObject.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
