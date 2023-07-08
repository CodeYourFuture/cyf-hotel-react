import React from "react";

const city = [
  {
    name: "London",
    src: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "London is the capital of the UK",
    href: "https://www.visitlondon.com/",
  },
  {
    name: "Manchester",
    src: "https://images.unsplash.com/photo-1627226890711-fd1fdc35d77e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuY2hlc3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Manchester is the biggest city in the north of England",
    href: "https://www.visitmanchester.com/",
  },
  {
    name: "Glasgow",
    src: "https://images.unsplash.com/photo-1558098362-b1ee175ef8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdsYXNnb3d8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description: "Glasgow is the second most important city in Scotland",
    href: "http://peoplemakeglasgow.com/",
  },
];

const TouristInfoCards = ({cityId}) => {

    return (
      <div className="CitiesDiv">
        <div className="card">
          <img src={city[cityId].src} className="card-img-top" />
          <div className="card-body">
            <h2>{city[cityId].description}</h2>
            <p>{city[cityId].description}</p>
            <a href={city[cityId].href} className="btn btn-primary">
              More information.
            </a> 
          </div> 
        </div>
      </div>
    )
}

export default TouristInfoCards;