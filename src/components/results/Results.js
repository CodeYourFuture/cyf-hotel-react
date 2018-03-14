import React from "react";
import ResultHead from "./ResultHead.js";
import ResultBody from "./ResultBody.js";

const Results = ({ filteredResult, sortBy, err, sortByNumber }) => {
    if (err) {
        return <h1>somethin wont roung</h1>
    }
    return (

        <div>
            <h3>Result: {filteredResult.length}</h3>
            <table className="table">
                <ResultHead sortBy={sortBy} sortByNumber={sortByNumber} />
                <ResultBody filteredResult={filteredResult} />
            </table>
        </div>
    )
};
export default Results;