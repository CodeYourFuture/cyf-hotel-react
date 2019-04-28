import React from "react";

const TouristInfoCards = () => { 
    return (        
    <div className="row">
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">London</h5>
                <img alt= "westminster" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg"/> 
                <a href="https://www.visitlondon.com/" className="btn btn-primary">London</a>
                </div>
            </div>
        </div>
 
        <div className="col-sm-4">
             <div className="card">
                <div className="card-body">
                <h5 className="card-title">Manchester</h5>
                <img alt = "Manchester" src="https://www.visitmanchester.com/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2"/> 
                <a href="https://www.visitmanchester.com/" className="btn btn-primary">Manchester</a> 
                </div>
            </div>
        </div>

        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Glasgow</h5>
                <img alt = "glasglow" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg?w968h681"/> 
                <a href="https://www.visitglasgow.com/" className="btn btn-primary">glasglow</a> 
                </div>
            </div>
        </div>
    </div>
  )
};

export default TouristInfoCards; 