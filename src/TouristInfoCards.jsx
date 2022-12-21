import React from "react";

function TouristInfoCards() {
  return (
    <div className="Three-city">
      <div className="headerImg">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/6c/33.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1294454411/photo/london-symbols-with-big-ben-double-decker-buses-and-red-phone-booth-in-england-uk.jpg?b=1&s=170667a&w=0&k=20&c=SR5FBt8VvpZEOIxZcTmoEf9XxU0oiSnbobD3E6ZB358="
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1313298677/photo/autumn-in-manchester-new-hampshire.jpg?b=1&s=170667a&w=0&k=20&c=HorrwlIcpOPXBw0RNLY06OkprjLADWAH8bNoAPQqEn8="
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
