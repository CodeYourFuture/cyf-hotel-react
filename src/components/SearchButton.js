import React from 'react';

const SearchButton = (props) => {
    return (
        <td>
            <button className="btn btn-primary fn-submit-name"  onClick={props.click}>{props.value}</button>
        </td>
    );
}

export default SearchButton;