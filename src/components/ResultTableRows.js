import React from 'react';


const ResultTableRows = props => {
  
  return props.bookings.map( (booking,i) =>(
    <tr key ={i}>
    {
      /* get all the keys of the object and map their value to the td*/
      Object.keys(booking)
      .map((result,j)=>{
        if(result !== 'id')
          return <td key={j}>{booking[result]}</td>   
      })
    }
    </tr>
  ))  
};
export default ResultTableRows;