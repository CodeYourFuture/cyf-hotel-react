import React from "react";

const data = [
  {
    id: 1,
    img: "",
    desc:
      "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",
    link: "http://visitlondon.com"
  },
  {
    id: 2,
    img: "images/manchester.jpg",
    desc:
      "Manchester is a major city in the northwest of England with a rich industrial heritage.",
    link: "http://visitmanchester.com"
  },
  {
    id: 3,
    img: "images/glasgow.jpg",
    desc:
      "Glasgow is a port city on the River Clyde in Scotland's western. It's famed for its Victorian and architecture.",
    link: "http://peoplemakeglasgow.com"
  }
];

function TouristInfoCards() {
  return (
    <div className="cities">
      {data.map(city => {
        const { id, img, desc, link } = city;
        return (
          <div key={id} className="card">
            <img src={img} className="card-img-top" />
            <div className="card-body card-para">
              <p>{desc}</p>
              <a href={link} target="_blank" className="btn btn-primary">
                More Info
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default TouristInfoCards;
