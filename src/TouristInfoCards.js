import React from "react";

const TouristInfoCards = () => {
  const cardN = [
    {
      City: "Glasgow",
      web: "http://www.peoplemakeglasgow.com",
      pic:
        "https://d1v9sz08rbysvx.cloudfront.net/careers/media/assets/shutterstock_10061808040-glasgow-town.jpg?ext=.jpg"
    },
    {
      City: "Manchester",
      web: "http://www.visitmanchester.com",
      pic:
        "https://www.shoosmiths.co.uk/-/media/images/locations/manchester.jpg"
    },
    {
      City: "London",
      web: "http://www.visitlondon.com",
      pic:
        "https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg"
    }
  ];

  return (
    <div className="card1">
      {cardN.map((Element, index) => {
        return (
          <div className="card" key={index}>
            <img src={Element.pic} className="card-img-top" />
            <div className="card-body">
              <a href={Element.web} className="btn btn-primary">
                GO TO {Element.City}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
