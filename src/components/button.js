import React from "react";

let inputType = '';
const getInput = (event) => {
    inputType = event.target.value
}
const button = ({ searchHandler }) => (
    <table className="table search-table">
        <thead>
            <tr>
                <th>Customer Id</th>
                <th />
                <th>Customer Name</th>
                <th />
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input
                        id="customerId"
                        type="text"
                        className="form-control"
                        placeholder="Customer id"
                        name="customerId"
                    />
                </td>
                <td>
                    <button className="btn btn-primary fn-submit-name" >Search IDs</button>
                </td>
                <td>
                    <input
                        className="form-control"
                        placeholder="Customer name"
                        onChange={getInput}
                    />
                </td>
                <td>
                    <button className="btn btn-primary fn-submit-name" onClick={() => searchHandler(inputType)}>Search Name</button>
                </td>
            </tr>
        </tbody>
    </table>
);

export default button;