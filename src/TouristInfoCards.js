import React from "react";

const TouristInfoCards = (props) => {
    return (
        <section className='row'>
            {props.cities.map(city => {
                return (
                    <div className='xs-col-12 sm-col-4'>
                        <figure className='image-container'>
                            <img src={city.imageSource} alt={city.name} />
                        </figure>
                        <div class="card-body">
                            <h5 class="card-title">{city.name}</h5>
                            <p class="card-text">Visiting {city.name} for the first time?  We’ve come up with some ideas of things you should see and do while you are in the city - be sure to add them to your list!</p>
                            <a href={city.link} target='_blank' class="btn btn-primary">Visit {city.name}</a>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default TouristInfoCards;