import React from "react";
const TouristInfoCards = () => {
   return (
       <div className="card-deck">
           <div className="card">
       <img src="Glasgow image.avif" className="card-img-top" alt="Glasgow" />
       <div className="card-body">
           <h5 className="card-title">Glasgow</h5>
           <p className="card-text">Explore the city with its authenticity and Natural Beauty</p>
           <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">More Info</a>
       </div>
       </div>
       <div className="card">
       <img src="Manchester image.webp" className="card-img-top" alt="Manchester" />
       <div className="card-body">
       <h5 className="card-title">Manchester</h5>
       <p className="card-text">Visit the exciting city of Football.</p>
       <a href="https://www.visitmanchester.com/" className="btn btn-primary">More Info</a>
       </div>
       </div>
       <div className="card">
           <img src="London Image.webp" className="card-img-top" alt="London" />
           <div className="card-body">
           <h5 className="card-title">London</h5>
           <p className="card-text">Explore the beauty and cultural Diversity of London</p>
           <a href="https://www.visitlondon.com/" className="btn btn-primary">More Info</a>
       </div>
       </div>
       </div>
   );
};


export default TouristInfoCards;