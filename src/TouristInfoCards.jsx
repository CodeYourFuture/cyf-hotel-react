import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card">
      <div className="card">
        <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/37000/37879-George-Square.jpg" className="card-img-top"  alt="Glasgow" />
        <div className="card-body">
        <a href="#" className="btn btn-primary">Go somewhere</a>
          <h2>Glasgow</h2>
          <p>Experience the vibrant cultural scene and architectural beauty of Glasgow.</p>
          <a href="https://peoplemakeglasgow.com" target="_blank" rel="noopener noreferrer">Visit Glasgow</a>
        </div>
      </div>
      <div className="card">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/a1/ee/e8/the-famous-manchester.jpg?w=1200&h=-1&s=1" className="card-img-top" alt="Manchester" />
        <div className="card-body">
        <a href="#" className="btn btn-primary">Go somewhere</a>
          <h2>Manchester</h2>
          <p>Discover the rich history, music, and sports culture of Manchester.</p>
          <a href="https://visitmanchester.com" target="_blank" rel="noopener noreferrer">Visit Manchester</a>
        </div>
      </div>
      <div className="card">
        <img src="https://static.toiimg.com/photo/45297403.cms" className="card-img-top" alt="London" />
        <div className="card-body">
        <a href="#" className="btn btn-primary">Go somewhere</a>
          <h2>London</h2>
          <p>Explore the iconic landmarks, world-class museums, and diverse attractions of London.</p>
          <a href="https://visitlondon.com" target="_blank" rel="noopener noreferrer">Visit London</a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;