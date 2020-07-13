import React from "react";

const TouristInfoCards = () => {
  let TouristInfo = [
    {
      link: "https://peoplemakeglasgow.com",
      image:
        "https://images.unsplash.com/photo-1531152369337-1d0b0b9ef20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      summary:
        "With amazing architecture, shopping, tours, trails & more, now's the time to discover Glasgow. "
    },
    {
      link: "https://visitmanchester.com",
      image:
        "https://images.unsplash.com/photo-1580841896374-96ff5ea79689?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      summary:
        "Find your space and reconnect with Manchester – discover what’s on your doorstep to explore..."
    },
    {
      link: "https://visitlondon.com",
      image:
        "https://images.unsplash.com/photo-1581279218402-2c82762e4779?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
      summary:
        "Find things to do in London, days out in London, London attractions and sightseeing and more"
    }
  ];

  return (
    <div className="card-container">
      <div className="card-deck">
        {TouristInfo.map((hotel, index) => {
          return (
            <div key={index} className="card">
              <img alt="" src={hotel.image} className="card-img-top" />
              <div className="card-body">
                <p>{hotel.summary}</p>
                <a href={hotel.link} className="btn btn-primary">
                  For more info
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TouristInfoCards;
