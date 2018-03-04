import React from 'react';

const SearchInput = (props) => {
    return (
        <td>
            <input
                id={props.id}
                type="text"
                className="form-control"
                placeholder={props.placeholder}
                name={props.name}
            />
        </td>
    );
}
export default SearchInput;