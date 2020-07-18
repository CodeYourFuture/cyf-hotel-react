import React from "react";

const infoCards = [
  {
    cityName: " Glasgow ",
    img:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3d/2c/30.jpg",
    text: " Go to Glasgow",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    cityName: " Manchester ",
    img:
      "https://www.visitmanchester.com/imageresizer/?image=%2fdbimgs%2fimg_block_home_thingstodo.jpg&action=FeaturedItems3x2",
    text: " Go to Manchester ",
    link: "https://www.visitmanchester.com/"
  },
  {
    cityName: " London ",
    img:
      "  https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKnuInN95hMl8O93eB54q88-lYe1bzyH99LA&usqp=CAU",
    text: "Go to London",
    link: "https://visitlondon.com/"
  }
];

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      {infoCards.map((card, index) => {
        return (
          <div key={index} className="card">
            <img src={card.img} alt="view" className="card-img-top" />
            <div className="card-body">
              <p>{card.text}</p>
              <a href={card.link} target="_blank" className="btn btn-primary">
                {card.cityName}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
