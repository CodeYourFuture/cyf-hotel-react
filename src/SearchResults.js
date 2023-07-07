
import React, {useState} from "react";
import moment from "moment";
import CostumerProfile from "./CostumerProfile";


const SearchResults=({results})=>{
const[selectedRow,setSelectedRow]=useState();
const [selectedCustomer, setSelectedCustomer] = useState(null);

      
const handleCostumerPrf=(costumerId)=>{
    setSelectedCustomer(costumerId);
}
    return (
      <div>  
        <table className="table" style={{marginBottom:"2em"}}>
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Email</th>
                    <th>Room ID</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Nights</th>
                    <th>Profile</th>
                </tr>
            </thead>
            <tbody>
                {results.map((booking) => {
                const checkInDate = moment(booking.checkInDate);
                const checkOutDate = moment(booking.checkOutDate);
                const nights = checkOutDate.diff(checkInDate, "days");
                const { id, title, firstName, surname, email, roomId } = booking;
                let className1=""
                if (selectedRow ===booking.id){
                    className1="rowSelected"
                }
                return (
                    <tr className={className1} key={id} onClick={()=>{setSelectedRow(id); handleCostumerPrf(id)}}>
                    <td>{booking.id}</td>
                    <td>{booking.title}</td>
                    <td>{booking.firstName}</td>
                    <td>{booking.surname}</td>
                    <td>{booking.email}</td>
                    <td>{booking.roomId}</td>
                    <td>{checkInDate.format("YYYY-MM-DD")}</td>
                    <td>{checkOutDate.format("YYYY-MM-DD")}</td>
                    <td>{nights}</td>
                    <td><button type="button" className="btn btn-secondary btn-sm" onClick={() => handleCostumerPrf(id)} >
                    Show Profilee</button>
                    </td>
                    </tr>
                );
                })}
            </tbody>
        </table> 
        
        {selectedCustomer && (
            <div >
              <CostumerProfile id={selectedCustomer}/>  
            </div>
          )}
       </div>   
    );
};

export default SearchResults;
