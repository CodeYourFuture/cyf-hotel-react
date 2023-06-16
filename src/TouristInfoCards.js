import React from "react";

const TouristInfoCards = (props) => {
  return (
    <div className="cards">

      <div className="TouristInfoCards">
      <img className="card-img-top" src="https://media.istockphoto.com/id/1370151479/photo/fountain-of-the-four-rivers-by-the-church-of-santagnese-by-bernini-in-piazza-navona-rome-italy.jpg?s=612x612&w=0&k=20&c=UU9LVGxzX_QXBjdEV6ar4-IamosxA2MLUY0FEzn5ejU=" alt=""
       />
      <h1 className="h1">Glasgow</h1>
      <p className="p">Glasgow is a port city on the River Clyde in Scotland's western Lowlands. It's famed for its Victorian and art nouveau architecture, a rich legacy of the city's 18th–20th-century prosperity due to trade and shipbuilding. Today it's a national cultural hub, home to institutions including the Scottish Opera, Scottish Ballet and National Theatre of Scotland, as well as acclaimed museums and a thriving music scene.</p>
      <div className="card-body">
      <a className="btn btn-primary" href="peoplemakeglasgow.com">More Information</a>
      </div>
      
    </div>

    <div className="TouristInfoCards">
      <img className="card-img-top" src="https://media.istockphoto.com/id/1067367850/photo/manchester-skyline.jpg?s=612x612&w=0&k=20&c=BHkzQL_EfDqJRUp7E5ro4VdLyEydz8_bW-vmCztQ3Jg=" alt="" />
      <h1 className="h1">Manchester</h1>
      <p className="p">Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed.

Manchester is the only UK city to feature in Lonely Planet's Best in Travel 2023 list and the only UK city in National Geographic's influential ‘Best of the World’ list which annually sets out 25 of the must-see places to visit around the globe.

Known throughout the world as the birthplace of the industrial revolution, Manchester has a proud history in science, politics, music, arts and sport. And today the city combines this heritage with a progressive vision to be a city that delivers surprise and delight in equal measures. </p>
<div className="card-body">
  <a className="btn btn-primary" href="visitmanchester.com">More Information</a>
</div>
    </div>

    <div className="TouristInfoCards">
      <img src="https://media.istockphoto.com/id/1442470205/photo/tower-bridge-with-red-london-bus.jpg?s=612x612&w=0&k=20&c=hey26ba3J2stD6NBANy2TppywgFqBts9D0OGB5snRyc=" alt="" className="card-img-top" />
      <h1 className="h1">London</h1>
      <p className="p">Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.</p>
      <div className="card-body">
        <a className="btn btn-primary" href="visitlondon.com">More Information</a>
      </div>
    </div>
  </div>
  
  );
}

export default TouristInfoCards;