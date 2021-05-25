import React from "react";

const TableBody = (props)=>{
    console.log(props.Body);
    return(
        <tr>
            {props.Body.map((data, index)=>{
                if(props.Body.indexOf(data) === 0){
                    return <th scope="row" key={index}>{data}</th>
                }
                    return <td key={index}>{data}</td>})}
        </tr>
    )
}

export default TableBody;