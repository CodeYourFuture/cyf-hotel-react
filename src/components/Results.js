import React, { Component } from 'react';

import TableHead from './TableHead.js';
import TableData from './TableData.js';
import Counter from './Counter.js';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { countActiveRows: 2 };
    };

    updateCounter = (value) => {
        this.setState({ countActiveRows: value })
    };

    render() {
        return (
            <div>
                <Counter result={this.props.result} />
                <p>Rows selected : <span>{this.state.countActiveRows}</span></p>
                <table className="table">
                    <TableHead />
                    <TableData updateCounter={this.updateCounter} datas={this.props.result} />
                </table>
            </div>
        )
    };
};

export default Results;