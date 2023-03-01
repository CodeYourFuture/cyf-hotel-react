import React from "react";

function TouristInfoCards(cities) {
  return (
    <div className="card">
      <img src={cities.pic} className="card-img-top" />
      <section className="card-body">
        <h3>{cities.name}</h3>
        <p>{cities.description}</p>
        <a href={cities.url} className="btn btn-primary">
          More about {cities.name}
        </a>
      </section>
    </div>
  );
}

export default TouristInfoCards;
