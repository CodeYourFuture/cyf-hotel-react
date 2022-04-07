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
          <p>
            The city is also rich in artists and creators which makes for a
            thriving and exciting independent shopping scene.
          </p>
          <a href="http://peoplemakeglasgow.com" className="btn btn-info">
            Glasgow
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
          <p>
            Known throughout the world as the birthplace of the industrial
            revolution, Manchester has a proud history in science, politics,
            music, arts and sport.
          </p>
          <a href="http://visitmanchester.com" className="btn btn-info">
            Manchester
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
          <p>
            Welcome to London! Visit London, from iconic sightseeing spots and
            fun-filled days out to top restaurants, theatre and unmissable
            London events.
          </p>
          <a href="http://visitlondon.com" className="btn btn-info">
            London
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
