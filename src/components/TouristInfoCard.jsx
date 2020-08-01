// Instructions: In src / App.js, above the < Bookings /> component add a
//new component called TouristInfoCards which shows 3 cards.
//A card is a common user interface pattern with an image at the top
//and some related text underneath.
//The cards must link to peoplemakeglasgow.com,
//visitmanchester.com and visitlondon.com.
//The cards should contain the name of the city and an image of the city.

//     Hint: Use the same className as
//the example below to benefit from Bootstrap library which
//is already imported for you in the project.
//Use the JSX code below as an example of one card(note that in JSX,
//you'll need to use className instead of class):

//         < div className = "card" >
//         <img src="..." className="card-img-top" />
//         <div className="card-body">
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//         </div>
//              </div >
//         Test: 3 info cards should be displayed
//on the page for each city(Glasgow, Manchester, London).
//Each card should link to the correct website.

import React from "react";

import "./TouristInfoCard.css";

function TouristInfoCards(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.Name}</h5>
          <p className="card-text">{props.descriptionText}</p>
          <a href={props.moreInfoLink}>Click here for more information</a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
