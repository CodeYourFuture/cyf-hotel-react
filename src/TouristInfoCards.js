import React from "react";

const TouristInfoCards = (props) => {

   const card = props.cards.map ((element,index) =>(
      <div className="card" key={index} >
        <img src={element.image} className="card-img-top"/>
        <h1>{element.city}</h1>
        <p>{element.description}</p>
        <div className="card-body">
            <a href={element.buttonLink}
               className = "btn btn-primary"
               target="_blank"
               >
                More Information
            </a>
        </div>
      </div>
   ));

    return (
      <div className="cards-wrapper">
        {card}
      </div>
    );
};

export default TouristInfoCards;