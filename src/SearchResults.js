import Table from "./Table";
import FakeBookings from "./data/fakeBookings.json";


const SearchResults = () =>{
    return (
    
        <div className="table-content">
        <Table  results={FakeBookings}/>
        </div>
    
    );
}
export default SearchResults;