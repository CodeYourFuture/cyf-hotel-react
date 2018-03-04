import React from 'react';

const resultHeading = (props) => {
    return (
        <thead>
            <tr>
                {props.result.map((title, index) => (
                    <th onClick={props.sortColumn} key={index}>{title}</th>
                ))}
            </tr>
        </thead>
    )
}

export default resultHeading;