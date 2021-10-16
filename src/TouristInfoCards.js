import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://cdn.livekindly.co/wp-content/uploads/2018/10/glasgow-Cropped-1.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Best UK city break in 2021 (Condé Nast Traveller)
          </h6>
          <p className="card-text">
            We're not exaggerating when we say that we think Glasgow is one of
            the most exciting cities you'll ever come across. A city break in
            Glasgow offers a lively, bustling place, distinctive and full of
            character, where you are bound to get a very warm welcome indeed.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://media.timeout.com/images/105756844/1372/772/image.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Voted top for friendliness and nightlife, according to a TimeOut
            poll
          </h6>
          <p className="card-text">
            Youthful, diverse, energetic and bursting with character; Manchester
            is one of the most exciting places to visit in the UK right now
            where everybody and anybody is very warmly welcomed.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            One of the world's most visited cities
          </h6>
          <p className="card-text">
            With more than 100 nationalities, the city is the most international
            city in the world. We believe that it's this melting pot of
            cultures, nationalities, and languages – which makes London so
            attractive to travellers worldwide.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
