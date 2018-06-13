import React, { Component } from 'react';
import TableHead from './TableHead.js';
import TableData from './TableData.js';

class Results extends Component {
    render() {
        return (
            <table>
                <TableHead />
                <TableData datas={this.props.result} />
            </table>
        )
    }
}

export default Results;