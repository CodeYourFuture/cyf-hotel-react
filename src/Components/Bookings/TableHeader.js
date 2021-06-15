import React, {useState} from "react";

//Css syntax that works in JSX - style={{backgroundColor:"white"}}

const TableHeader = (props) => {
  const initial = "white";
  let [highlight, setHighlight] = useState(initial);
  const toggleHighlight = ()=>{
    if(highlight === "white"){
      setHighlight("yellow");
    }else{
      setHighlight("white");
    }
  }
  return (
    <tr id="header-row" onClick={toggleHighlight} style={{backgroundColor:highlight}}>
      {props.Headings.map((heading, index) => (
        <th scope="col" key={index}>
          {heading}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
