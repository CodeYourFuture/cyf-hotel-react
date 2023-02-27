import react from "react";
function TouristInfoCards(props){
    return(
    <div className="info-cards">
        <div className="card">
            <img src ={`${props.cityPic}`} />
            <h2>{props.cityName}</h2>
            <p>{props.aboutCity}</p>
        </div>
    </div>
    );
}
export default TouristInfoCards;