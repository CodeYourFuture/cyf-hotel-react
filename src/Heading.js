import React from "react";

const Heading = () => {
  return (
    <div className="Header">
      <header className="App-header">
        CYF Hotel
        <img
          className="imageLogo"
          src={
            "https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt={"free hotel logo design"}
        />
      </header>
    </div>
  );
};

export default Heading;
