import Table from "./Table";
import FakeBookings from "./data/fakeBookings.json";


const SearchResults = () =>{
    return (
    <div>
        <div>{Date()}</div>
        <div >
        <Table  results={FakeBookings}/>
        </div>
    </div>
    );
}
export default SearchResults;