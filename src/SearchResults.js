import React from "react";
const SearchResults = (props) => {
const myArr = [
  {
    "id": 1,
    "title": "Mr",
    "firstName": "John",
    "surname": "Doe",
    "email": "johndoe@doe.com",
    "roomId": 2,
    "checkInDate": "2017-11-21",
    "checkOutDate": "2017-11-23"
  },
  {
    "id": 2,
    "title": "Doctor",
    "firstName": "Sadia",
    "surname": "Begum",
    "email": "begum_sadia@sadia.org",
    "roomId": 1,
    "checkInDate": "2018-02-15",
    "checkOutDate": "2018-02-28"
  },
  {
    "id": 3,
    "title": "Prince",
    "firstName": "Henry",
    "surname": "Wales",
    "email": "harry@wales.com",
    "roomId": 5,
    "checkInDate": "2018-03-01",
    "checkOutDate": "2018-04-09"
  },
  {
    "id": 4,
    "title": "Dame",
    "firstName": "Judi",
    "surname": "Dench",
    "email": "Judi@dench.co.uk",
    "roomId": 6,
    "checkInDate": "2017-12-25",
    "checkOutDate": "2018-01-03"
  },
  {
    "id": 5,
    "title": "Madam",
    "firstName": "Anuradha",
    "surname": "Selvam",
    "email": "anu@selvam.net",
    "roomId": 3,
    "checkInDate": "2017-08-30",
    "checkOutDate": "2017-10-02"
  }
];    

const headingsKeys = ['id', 'title', 'firstName', 'surname', 'email', 'roomId', 'checkInDate', 'checkOutDate'];
 
return (
<table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>  
      <th scope="col">Title</th>
      <th scope="col">First Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Room Id</th>
      <th scope="col">Check-In Date</th>
      <th scope="col">Check-Out Date</th>
      <th scope="col">Number of Nights</th>
    </tr>
  </thead>
    <tbody>
      
         {props.theBookings.map((booking, index)  => {
             return (
           <tr>
                                 <th scope="col">{booking.id}</th>
                                 <td>{booking.title}</td>
                                 <td>{booking.firstName}</td>
                                 <td>{booking.surname}</td>
                                 <td>{booking.email}</td>
                                 <td>{booking.roomId}</td>
                                 <td>{booking.checkInDate}</td>
                                 <td>{booking.checkOutDate}</td>
           </tr>
                        
         )})}
      
      </tbody>
</table>
)};

export default SearchResults;