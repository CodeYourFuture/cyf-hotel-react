import React from 'react'



const TableHeadings = (props) => {
    return (
        <thead>
            <tr>
                {props.headings.map((header, index) => {
                    return (
                        <th scope="col" key={index}>{header}</th>
                    )

                })}
            </tr>
        </thead>
    )
}



export default TableHeadings
