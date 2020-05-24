import React from "react"

function SearchBtn() {
    return (
        <div className="search-row">
            <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
            />
            <button className="btn btn-primary">Search</button>
            <input
                type="text"
                id="customerId"
                className="form-control"
                placeholder="Customer id"
            />
            <button className="btn btn-primary">Search</button>
        </div>

    )

}

export default SearchBtn;