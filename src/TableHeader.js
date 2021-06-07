import React from "react";

//Css syntax that works in JSX - style={{backgroundColor:"white"}}

const TableHeader = (props) => {
  const highlight = ()=>{
    let headRow = document.getElementById("header-row");
    console.log(headRow);
    if(!headRow.style.backgroundColor){
      headRow.style.backgroundColor = "yellow";
    }else if(headRow.style.backgroundColor === "yellow"){
      headRow.style.backgroundColor = "white";
    }
  };
  return (
    <tr id="header-row" onClick={highlight}>
      {props.Headings.map((heading, index) => (
        <th scope="col" key={index}>
          {heading}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
