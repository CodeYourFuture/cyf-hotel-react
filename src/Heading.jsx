import React from "react";

// const Heading = () => {
//   return (
// <header className="App-header">
//   <img
//     alt="header"
//     src="https://cdn-icons-png.flaticon.com/512/5900/5900195.png"
//     width="30"
//     height="30"
//   ></img>
// </header>
//   );
// };

class Heading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="App-header">
        {/* <h1>BLAH</h1> */}
        <img
          alt="header"
          src="https://cdn-icons-png.flaticon.com/512/5900/5900195.png"
          width="30"
          height="30"
        ></img>
      </header>
    );
  }
}

export default Heading;
