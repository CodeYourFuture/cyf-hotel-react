import React, { Component } from 'react';
import TableHead from './TableHead.js';
import TableData from './TableData.js';
import Counter from './Counter.js';

class Results extends Component {
    render() {
        return (
            <div>
                <Counter result={this.props.result} />
            <table>
                <TableHead />
                <TableData datas={this.props.result} />
            </table>
            </div>
        )
    };
};

export default Results;