import React from "react";

const TouristInfoCards = () => {
  return (
    <div
      className="Wrapper"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="card">
        <img
          src="https://www.aboutmanchester.co.uk/wp-content/uploads/2020/06/DDCCD1FC-B7A7-4939-9EE1-8BD9274D8CCB.jpeg"
          alt="Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Youthful, diverse, energetic and bursting with character; Manchester
            is one of the most exciting places to visit in the UK right now
            where everybody and anybody is very warmly welcomed. Known
            throughout the world as the birthplace of the industrial revolution,
            Manchester has a proud history in science, politics, music, arts and
            sport. And today the city combines this heritage with a progressive
            vision to be a city that delivers surprise and delight in equal
            measures.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Let's go to Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.businessgreen.com/api/v1/wps/3b5f3e2/b7c8bef6-be02-4c9c-915f-414df7fdf1e6/9/Glasgow-CreditMarioGuti-580x358.jpg"
          alt="Glasgow"
          className="card-img-top"
        />

        <div className="card-body">
          <p>
            From independent stores to high street retailers, Glasgow is the
            best shopping city. Glasgow's city centre is home to flagship
            stores, impressive shopping centres and designer favourites all
            within an easily walkable area. The city is also rich in artists and
            creators which makes for a thriving and exciting independent
            shopping scene.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Let's go to Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          style={{ height: "130px" }}
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876"
          alt="London"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a
            href="https://visitlondon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Let's go to London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
