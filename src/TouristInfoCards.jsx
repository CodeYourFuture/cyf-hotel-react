import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="TouristInfoCards">
      <div className="Card">
        <img
          className="CardImage"
          alt="photo of Glasgow"
          src="https://i0.wp.com/www.stephaniefox.co.uk/wp-content/uploads/2020/09/4FE78B9D-C5C3-4F31-A87F-423C71EB984B.jpeg?fit=800%2C706&ssl=1"
          width="250"
        />
        <div className="CardBody">
          <h1>Glasgow</h1>
          <p>
            Glasgow is Scotland’s largest city, and it forms an independent
            council area that lies entirely within the historic county of
            Lanarkshire.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            className="Glasgow"
            target="_blank"
          >
            Visit Glasgow
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
