import React from 'react';

const ResultTableHeaders =  props => { 
  return props.resultHeading.map((header,i) =>{
    //since Id coulumn is not displayed in the result
    if(header !== 'id')
    //capitalize the heading
    return <th key = {i} 
              onClick ={props.onClick}
              id = {header} >
              {header.charAt(0).toUpperCase() + header.slice(1)}
           </th>
  })
  
};
export default ResultTableHeaders;