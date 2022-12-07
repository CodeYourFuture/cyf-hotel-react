import React from "react";

const Logo = () => {
  let appName = "Anosh's Pokedex";
  return (
    <header>
      <h1>Welcome to {appName}</h1>
      <img
        alt="pokemon"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      ></img>
    </header>
  );
};

export default Logo;
