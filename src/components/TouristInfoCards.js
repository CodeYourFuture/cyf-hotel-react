import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="App-cards">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Early_morning_in_London.jpg/1200px-Early_morning_in_London.jpg"
          className="card-img-top"
          alt="london landscape"
        />
        <div className="card-body">
          <h1>London</h1>
          <p>
            Discover the best of London. Find things to do in London, from
            iconic sightseeing spots and fun-filled days out to top restaurants,
            theatre and unmissable London events
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            For More Info
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Manchester_%26_Salford_Skyline_2020.jpg"
          className="card-img-top"
          alt="Manchester landscape"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            Discover the best of Manchester. Find things to do in Manchester,
            from iconic sightseeing spots and fun-filled days out to top
            restaurants, theatre and unmissable Manchester events.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            For More Info
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Glasgow._Glasgow_Royal_Infirmary.jpg/1200px-Glasgow._Glasgow_Royal_Infirmary.jpg"
          className="card-img-top"
          alt="Glasgow landscape"
        />
        <div className="card-body">
          <h1>Glasgow</h1>
          <p>
            Discover the best of Glasgow. Find things to do in Glasgow, from
            iconic sightseeing spots and fun-filled days out to top restaurants,
            theatre and unmissable Glasgow events.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            For More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
