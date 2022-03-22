import React from "react";

const TouristInfoCards = () => {
  return (
    <ul style={listStyle}>
      <li style={list}>
        <img
          style={imgCity}
          src="https://images.unsplash.com/photo-1514204094441-613d283d4a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
          alt="Glasgow"
        />
        <h2>Glasgow</h2>
        <p>
          From independent stores to high street retailers, Glasgow is the best
          shopping city. Glasgow's city centre is home to flagship stores,
          impressive shopping centres and designer favourites all within an
          easily walkable area. The city is also rich in artists and creators
          which makes for a thriving and exciting independent shopping scene.
        </p>
        <a
          style={buttonStyle}
          href="https://peoplemakeglasgow.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Information
        </a>
      </li>
      <li style={list}>
        <img
          style={imgCity}
          src="https://images.unsplash.com/photo-1638637869635-f1a90c8f7edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
          alt="Manchester"
        />
        <h2>Manchester</h2>
        <p>
          Manchester city centre is jam-packed with unique and eclectic
          restaurants, bars, shops, museums, galleries, hotels and places to
          stay whilst the surrounding Greater Manchester boroughs offer a
          patch-work of visitor experiences including quaint market towns,
          traditional pubs and beautiful green spaces and waterways to be
          explored on foot or bike. The city region is easily navigated, with
          great transport links both in and around Greater Manchester.
        </p>
        <a
          style={buttonStyle}
          href="https://www.visitmanchester.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Information
        </a>
      </li>
      <li style={list}>
        <img
          style={imgCity}
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="London"
        />
        <h2>London</h2>
        <p>
          Welcome to London! Discover the best of London with Visit London, the
          official guide to England’s exciting capital. Find things to do in
          London, from iconic sightseeing spots and fun-filled days out to top
          restaurants, theatre and unmissable London events.
        </p>
        <a
          style={buttonStyle}
          href="https://visitlondon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Information
        </a>
      </li>
    </ul>
  );
};

const listStyle = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  listStyleType: "none",
  alignItems: "stretch"
};
const list = {
  width: "30%",
  border: "3px solid green",
  textAlign: "center"
};

const imgCity = {
  width: "100%"
};

const buttonStyle = {
  cursor: "pointer",
  backgroundColor: "gray",
  color: "white",
  padding: "7px 15px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block"
};
export default TouristInfoCards;
