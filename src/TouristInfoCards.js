import React from "react";

function TouristInfoCards() {
  const places = [
    {
      name: "Manchester",
      link: "visitmanchester.com",
      imgLink:
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article10808428.ece/ALTERNATES/s615/JS77642064.jpg"
    },
    {
      name: "Glasgo",
      link: "peoplemakeglasgow.com",
      imgLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mhkWHbQFIbcf7Hy2jplOWHTrwjQ7pe2Ykw&usqp=CAU"
    },
    {
      name: "London",
      link: "visitlondon.com",
      imgLink:
        "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555943130/production/city/hero_image_11_1555943130.jpg"
    }
  ];
  return (
    <div>
      {places.map(placeObject => {
        return (
          <div className="card">
            <img src={placeObject.imgLink} className="card-img-top" />
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
