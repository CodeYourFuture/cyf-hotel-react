import react from "react";
import "../index.css"


export default function TouristInfoCards(props) {
    return (
        <>
            <div className="card">
                <img src={props.img}/>
                <div className="card-body">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    <a href={props.url} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}