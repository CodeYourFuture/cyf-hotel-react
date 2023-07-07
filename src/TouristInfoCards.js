import React from "react";

const TouristInfoCards = () => {
    return(
        <div className="card-container">
            <img src="" alt=""></img>
            <div className="card">
                <img className="card-img" src="https://media.istockphoto.com/id/1421242432/photo/glasgow-united-kingdom-aerial-shot-of-modern-buildings-in-the-central-area-of-the-city-with.jpg?s=612x612&w=0&k=20&c=5atqO3S6NsvBJazWGSyth82FhvVfgajQARHv8KQ0J-Q=" alt="glasgow"></img>
                <h4>Glasgow</h4>
                <p>Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area.</p>
                <a href="https://www.peoplemakeglasgow.com" className="btn btn-primary">More Information</a>
            </div>
             <img src="" alt=""></img>
            <div className="card">
                <img className="card-img" src="https://media.istockphoto.com/id/1061647528/photo/view-of-a-footbridge-in-salford-quays-in-manchester-england.jpg?s=612x612&w=0&k=20&c=vl5COcWWCtvUM8Nu26oP2WUTfhP45wcGNN8nrbtjcsw=" alt="manchester"></img>
                <h4>Manchester</h4>
                <p>Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed.</p>
                <a href="https://www.visitmanchester.com" className="btn btn-primary">More Information</a>
            </div>
             <img src="" alt=""></img>
            <div className="card">
                <img className="card-img" src="https://img.freepik.com/free-photo/panoramic-view-big-ben-london-sunset-uk_268835-1401.jpg?w=2000" alt="london"></img>
                <h4>London</h4>
                <p>Visit London, the official guide to England’s exciting capital. For more Information click the link and visit the wonders of London</p>
                <a href="https://www.visitlondon.com" className="btn btn-primary">More Information</a>
            </div>
        </div>
    )
} 

export default TouristInfoCards;