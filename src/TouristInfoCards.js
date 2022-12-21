import React from "react";

let cardAttributes = [
  {
    img:
      "https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    city: "Glasgow",
    src: "http://peoplemakeglasgow.com",
    text:
      "is a city in scotland and it is the capital and largest city of scotland "
  },
  {
    img:
      "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    city: "Manchester",
    src: "http://visitmanchester.com",
    text:
      " is the city in the north of United Kingdom popular for its football team 'Manchester United"
  },
  {
    img:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    city: "London",
    src: "http://visitlondon.com",
    text:
      " is the capital of United Kingdom where you can find museum,library and palaceand has many attarctions."
  }
];

const TouristInfoCards = () => {
  return (
    <div className="tourist-cards">
      {cardAttributes.map((attribute, index) => (
        <div className="card" key={index}>
          <img
            src={attribute.img}
            className="card-img-top"
            alt="{attribute.city} city"
          />
          <p className="card-text">
            {attribute.city}
            {attribute.text}
          </p>

          <div className="card-body">
            <a href={attribute.src} target="_blank" className="btn btn-primary">
              Visit {attribute.city}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
