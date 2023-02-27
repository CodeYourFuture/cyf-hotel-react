import React from "react";

// /we're going to create a PROPS function as this will let us to REUSE the funtion and minimazed our code

const TouristCardData = (props) => {
    console.log(props)
// insert all DATA in one , in this case we need to store img,title,description,link
    return (
        <div className="card-container">
            {props.cities.map(city => <div className="cardData">
        <img src={city.image}></img>
        <div className="info">
            <h2 className="place">{city.title}</h2>
            <p className="summary"> {city.description}</p>
            <a href={city.link} className="link" target="_blank" type="button">
                More Information
            </a>
        </div>     
    </div>)}
            
        </div>
    
    );
};

export default TouristCardData;