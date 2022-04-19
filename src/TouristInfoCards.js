import React from "react";

function TouristInfoCards() {
  const places = [
    {
      name: "Manchester",
      link: "visitmanchester.com",
      imgLink:
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article10808428.ece/ALTERNATES/s615/JS77642064.jpg",
      alt: ""
    },
    {
      name: "Glasgo",
      link: "peoplemakeglasgow.com",
      imgLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mhkWHbQFIbcf7Hy2jplOWHTrwjQ7pe2Ykw&usqp=CAU",
      alt: ""
    },
    {
      name: "London",
      link: "visitlondon.com",
      imgLink:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg",
      alt: ""
    }
  ];
  return (
    <div>
      {places.map((placeObject, index) => {
        return (
          <div className="card" key={index}>
            <img
              src={placeObject.imgLink}
              className="card-img-top"
              alt={placeObject.alt}
            />
            <div className="card-body">
              <a
                href={`http://www.${placeObject.link}`}
                className="btn btn-primary"
              >
                Visit {placeObject.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
