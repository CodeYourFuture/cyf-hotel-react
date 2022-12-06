import React from "react";

const TouristInfoCards = () => {
  const cities = [
    {
      Town: 1,
      TonwName: "Manchester",
      img:
        "https://www.aboutmanchester.co.uk/wp-content/uploads/2021/10/mediacityuk-manchester.jpg",
      info:
        "Manchester is the only UK city to feature in Lonely Planet's Best in Travel 2023 list and the only UK city in National Geographic's influential ‘Best of the World’ list which annually sets out 25 of the must-see places to visit around the globe.",
      link: "https://www.visitmanchester.com/"
    },
    {
      Town: 2,
      TonwName: "London",
      img:
        "https://www.travelbook.de/data/uploads/2018/12/gettyimages-563429323_1545930029.jpg",
      info:
        "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events.",
      link: "https://www.visitlondon.com/"
    },

    {
      Town: 3,
      TonwName: "Glasgow",
      img:
        "https://media.istockphoto.com/id/469974825/photo/squinty-bridge-glasgow.jpg?s=612x612&w=0&k=20&c=or3NNSPV7Q-t1lZ5Z6UITQZ5Q3KoF35Je5wq9-fSrvg=",
      info:
        "Useful guides for your visit to the city, from getting here, accommodation to getting around we have all the useful info you need. Get the low-down on culture, art, music, sport, libraries and events in Glasgow. Information about museums, galleries, communities .",
      link: "https://peoplemakeglasgow.com/"
    }
  ];
  return (
    <div className="card-container">
      {cities.map(element => (
        <div className="card">
          <img src={element.img} className="card-img-top" />
          <h2>{element.TonwName}</h2>
          <p>{element.info}</p>
          <a href={element.link}>
            <button className="btn btn-primary">
              Visit {element.TonwName}
            </button>
          </a>
        </div>
      ))}
    </div>
  );
};
export default TouristInfoCards;
