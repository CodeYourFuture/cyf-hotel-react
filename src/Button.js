import React from "react";

function Button() {

    return(
        <div className="search-row">
            <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer Id"
            />
            <button className="btn btn-primary">Search IDs</button>
        </div>
    )
}

export default Button;