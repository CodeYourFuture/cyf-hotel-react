import React from "react"

function TouristInfoCard(props) {
    return (

        <div >
            <div className="cardContainer">
                {props.content.map((info, index) => {
                    return <div className="card" key={index} >
                        <img src={info.image} className="card-img-top" alt="city photos" />
                        <div className="card-body">
                            <a href={info.cityLink} className="btn btn-primary">{info.name}</a>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}
export default TouristInfoCard