// import React, { Component } from "react";

// export default class Heading extends Component {
//   render() {
//     return (
//       <div>
//         <header className="App-header">CYF Hotel</header>
//       </div>
//     );
//   }
// }

import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function Heading() {
  const theme = useContext(ThemeContext);
  return (
    <div className="headerRap" style={{ ...theme }}>
      <header className="header">CYF Hotel</header>
    </div>
  );
}
