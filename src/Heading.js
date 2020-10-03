import React from "react";

class Heading extends React.Component {
  render() {
    let imgSource = "https://image.flaticon.com/icons/svg/139/139899.svg";
    return (
      <div>
        <header className="App-header">CYF Hotel</header>
        <img src={imgSource} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Heading;
