import React from "react";  



function TouristInfoCards(props) {

    return (
        <div className="card">
	<img src={props.img} className="card-img-top" />
	<div className="card-body">
        <h1>{props.name}</h1>
        <p></p>
		<a href="#" className="btn btn-primary">Go somewhere</a>
	</div>
</div>

    )
}
export default TouristInfoCards;