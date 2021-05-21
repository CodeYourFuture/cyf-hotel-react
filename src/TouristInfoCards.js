import React from "react";

const TouristInfoCards = () =>{
    return(
        <div className="card-container">
            <div className="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dawn_over_Glasgow_%2848659596342%29.jpg/1024px-Dawn_over_Glasgow_%2848659596342%29.jpg" className="card-img-top" alt="" title="By Ian Dick from Glasgow, UK"></img>
                <div className="card-body">
                    <h5 className="card-title">Glasgow</h5>
                    <p className="card-text">Visit vibrant Glasgow</p>
                    <a className="btn btn-primary" href="https://peoplemakeglasgow.com/" target="_blank">See more</a>
                </div>
            </div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
    )
}

export default TouristInfoCards;