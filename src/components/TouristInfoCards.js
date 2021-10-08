import React from "react";
const TouristInfoCards = () => {
  const Card = locations.map(city => {
    return (
      <div key={city.name} className="card">
        <img className="card-image" src={city.image} alt={city.name} />
        <h2>{city.name}</h2>
        <p>{city.cityInfo}</p>
        <button className="btn-card">
          <a href={city.url} target="_blank" rel="noopener noreferrer">
            More Information
          </a>
        </button>
      </div>
    );
  });
  return <div className="card-container">{Card}</div>;
};
const locations = [
  {
    name: "London",
    image:
      "https://www.visitbritain.com/sites/default/files/styles/consumer_vertical_hero__1920x1080/public/consumer_components_enhanced/header_image/vb34141644.jpg?itok=3pp7tR6y",
    cityInfo: "Lorem Ipsum",
    url: "https://visitlondon.com"
  },
  {
    name: "Manchester",
    image:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/2/11/1423674319046/f8b554b3-fb78-406a-be40-8751e0f79288-2060x1236.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=82dab66f94e8dbad83927952b191b54d",
    cityInfo: "Lorem Ipsum",
    url: "https://visitmanchester.com"
  },
  {
    name: "Glasgow",
    image:
      "https://www.businessgreen.com/api/v1/wps/3b5f3e2/b7c8bef6-be02-4c9c-915f-414df7fdf1e6/9/Glasgow-CreditMarioGuti-580x358.jpg",
    cityInfo: "Lorem Ipsum",
    url: "https://peoplemakeglasgow.com"
  }
];

export default TouristInfoCards;
