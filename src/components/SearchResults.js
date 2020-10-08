import React, { useState } from "react";
import "./SearchResults.css";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import BodyRow from "./BodyRow";
import HeadingRow from "./HeadingRow";

// const SearchResults = (props) => {
//   const [isSelected, setIsSelected] = useState([]);
//   const [rowSelected, setRowSelected] = useState(null);
//   console.log(rowSelected);

//   // const profile = <CustomerProfile />;
//   const handleClick = (e) => {
//     setRowSelected(e.target.id);
//     console.log(e.target.id);
//   };

//   const setClassName = (id) => {
//     if (!isSelected.includes(id)) {
//       // setIsSelected([...isSelected, id]);
//       setIsSelected(isSelected.concat([id]));
//     } else {
//       setIsSelected(isSelected.filter((p) => p !== id));
//     }
//   };
//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Id</th>
//             <th scope="col">Title</th>
//             <th scope="col">FirstName</th>
//             <th scope="col">Surname</th>
//             <th scope="col">Email</th>
//             <th scope="col">Room Id</th>
//             <th scope="col">Check-In-Date</th>
//             <th scope="col">Check-Out-Date</th>
//             <th scope="col">Number of Nights</th>
//             <th scope="col">Show Profile</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.results.map((field, index) => {
//             const nightsSpent = moment(field.checkOutDate).diff(
//               field.checkInDate,
//               "days"
//             );

//             return (
//               <tr
//                 key={index}
//                 onClick={() => setClassName(index)}
//                 style={
//                   isSelected.includes(index)
//                     ? { backgroundColor: "red" }
//                     : { backgroundColor: "white" }
//                 }
//               >
//                 <th scope="row">{field.id}</th>
//                 <td>{field.title}</td>
//                 <td>{field.firstName}</td>
//                 <td>{field.surname}</td>
//                 <td>{field.email}</td>
//                 <td>{field.roomId}</td>
//                 <td>{field.checkInDate}</td>
//                 <td>{field.checkOutDate}</td>
//                 <td>{nightsSpent}</td>

//                 <td>
//                   <button onClick={handleClick} id={index + 1}>
//                     Show Profile
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {rowSelected && <CustomerProfile id={rowSelected} />}
//     </div>
//   );
// };

// export default SearchResults;

const SearchResults = ({ results, setBookings }) => {
  const [customerId, setCustomerId] = useState(null);
  const [isSorted, setIsSorted] = useState({});

  const sortBookings = event => {
    const column = event.target.title;
    const sortedBookings = sortByColumnName(column, !!isSorted[column]);
    setIsSorted({ ...isSorted, [column]: !isSorted[column] });
    setBookings(sortedBookings);
  };

  const sortByColumnName = (column, isAscending) => {
    return results.sort((a, b) =>
      a[column] > b[column]
        ? isAscending
          ? -1
          : 1
        : a[column] < b[column]
        ? isAscending
          ? 1
          : -1
        : 0
    );
  };

  return (
    <div>
      <table className="table">
        <thead>
          <HeadingRow sortBookings={sortBookings} />
        </thead>
        <tbody>
          {results.map(result => {
            result.numOfNights = moment(result.checkOutDate).diff(
              result.checkInDate,
              "days"
            );
            return (
              <BodyRow
                key={result.id}
                content={result}
                setCustomerId={setCustomerId}
              />
            );
          })}
        </tbody>
      </table>
      {customerId && <CustomerProfile id={customerId} />}
    </div>
  );
};

export default SearchResults;
