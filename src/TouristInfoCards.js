import react from "react";
function TouristInfoCards(props){
    return(
    <div className="info-cards">
        <div className="card">
            <img src ={`${props.cityPic}`} className="card-img-top" />
        <div className="card-body">
            <h2>{props.cityName}</h2>
            <p>{props.aboutCity}</p>
            <a className="btn btn-primary" href={props.link} target="_blank" >More Information</a>
        </div>
        </div>
    </div>
    );
}
export default TouristInfoCards;