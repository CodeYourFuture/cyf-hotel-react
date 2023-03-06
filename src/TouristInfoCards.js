import React from "react";

const TouristInfoCards =()=> {
  return (
    <div className="d-flex justify-content-center">
      <div className="card mx-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gmtW8aLkUUGSxoxfoFHM73cVmv1XDEjmww&usqp=CAU"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <a
            href="http://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Glasgow
          </a>
        </div>
      </div>

      <div className="card-mx-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55BtR_8nmJf-_paev610p_brK6N7kaSMpFQ&usqp=CAU"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>

      <div className="card-mx-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffCAo40J4NyqSX_kjiwC6SIzNGX0b0mWvng&usqp=CAU"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;

/**
 * To center the three cards horizontally,added the class justify-content-center to the 
 * parent <div>. This centers the content horizontally within the container.
 * 
 * added the class mx-2 to each card, which adds a margin of 0.5rem on the left and right 
 * sides of the card. This creates some space between the cards.
 */