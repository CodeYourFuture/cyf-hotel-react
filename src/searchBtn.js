import React from 'react';
function SearchBtn(props) {
    return (
        <button onclick={props.onclick}>Search</button>
    );
}
export default SearchBtn;