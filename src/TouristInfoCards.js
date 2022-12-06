import React from "react";
const cardContents = [
  {
    name: "Glasgow",
    img: "https://media.timeout.com/images/105400989/750/422/image.jpg",
    text:
      "Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area.",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    name: "Manchester",
    img:
      "https://i.guim.co.uk/img/media/5bb754ed0d06b8f8b251fcddfc713c2d4269b386/0_215_6720_4032/master/6720.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=48de81fd4443948570be120817bea202",
    text:
      "Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed.",
    link: "https://www.visitmanchester.com/"
  },
  {
    name: "London",
    img:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0",
    text:
      "Welcome to London! Discover the best of London with Visit London, the official guide to England's exciting capital.",
    link: "https://visitlondon.com/"
  }
];

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      {cardContents.map(card => {
        return (
          <div className="card">
            <img src={card.img} className="card-img-top" />
            <div className="card-body">
              <p>{card.text}</p>
              <a href={card.link} target="_blank" className="btn btn-primary">
                {" "}
                {card.name}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
