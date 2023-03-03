import { Table , TableHead} from "./Table";

const SearchResults = () =>{
    return (
        <div >
        <TableHead  />

        <Table id="1" title ="mr" firstName = "abcd" sureName ="aaaa" 
            email = "abcd@gmail.com" roomId = "120" checkInDate ={Date()}
            checkOutDate = "The day After Tomorrow"
        />

        <Table id="2" title ="mr" firstName = "abcd" sureName ="aaaa" 
            email = "abcd@gmail.com" roomId = "120" checkInDate ={Date()}
            checkOutDate = "The day After Tomorrow"
        />

        <Table id="3" title ="mr" firstName = "abcd" sureName ="aaaa" 
            email = "abcd@gmail.com" roomId = "120" checkInDate ={Date()}
            checkOutDate = "The day After Tomorrow"
        />

        <Table id="4" title ="mr" firstName = "abcd" sureName ="aaaa" 
            email = "abcd@gmail.com" roomId = "120" checkInDate ={Date()}
            checkOutDate = "The day After Tomorrow"
        />
        </div>
    );
}
export default SearchResults;