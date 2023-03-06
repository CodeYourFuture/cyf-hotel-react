import React from "react";

const TouristInfoCards =()=> {
  return (
    <div className="card">
        
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gmtW8aLkUUGSxoxfoFHM73cVmv1XDEjmww&usqp=CAU"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="http://www.peoplemakeglasgow.com" className="btn btn-primary">
          Glasgow
        </a>
      </div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55BtR_8nmJf-_paev610p_brK6N7kaSMpFQ&usqp=CAU"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="https://www.visitmanchester.com" className="btn btn-primary">
          Machester
        </a>
      </div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffCAo40J4NyqSX_kjiwC6SIzNGX0b0mWvng&usqp=CAU"
        className="card-img-top"
      />
      <div className="card-body">
        <a href="https://www.visitlondon.com" className="btn btn-primary">
          London
        </a>
      </div>

    </div>
  );
}

export default TouristInfoCards;