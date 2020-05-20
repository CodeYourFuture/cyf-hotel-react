import React from "react";

const TouristInfoCards = () => {
  const cardN = [
    {
      City: "Glasgow",
      web: "http://www.peoplemakeglasgow.com",
      pic:
        "https://lh3.googleusercontent.com/proxy/t3Pj4lLy3lNlrFyujcOcdMpMoRujPucKB9By4lcHQT3pdqKoKPu0HsC9NQJMwItvNetIjhNNCmab57kFca5F9CXE8VBgyZMMNPykiya94yDRyD4lruQHnfyb4wujdGZTp7PS"
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
