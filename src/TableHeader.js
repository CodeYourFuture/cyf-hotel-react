import React from "react";

const TableHeader = (props)=>{

    return(
        <tr>
            {props.Headings.map((heading, index)=><th scope="col" key={index}>{heading}</th>)}
        </tr>
    )

}

export default TableHeader;