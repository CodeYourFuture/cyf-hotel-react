import React from "react";
const TouristInfoCards = () => {
   return (
       <div className="card-deck">
           <div className="card">
       <img src="https://media.istockphoto.com/id/1403952062/photo/glasgow-city-chambers-and-george-square-in-glasgow-scotland.webp?b=1&s=170667a&w=0&k=20&c=urcxZ0fv_s4x_xLqTBXmBVgWKz1f1vBHE7CbI3bZKKc=" className="card-img-top" alt="Glasgow" />
       <div className="card-body">
           <h5 className="card-title">Glasgow</h5>
           <p className="card-text">Explore the city with its authenticity and Natural Beauty</p>
           <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">More Info</a>
       </div>
       </div>
       <div className="card">
       <img src="https://media.istockphoto.com/id/1428824874/photo/drone-view-of-media-city-salford-quays-manchester.webp?b=1&s=170667a&w=0&k=20&c=qr6d71c2KhrMhE3uQa6nuG8hF8m7GrO4UxvGTL3F3s4=" className="card-img-top" alt="Manchester" />
       <div className="card-body">
       <h5 className="card-title">Manchester</h5>
       <p className="card-text">Visit the exciting city of Football.</p>
       <a href="https://www.visitmanchester.com/" className="btn btn-primary">More Info</a>
       </div>
       </div>
       <div className="card">
           <img src="https://media.istockphoto.com/id/506329726/photo/street-view-of-trafalgar-square.webp?b=1&s=170667a&w=0&k=20&c=ky9lx8TqHA10G40TMJIsOw6Pdfh0rEU4syjyYww7_rg=" className="card-img-top" alt="London" />
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