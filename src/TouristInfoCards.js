import React from "react";
const cities = [
  {
    id: 1,
    city: "Glasgow",
    text:
      "Glasgow recently topped Condé Nast Traveller’s list of best cities to visit in 2021 and if that’s not enough to make you want to book a break, here are some more great reasons to visit.",
    image:
      "https://peoplemakeglasgow.com/imager/general/118776/Riverside-Museum-Tall-Ship_11e6b377409ad0b26f1269c19e5bbf18.jpg",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    id: 2,
    city: "Manchester",
    text:
      "As one of the most vibrant and cosmopolitan cities in the UK, there is always something on in Manchester. With a rolling calendar of events, exhibitions, concerts, markets and theatre you will never be stuck for world-class entertainment.",
    image:
      "https://media.istockphoto.com/photos/manchester-city-centre-uk-picture-id485875436?k=20&m=485875436&s=612x612&w=0&h=_Ny7jA_avInhpNFyjxpK1vW9NvySrOrIhY9by6FuivA=",
    link: "https://www.visitmanchester.com/"
  },

  {
    id: 3,
    city: "London",
    text:
      "From the modern London Eye to the historic Tower of London, the top 10 tourist attractions in London are a must-see on any London sightseeing trip. Even better, many London landmarks are free to visit. Use the London attractions map to find them all.",
    image:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg",
    link: "https://visitlondon.com/"
  }
];

const TouristInfoCard = ({ city, text, image, link }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={image} className="card-img-top" alt="city view" />
      <div className="card-body">
        <h5 className="card-title">{city}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const TouristInfoCards = props => {
  props = cities;
  return (
    <div className="TouristInfoCards-box">
      {props.map(prop => {
        return (
          <TouristInfoCard
            key={prop.id}
            city={prop.city}
            image={prop.image}
            text={prop.text}
            link={prop.link}
          />
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
