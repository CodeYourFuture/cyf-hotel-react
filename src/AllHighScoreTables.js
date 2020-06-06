import React, { useState } from "react";
import HighScoreTable from "./HighScoreTable";
import AllCountryScores from "./AllCountryScores";
import SortButton from "./SortButton";

const AllHighScoreTables = () => {
  const allCountryScores = AllCountryScores;
  const [sortScore, setSortScore] = useState(false);

  const toggleSort = () => {
    setSortScore(!sortScore);
  };
  
  return (
    <div>
      <SortButton handleClick={toggleSort} />
      {allCountryScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((country, index) => {
          return (
            <div key={index}>
              <HighScoreTable data={country} sort={sortScore} />
            </div>
          );
        })}
    </div>
  );
};

export default AllHighScoreTables;
