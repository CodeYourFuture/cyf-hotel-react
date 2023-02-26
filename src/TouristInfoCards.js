import React from "react";

function TouristInfoCards(props) {
  let newCards=props.card.map((el) => (
    <div>
        <div className="card">
            <img src = {el.image} alt="city" />
            <p> {el.name}</p>
            <p> {el.description}</p>
        </div>
    </div>
  ));

  return <div className="card-container">{newCards}</div>
}

export default TouristInfoCards;