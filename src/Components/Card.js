import React from 'react';
import './App.css'
const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img id="card-image" src={props.image} className="card-img-top" alt={props.city} />
            <div className="card-body">
                <h5 className="card-title">{props.city}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={props.website} className="btn btn-primary" target="_blank">{props.city}</a>
            </div>
        </div>
    )
};

export default Card;