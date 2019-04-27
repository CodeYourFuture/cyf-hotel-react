import React from "react";

function TouristInfoCards(props) {

    return (
        <div className="row">
            {
                props.CityCards.map((city) => {
                    return (
                        <div class="card" >
                            <img src={city.imageSource} class="card-img-top" alt={city.name} />
                            <div class="card-body">
                                <h5 class="card-title">{city.name}</h5>
                                <p class="card-text">{city.cityText}</p>
                                <a href={city.link} class="btn btn-primary">Go {city.name}</a>
                            </div>
                        </div>  
                    )
                })
            }           
        </div>
      
        );
}

export default TouristInfoCards;