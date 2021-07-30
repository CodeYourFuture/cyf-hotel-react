import React, { useState } from "react";

//Css syntax that works in JSX - style={{backgroundColor:"white"}}

const TableHeader = props => {
  const [headingSort, setHeadingSort] = useState(props.Headings);
  const [count, setCount] = useState(0);
  const sortFunction = () => {
    if (count === 0) {
      setHeadingSort(
        headingSort.sort((headingA, headingB) => headingA > headingB ? 1 : -1)
      );
      setCount(1);
    } else if (count === 1) {
      setHeadingSort(
        headingSort.sort((headingA, headingB) => headingB < headingA ? -1 : 1)
      );
      setCount(0);
    }
  };
  // const initial = "white";
  // let [highlight, setHighlight] = useState(initial);
  // const toggleHighlight = () => {
  //   if (highlight === "white") {
  //     setHighlight("yellow");
  //   } else {
  //     setHighlight("white");
  //   }
  // };
  return (
    <tr
      id="header-row"
      // onClick={toggleHighlight}
      // style={{ backgroundColor: initial }}
    >
      {headingSort.map((heading, index) => (
        <th scope="col" key={index} onClick={sortFunction}>
          {heading}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
