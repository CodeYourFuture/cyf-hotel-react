import React from "react"
const TouristsInfoCards = (props) => {
    return (
    < div class="card" style= {{width: "18rem"}}>
    <img src={props.image} class="card-img-top" alt={props.altText}/>
    <div class="card-body">
      <h5 class="card-title">{props.city}</h5>
      <p class="card-text">{props.mainText}</p>
      <a href= {props.website} target="_blank" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>)
    }
export default TouristsInfoCards;
