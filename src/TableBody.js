import React from "react";

const TableBody = (props)=>{

    return(
        <tr>
            {props.Body.map((data, index)=>{
                if(data === `id`){
                return <th scope="row">{data}</th>
                }
             return <td key={index}>{data}</td>})}
        </tr>
    )
}

export default TableBody;