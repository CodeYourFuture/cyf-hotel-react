import React from "react";

function TouristInfoCards(props) {
  return (
    <div className="TouristInfoCards">
      {props.cities.map((item, index) => (
        <div key={index} className="card">
          <img src={item.imageURL} alt={item.city} className="card-img-top" />
          <div className="card-body">
            <h4>{item.city}</h4>
            <p>Blah Blah Blah Blah</p>
            <a
              href={item.link}
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Read more here
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristInfoCards;
