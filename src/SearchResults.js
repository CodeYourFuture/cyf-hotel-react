import { Table , TableHead} from "./Table";
import FakeBookings from "./data/fakeBookings.json";


const SearchResults = () =>{
    return (
        <div >
        <TableHead  />

        <Table  results={FakeBookings}/>
        </div>
    );
}
export default SearchResults;