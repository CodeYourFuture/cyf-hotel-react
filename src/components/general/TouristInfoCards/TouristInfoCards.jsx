import React from "react";
import "../../../css/infocards.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

let cities = [
  {
    cityName: "Glasgow",
    src: "https://media.timeout.com/images/105400989/750/422/image.jpg",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "https://peoplemakeglasgow.com"
  },
  {
    cityName: "Manchester",
    src:
      "https://www.charleshope.co.uk/media/1kxhvt3p/charles-hope-manchester-media-city-located-in-salford-quays.jpeg?anchor=center&mode=crop&width=768&height=415&rnd=132571845479570000",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "https://visitmanchester.com"
  },
  {
    cityName: "London",
    src:
      "https://cdn.destguides.com/files/store/itinerary/382/background_image/webp_medium_202112291737-c19de7736a5ee6d1e9fed72c408a80ec.webp",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    link: "https://visitlondon.com"
  }
];

const TouristInfoCards = () => {
  return (
    <Carousel>
      {cities.map((obj, index) => {
        return (
          <article className="city_card_container">
            <div key={index} className="city_card">
              <h1>{obj.cityName}</h1>
              <img src={obj.src} alt="" className="img_card" />
              <p>{obj.summary}</p>
              <a href={obj.link} className="info_btn">
                More Information
              </a>
            </div>
          </article>
        );
      })}
    </Carousel>
  );
};
export default TouristInfoCards;
