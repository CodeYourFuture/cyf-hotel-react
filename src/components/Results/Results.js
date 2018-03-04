import React, { Component } from 'react';
import ResultHeading from './ResultHeading.js';
import ResultBody from './ResultBody.js';

class Results extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col">
                    <p>Results</p>
                    <table className="table search-table">
                        <ResultHeading result={this.props.resultHeading} sortColumn={this.props.sortColumn} />
                        <ResultBody bookingsItems={this.props.bookingsItems} />
                    </table>
                </div>
            </div>
        )
    }

}


export default Results 