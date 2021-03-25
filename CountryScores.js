import React from "react";

const CountryScores = (props) => {
  let scores = props.country.scores.sort((a, b) => {
    if (a.s < b.s) {
      return 1;
    } else {
      return -1;
    }
  });
  return (
    <table>
      <tbody>
        {scores.map((score, index) => (
          <tr key={index}>
            <th>{score.n}</th>
            <td>{score.s}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CountryScores;
