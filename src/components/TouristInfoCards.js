import React from "react";
import "./TouristInfoCards.css";

const TouristInfoCards = () => {
  let TouristInfo = [
    {
      link:
        "https://www.visitlondon.com/things-to-do/sightseeing/london-attraction/big-ben",
      image:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      destination: "The Big Ben"
    },
    {
      link: "https://www.towerbridge.org.uk/plan-your-visit",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      destination: "London Bridge"
    },
    {
      link: "https://www.londoneye.com/",
      image:
        "https://images.unsplash.com/photo-1522961881734-7df1e2635d0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      summary:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      destination: "London Eye"
    }
  ];

  return (
    <div className="flex cardsParent">
      {TouristInfo.map((hotel, index) => {
        return (
          <div key={index} className="card">
            <img alt="" src={hotel.image} className="card-img-top" />
            <div className="card-body">
              <p>{hotel.summary}</p>
              <a href={hotel.link} className="btn btn-primary">
                Visit {hotel.destination}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
