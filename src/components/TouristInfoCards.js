import React from "react";
export default function TouristInfoCards({ city }) {
  return (
    <div className="card">
      <img src={fakeCityInfos[city].img} alt={city} className="card-img-top" />
      <div className="card-body">
        <h3>{city}</h3>
        <p className="city-info">{fakeCityInfos[city].text}</p>
        <a
          href={fakeCityInfos[city].webSite}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Go {city}
        </a>
      </div>
    </div>
  );
}
const fakeCityInfos = {
  Glasgow: {
    img:
      "https://peoplemakeglasgow.com/imager/general/127274/Glasgow-Green-content-block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg",
    text:
      "Glasgow Green is the city’s oldest park and is where you'll find the largest terracotta fountain in the world, the Doulton Fountain, and the beautiful McLennan Arch. Also set within this expansive park is the People’s Palace, a museum dedicated to the social history of Glasgow, and one of the city's most unusual buildings, Templeton on the Green, which has a detailed design based on the famous Doge's Palace in Venice. ",
    webSite: "https://www.peoplemakeglasgow.com"
  },
  Manchester: {
    img:
      "https://www.communicateschool.co.uk/wp-content/uploads/2015/07/National-Football-Museum-014.jpg",
    text:
      "Whether you’re a die-hard football fan, planning a visit with your family or on a weekend break to the great city of Manchester, enjoy the National Football Museum which is currently open Wednesday to Sunday.",
    webSite: "https://www.visitmanchester.com/"
  },
  London: {
    img:
      "https://peoplemakeglasgow.com/imager/general/127274/Glasgow-Green-content-block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg",
    text:
      "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.",
    webSite: "https://www.visitlondon.com"
  }
};
