import React from "react";

function TouristInfoCards(props) {
  let newCards=props.card.map((el,index) => (
    <div key={index}>
        <div className="card">
            <img src = {el.image} alt="city" className="card-img-top"/>
            <p> {el.name}</p>
            <p> {el.description}</p>
            <div className="card-body">
              <a href={el.url} className="btn btn-primary" >More about {el.name}</a>
            </div>
        </div>
    </div>
  ));

  return <div className="card-container">{newCards}</div>
}

export default TouristInfoCards;