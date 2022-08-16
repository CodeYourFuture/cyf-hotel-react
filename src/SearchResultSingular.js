import React from "react";

const SearchResultSingular = props => {
  // console.log(`SearchResultSingular props: ${props}`);

  const [customClass, setCustomClass] = React.useState("");

  const customClassToggle = () => {
    setCustomClass(prevCustomClass => (prevCustomClass ? "" : "highlighted"));
    // console.log(customClass)
  };

  return (
    <tr
      className={`search-results-table-body-row ${customClass}`}
      onClick={customClassToggle}
    >
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.firstName}</td>
      <td>{props.surname}</td>
      <td>{props.email}</td>
      <td>{props.roomId}</td>
      <td>{props.checkInDate}</td>
      <td>{props.checkOutDate}</td>
      <td>
        {// no need for momentjs.. create two new date objects, subtract them from each other, divide by milliseconds per day
        (new Date(`${props.checkOutDate}T00:00:01Z`) -
          new Date(`${props.checkInDate}T00:00:01Z`)) /
          86400000}
      </td>
    </tr>
  );
};

export default SearchResultSingular;
