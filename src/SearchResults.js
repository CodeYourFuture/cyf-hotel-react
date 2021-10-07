import React from "react";

const SearchResults = props => {
  const moment = require("moment"); //adds moment library to file
  const results = props.results; //stores results prop

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room Id</th>
          <th>Check-in date</th>
          <th>Check-out date</th>
          <th>Nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr>
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>

            <td>
              {moment(result.checkOutDate).diff(
                moment(result.checkInDate),
                "days"
              )}
            </td>
            {/* <td>{moment(result.checkOutDate).diff(moment(result.checkInDate),'days')}</td> */}
          </tr>
        ))}
      </tbody>
      {/* <TableRow results={FakeBookings} /> */}
    </table>
  );
};

// const TableRow = (props) => {
//   const resultsProp = props.results;

//   //   let dateOut = moment("2017-11-23");
//   //   let dateIn = moment("2017-11-01");

//   //   // Function call
//   //   let nights = dateOut.diff(dateIn, "days");
//   //   console.log(nights); //logs 2

//   console.log(resultsProp);
//   return (
//     // <tbody>
//     //   {resultsProp.map((result, index) => (

//     //     <tr>
//     //       <td>{result.id}</td>
//     //       <td>{result.title}</td>
//     //       <td>{result.firstName}</td>
//     //       <td>{result.surname}</td>
//     //       <td>{result.email}</td>
//     //       <td>{result.roomId}</td>
//     //       <td>{result.checkInDate}</td>
//     //       <td>{result.checkOutDate}</td>

//     //       <td>{moment(result.checkOutDate).diff(moment(result.checkInDate))}</td>
//     //     </tr>
//     //   ))}
//     // </tbody>
//   );
// };

// const Nights = ()=>{
//       let dateOut = moment({result.checkOutDate});
//           let dateIn = moment(
//           {result.checkInDate});
//            {/* // Function call  */}
//            let nights = dateOut.diff(dateIn, "days");

//          console.log(nights);
//           <td>nights</td>
// }

export default SearchResults;

//map over each result --
//get total nights -- dateOut.diff(dateIn)
//render total nights in td -- <td>dateOut.diff(dateIn)</td>
