import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="all-cards">
      <div className="card">
        <img src="" className="card-img-top" alt="glasgow-infocard" />
        <div className="card-body">
          <h1>Glasgow</h1>
          <p>
            A heady mix of haunting ruins, awe-inspiring art and vibrant street
            life, Scotland's cool capital is one of the world's most romantic
            and charismatic cities.
          </p>
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Go Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="public/images/manchester-hotel.jpg"
          className="card-img-top"
          alt="manchester-infocard"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            The Midland Hotel in Manchester has been a much-loved part of this
            magnificent city's life for over 118 years. Step into its timeless
            elegance and experience award-winning restaurants and an idyllic
            urban spa.
          </p>
          <a href="http://www.visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="public/images/london-hotel.jpg"
          className="card-img-top"
          alt="london-infocard"
        />
        <div className="card-body">
          <h1>London</h1>
          <p>
            Drawing on the legacy of the greats who stayed here in decades past
            - and an inspiration to those who are yet to write their own story -
            the Hard Rock Hotel London stands alone as a haven for music lovers
            and cultural explorers everywhere. Built in one of London’s most
            central locations - on the corner of Oxford Street and Park Lane -
            the hotel puts guests just steps away from the very best England’s
            capital has to offer.{" "}
          </p>
          <a href="http://www.visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
