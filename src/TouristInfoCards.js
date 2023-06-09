import React from "react";

function TouristInfoCards() {
  const touristCardData = [
    {
      image:
        "https://images.pexels.com/photos/12319481/pexels-photo-12319481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      city: "Glasgow",
      description:
        "Ancestor laugh fat lit chair running Uruks master loyal ready. Explanation Dori aside. Frailty within Witch-king greedily. What about second breakfast? ",
      url: "https://peoplemakeglasgow.com/",
    },
    {
      image:
        "https://images.pexels.com/photos/11014204/pexels-photo-11014204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      city: "Manchester",
      description:
        "Plant charged flying uprooted Goblin-town weren't? Unto Hobbit's impassable first bolted grass if. Share remove fume they'd Baggins built fox.",
      url: "https://www.visitmanchester.com/",
    },
    {
      image:
        "https://images.pexels.com/photos/1906888/pexels-photo-1906888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      city: "London",
      description:
        "Defiling Isildur's om sauteed offer? Stronghold prizewinners names afterwards rob Probably memory seize thank nightfall anger!",
      url: "https://www.visitlondon.com/",
    },
  ];

  return touristCardData.map((element) => (
    <div className="card">
      <div className="card-body">
        <img src={element.image} className="card-img-top" />
        <h2 className="card-title">{element.city}</h2>
        <p className="card-description">{element.description}</p>
        <a href="#" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  ));
}

export default TouristInfoCards;
