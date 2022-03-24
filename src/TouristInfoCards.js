import React from "react";

const TouristInfoCards = () => {
  const places = [
    {
      name: "Glasgow",
      link: "peoplemakeglasgow.com",
      imgLink:
        "https://images.unsplash.com/photo-1514204094441-613d283d4a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
      summary:
        "From independent stores to high street retailers, Glasgow is the best shopping city. Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area. The city is also rich in artists and creators which makes for a thriving and exciting independent shopping scene."
    },
    {
      name: "Manchester",
      link: "www.visitmanchester.com",
      imgLink:
        "https://images.unsplash.com/photo-1638637869635-f1a90c8f7edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80",
      summary:
        "Manchester city centre is jam-packed with unique and eclectic restaurants, bars, shops, museums, galleries, hotels and places to stay whilst the surrounding Greater Manchester boroughs offer a patch-work of visitor experiences including quaint market towns,traditional pubs and beautiful green spaces and waterways to be explored on foot or bike. The city region is easily navigated, with great transport links both in and around Greater Manchester."
    },
    {
      name: "London",
      link: "visitlondon.com",
      imgLink:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      summary:
        "Welcome to London! Discover the best of London with Visit London,the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events."
    }
  ];

  return (
    <ul style={listStyle}>
      {places.map((place, i) => {
        return (
          <li key={i} className="card">
            <img className="card-img-top" src={place.imgLink} alt="Glasgow" />
            <div className="card-body">
              <h2>{place.name}</h2>
              <p>{place.summary}</p>
              <a
                className="btn btn-primary"
                href={`https://www.${place.link}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Information
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const listStyle = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-around",
  listStyleType: "none",
  alignItems: "stretch"
};

export default TouristInfoCards;
