import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";
import SearchResultBody from "./SearchResultBody";

import "../../App.css";

export default function SearchResults({ results, showProfile }) {
  const theme = useContext(ThemeContext);
  // function get_random_color() {
  //   var letters = "0123456789ABCDEF".split("");
  //   var color = "#";
  //   for (var i = 0; i < 6; i++) {
  //     color += letters[Math.round(Math.random() * 15)];
  //   }
  //   return color;
  // }

  return (
    <div style={{ ...theme }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
            <th scope="col">Night</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map(item => {
            return (
              <SearchResultBody
                key={item.id}
                results={results}
                showProfile={showProfile}
                item={item}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
