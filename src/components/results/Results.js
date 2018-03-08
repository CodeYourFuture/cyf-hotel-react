import React from "react";
import ResultHead from "./ResultHead.js";
import ResultBody from "./ResultBody.js";

const Results = ({ filteredResult, sortBy }) => {
    return (
        <div>
            <h3>Result: {filteredResult.length}</h3>
            <table className="table">
                <ResultHead sortBy={sortBy} />
                <ResultBody filteredResult={filteredResult} />
            </table>
        </div>
    )
};
export default Results;