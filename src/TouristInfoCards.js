import React from "react";

const cardInfo = [
  {
    link: "https://www.visitlondon.com",
    image:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/whats-on/christmas/jamie-davies-a8x39eo35be-unsplash.jpg?mw=640&hash=B4BD045F5989E8D48FE70174C0E4199E000ABD27",
    title: "London",
    info: `Be dazzled by Christmassy shop window displays, sparkling fairy
            lights and famous landmarks lit up come nightfall, on this
            night-time bus tour.`
  },
  {
    link: "https://www.peoplemakeglasgow.com",
    image:
      "https://peoplemakeglasgow.com/imager/general/249543/Events-and-Festivals_Ice-Experience-at-Elfingrove_Content-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg",
    title: "Glasgow",
    info: `With events, shopping and fantastic places to eat and drink, here is our guide to the top 21 things to do in Glasgow this winter.`
  },
  {
    link: "https://www.visitmanchester.com",
    image:
      "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FOlympic%20Parade%20nav.jpg&action=FeaturedItems3x2",
    title: "Manchester",
    info: `Welcome to the tourism site of Manchester where you can search for things to do in here and find out what's on, getting inspiration for your visit to this region.`
  }
];

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      {cardInfo.map((x, i) => {
        return (
          <a key={i} href={x.link} target="blank">
            <div className="card shadow-lg mb-5 bg-white">
              <img
                className="card-img-top"
                src={x.image}
                alt="CYF Hotel Logo"
              />
              <div className="card-body">
                <h5 className="card-title">{x.title}</h5>
                <p className="card-text">{x.info}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
