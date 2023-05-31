import React from 'react';

//mport FakeBookings from "./data/fakeBookings.json";

function SearchResults({results}) {
  
  return (
   <> <table className="table table-hover table-white">
   <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">First name</th>
      <th scope="col">Surname</th>
      <th scope="col">Email</th>
      <th scope="col">Room Id</th>
      <th scope="col">Check in date</th>
      <th scope="col">Check out date</th>
      </tr>
  </thead> 
  <tbody>
    
    {results.map((element)=>{
     return <><tr><td>{element.id}</td>
     <td>{element.title}</td>
     <td>{element.firstName}</td>
     <td>{element.surname}</td>
     <td>{element.email}</td>
     <td>{element.roomId}</td>
     <td>{element.checkInDate}</td>
     <td>{element.checkOutDate}</td></tr></>
})}
      
    
    
  </tbody>
  </table></>)
}
export default SearchResults;  