import React from "react";
import ResultHead from "./ResultHead.js";
import ResultBody from "./ResultBody.js";

const Results = ({ filteredResult, sortBy, err, sortByNumber }) => {
    if (err) {
        return <h1>somethin wont roung</h1>
    }
    if (filteredResult.length) {
        return (
            <div>
                <h3>Result: {filteredResult.length}</h3>
                <table className="table">
                    <ResultHead sortBy={sortBy} sortByNumber={sortByNumber} />
                    <ResultBody filteredResult={filteredResult} />
                </table>
            </div>
        )
    } else {
        return <h1>Please Enter Existing Name</h1>
    }

};
export default Results;