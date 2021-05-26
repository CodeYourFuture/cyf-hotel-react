import React from "react";

const TableBody = (props)=>{
        console.log("This is props",props.Body);
            let dataArr = props.Body;
            
        return(
                dataArr.map((data, index)=>(
                    <tr key={index}>

                    <th>{data.id}</th>
                    <td>{data.title}</td>
                    <td>{data.firstName}</td>
                    <td>{data.surname}</td>
                    <td>{data.email}</td>
                    <td>{data.roomId}</td>
                    <td>{data.checkInDate}</td>
                    <td>{data.checkOutDate}</td>
                    
                     </tr>
                     ))
        
                )
}



export default TableBody;