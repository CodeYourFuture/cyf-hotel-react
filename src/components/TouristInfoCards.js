import React from "react";

function TouristInfoCards() {
  const citiesArr = [
    {
      name: "Glasgow",
      img:
        "https://cdn.pixabay.com/photo/2019/02/16/18/23/pollock-4000724_1280.jpg",
      link: "https://peoplemakeglasgow.com/"
    },
    {
      name: "Manchester",
      img:
        "https://image.shutterstock.com/image-photo/water-way-canal-area-manchester-600w-681062626.jpg",
      link: "https://visitmanchester.com/"
    },
    {
      name: "London",
      img:
        "https://image.shutterstock.com/image-photo/big-ben-westminster-bridge-red-600w-583939735.jpg",
      link: "https://visitlondon.com/"
    }
  ];

  return (
    <div className="row">
      {citiesArr.map((city, index) => (
        <div className="col-sm-4" key={index}>
          <div className="card ml-auto mr-auto mt-3">
            <img src={city.img} className="card-img-top" alt={city.name} />
            <div className="card-body">
              <a href={city.link} className="btn btn-primary">
                {city.name}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristInfoCards;
