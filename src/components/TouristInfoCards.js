import React from "react";

const cardData = [
  {
    id: 1,
    title: "Glasgow",
    img:
      "https://images.unsplash.com/photo-1594309140264-5d7a7787f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgyfHxnbGFzZ293fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc:
      "Glasgow is the largest city in Scotland, and third largest in the United Kingdom.",
    link: "https://peoplemakeglasgow.com/"
  },

  {
    id: 2,
    title: "Manchester",
    img:
      "https://images.unsplash.com/photo-1618165987743-825267de36fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkwfHxtYW5jaGVzdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc:
      "Manchester is a city and metropolitan borough in Greater Manchester, England, with a population of 530,300 as of 2019.",
    link: "https://visitmanchester.com/"
  },

  {
    id: 3,
    title: "London",
    img:
      "https://images.unsplash.com/photo-1534374950034-3644ddb72710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
