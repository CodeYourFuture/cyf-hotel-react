import SearchResult from "./searchResult";
import moment from "moment";


const SearchResults = props => {
  return (
    <>
    
      <table class="table">
        <thead class="thead-dark">
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Total Nights</th>
          </tr>
        </thead>
      <tbody>
        {
          props.results.map((result)=><SearchResult key={result.id} id={result.id} title={result.title} firstName={result.firstName} surname={result.surname} email={result.email} roomId={result.roomId} checkInDate ={result.checkInDate} checkOutDate ={result.checkOutDate}/>)
        }
      </tbody>
        </table>  
</>)}
export default SearchResults;