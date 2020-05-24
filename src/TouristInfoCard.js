import React from "react"

function TouristInfoCard(props) {
    return (
        <div className="cardDiv">
            <div className="card">
                <img className="card-img-top" src={props.image} alt="" />
                <div className="card-body">
                    <a href={props.cityInfoLink} className="btn btn-primary">{props.city}</a>
                </div>
            </div>
        </div>
    )
}
export default TouristInfoCard