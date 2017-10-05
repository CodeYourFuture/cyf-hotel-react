import React from 'react';

const ResultsTable = (props) => {
  return(
    <div>
      {JSON.stringify(props.bookings)}
    </div>
  )
}
export default ResultsTable ;
