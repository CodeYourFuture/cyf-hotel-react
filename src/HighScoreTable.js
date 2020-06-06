import React from "react";
//import AllCountryScores from './AllCountryScores'

const sortScores = (arr, sortValue) => {
  return sortValue ? arr.sort((a, b) => b.s - a.s) : arr.sort((a, b) => a.s - b.s)
}

const HighScoreTable = (props) => {  
  console.log(props)
  return (
  <div className="scores-container">
    <h3>HIGH SCORES: {props.data.name}</h3>
    <div className="scores">
      {sortScores(props.data.scores, props.sort).map((person, index) => {
        return (
          <div key={index} className="person-score-container">
            <div className='personal-score'>
              <span>{person.n.toUpperCase()} </span>
              <span className='score'> {person.s}</span>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default HighScoreTable;
