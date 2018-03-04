import React from "react";

const button = (props) => (
    <div className="search">
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
                            onChange={props.searchHandler}
                        />
                    </td>
                    <td>
                        <button className="btn btn-primary fn-submit-name" >Search Name</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default button;