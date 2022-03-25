import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-container">
      <div className="card text-center">
        <img
          src="https://media.timeout.com/images/105400989/750/422/image.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card text-center">
        <img
          src="https://media.timeout.com/images/105798074/750/422/image.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card text-center">
        <img
          src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg?imwidth=700"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <a href="http://visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
