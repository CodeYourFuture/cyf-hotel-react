import react from "react";
import CardData from "./CardData";
// import searchButton from "./SearchButton";



const SearchResult = ({results}) =>{


    console.log(results)


    return (
        <>
            <table className="table">
                <thead>
                    <tr> 
                       <th>ID</th>
                       <th>title</th>
                       <th>FirstName</th>
                       <th>Surname</th>
                       <th> Email</th>
                       <th>RoomId</th>
                       <th>Check In Date</th>
                       <th>Check out date</th>
                       <th>Nights</th>
                    </tr>
                </thead>
                {
                    results.map((result, index) => (
                        //    <tr key={index}>
                        //     <td>{result.id}</td>
                        //     <td>{result.title}</td>
                        //     <td>{result.firstName}</td>
                        //     <td>{result.surname}</td>
                        //     <td>{result.email}</td>
                        //     <td>{result.roomId}</td>
                        //     <td>{result.checkInDate}</td>
                        //     <td>{result.checkOutDate}</td>
                        //    </tr>

                        <CardData key={index} result={result}/>
                        )
                    )
                }
                
            </table>
        </>
    )
}

export default SearchResult;