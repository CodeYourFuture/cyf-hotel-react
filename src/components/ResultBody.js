import React from "react";
import ResultsRow from './ResultsRow'

const ResultBody = ({data}) => {
  return (
    <tbody>
      {data.map((item, key) => (
         <ResultsRow  item={item}
                      key={key}
         />
       
      ))}
    </tbody>
  
  )};
export default ResultBody;
