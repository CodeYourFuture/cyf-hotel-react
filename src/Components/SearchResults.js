import react from "react";
import data from '../data/fakeBookings.json'


const SearchResults = () => {
  console.log('data', data)
 
return (

  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>

    <tbody>
    {data.map(d => {
 return (
   <tr>
     <th scope="row">1</th>
     <td>{d.firstName}</td>
     <td>{d.surname}</td>
     <td>{}</td>
   </tr>
 );
    })}
    
    </tbody>
  </table>
);
}

export default SearchResults