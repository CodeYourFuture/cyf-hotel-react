import React from 'react';

const SearchButton = (props) => {
    return (
        <td>
            <button className="btn btn-primary fn-submit-name">{props.value}</button>
        </td>
    );
}


export default SearchButton;