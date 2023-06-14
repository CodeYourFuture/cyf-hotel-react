import React, { useState } from "react";
import data from "./data/fakeBookings.json";

const Column = (props) =>{
    const{id, title, firstName, surname, email, roomId, checkInDate, checkOutDate} = props
    return (
      <tr>
        <th >{id}</th>
        <th >{title}</th>
        <th >{firstName}</th>
        <th >{surname}</th>
        <th >{email}</th>
        <th >{roomId}</th>
        <th >{checkInDate}</th>
        <th >{checkOutDate}</th>
      </tr>
    );
}

const Row = (props) => {
    const {data} = props;
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((column, index) => {
            return (
              <Column
                key={index}
                id={column.id}
                title={column.title}
                firstName={column.firstName}
                surname={column.surname}
                email={column.email}
                roomId={column.roomId}
                checkInDate={column.checkInDate}
                checkOutDate={column.checkOutDate}
              />
            );
          })}
        </tbody>
      </table>
    );
}

const SearchResults = () => {
    const [myData, setMyData] = useState(data)
    return(
        <div>
            <Row data = {myData} />;
        </div>
    )
};

export default SearchResults;



//  <div>
//    <table className="table table-striped">
//      <thead>
//        <tr>
//          <th scope="col">id</th>
//          <th scope="col">Title</th>
//          <th scope="col">First name</th>
//          <th scope="col">Surname</th>
//          <th scope="col">Email</th>
//          <th scope="col">Room id</th>
//          <th scope="col">Check in date</th>
//          <th scope="col">Check out date</th>
//        </tr>
//      </thead>
//      <tbody>
//        {myData.map((props) => (
//          <tr>
//            <th scope="row" id={props.id}>
//              {props.id}
//            </th>
//            <tb>{props.title}</tb>
//            <tb>{props.firstName}</tb>
//            <tb>{props.surname}</tb>
//            <tb>{props.email}</tb>
//            <tb>{props.roomId}</tb>
//            <tb>{props.checkInDate}</tb>
//            <tb>{props.checkOutDate}</tb>
//          </tr>
//        ))}
//      </tbody>
//    </table>
//  </div>;
