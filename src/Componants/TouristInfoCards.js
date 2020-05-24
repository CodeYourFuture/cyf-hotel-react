import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card">
      <div className="card-body">
        <img
          src="https://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2014/02/Glasgow-3.jpg"
          className="card-img-top"
        />
        <a
          href="https://peoplemakeglasgow.com"
          target="_blank"
          className="btn btn-primary"
        >
          Glasgow
        </a>
      </div>

      <div className="card-body">
        <img
          src="https://media.timeout.com/images/105400776/630/472/image.jpg"
          className="card-img-top"
        />
        <a
          href="https://visitmanchester.com"
          target="_blank"
          className="btn btn-primary"
        >
          Manchester
        </a>
      </div>

      <div className="card-body">
        <img
          src="https://www.fodors.com/assets/destinations/2869/tower-bridge-london-england_980x650.jpg"
          className="card-img-top"
        />
        <a
          href="https://visitlondon.com"
          target="_blank"
          className="btn btn-primary"
        >
          London
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
