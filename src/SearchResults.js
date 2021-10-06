import React from "react";

const userInfor = [
  {
    id: "9898",
    title: "Miss",
    firstName: "Sam",
    surname: "Smith",
    email: "Sam.Smith@hotmail.com",
    roomId: "676",
    checkInDate: "20/10/21",
    checkOutDate: "22/10/21"
  }
];

const SearchResults = props => {
  console.log(props.formInfo);
  return (
    <table>
      <thead>
        {props.formInfo.map(deatils => (
          <th>{deatils}</th>
        ))}
      </thead>
      <tbody>
        <tr>
          {userInfor.map(userDetails => (
            <>
              <td>{userDetails.id}</td>
              <td>{userDetails.title}</td>
              <td>{userDetails.firstName}</td>
              <td>{userDetails.surname}</td>
              <td>{userDetails.email}</td>
              <td>{userDetails.roomId}</td>
              <td>{userDetails.checkInDate}</td>
              <td>{userDetails.checkOutDate}</td>
            </>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
