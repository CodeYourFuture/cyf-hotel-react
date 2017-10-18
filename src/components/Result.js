import React from 'react';
import ResultRow from './ResultRow'

const Result = props => {

    const results = props.result;
    const resultItems = results.map((result) =>
            <ResultRow result = {result}/>
          );


return (
  <div>
    <h4>Result</h4>
    <table className="table search-table">
      <thead>
        <tr>
          <th>title</th>
          <th>first name</th>
          <th>last name</th>
          <th>email</th>
          <th>room id</th>
          <th>check in date</th>
          <th>check out date</th>
          <th>duration of residence</th>
        </tr>
      </thead>
      <tbody>
      {resultItems}
      </tbody>
    </table>
   </div>
)



}
export default Result ;
