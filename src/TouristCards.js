import React from "react";

function TouristInfoCards() {
  return (
    <div className="tourist-cards">
      <div className="card">
        <img
          src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/neighbourhood_gettyimages-1044388822_hr_web.jpg?w=1600&h=900"
          alt="glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.visitmanchester.com/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2"
          alt="manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://visitmanchester.com/" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cache.marriott.com/marriottassets/marriott/LONCH/lonch-exterior-6329-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*"
          alt="london"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
