import React from "react";


const TouristInfoCards = props => {
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img src={props.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a href={props.link} class="btn btn-primary">
                    Explore
       </a>
            </div>
        </div>
    );
};



export default TouristInfoCards;