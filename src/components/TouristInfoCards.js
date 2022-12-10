import React from "react";

const cardData = [
  {
    id: 1,
    title: "Glasgow",
    img:
      "https://images.unsplash.com/photo-1621519604512-85ea63c15ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc2dvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc:
      "Glasgow is the largest city in Scotland, and third largest in the United Kingdom.",
    link: "https://peoplemakeglasgow.com/"
  },

  {
    id: 2,
    title: "Manchester",
    img:
      "https://images.unsplash.com/photo-1597740049284-388659a41286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2hlc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc:
      "Manchester is a city and metropolitan borough in Greater Manchester, England, with a population of 530,300 as of 2019.",
    link: "https://visitmanchester.com/"
  },

  {
    id: 3,
    title: "London",
    img:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc:
      "London is the capital and largest city of England and the United Kingdom.",
    link: "https://visitlondon.com/"
  }
];

function TouristInfoCards() {
  return (
    <div className="cities">
      {cardData.map(city => {
        const { id, title, img, desc, link } = city;
        return (
          <div key={id} className="card">
            <img src={img} className="card-img-top" />
            <h2 className="title">{title}</h2>
            <div className="card-body card-para">
              <p>{desc}</p>
              <a href={link} target="_blank" className="btn btn-info">
                Read More
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TouristInfoCards;
