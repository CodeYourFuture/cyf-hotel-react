import React from "react";

const Heading = props => {
  return (
    <header className="App-header">
      <div>
        {props.text}
        <img
          style={imgLogo}
          src="https://static.vecteezy.com/system/resources/thumbnails/000/627/584/small/illust58-5849-01.jpg"
          alt="hotel-logo"
        />
      </div>
    </header>
  );
};

const imgLogo = {
  height: "33px",
  marginLeft: "20px",
  paddingBottom: "6px"
};

export default Heading;
