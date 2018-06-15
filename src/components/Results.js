import React, { Component } from 'react';

import TableHead from './TableHead.js';
import TableData from './TableData.js';
import Counter from './Counter.js';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { countRow: 0, isRowClick: false };
    }

    rowClick = event => {
        if (this.state.isRowClick === false) {
            this.setState({
                isRowClick: true,
                countRow: ++this.state.countRow
            });
        } else {
            this.setState({
                isRowClick: false,
                countRow: --this.state.countRow
            });
        }
    }

    render() {
        return (
            <div>
                <Counter result={this.props.result} />
                <p>Rows selected : <span>{this.state.countRow}</span></p>
                <table className="table">
                    <TableHead />
                    <TableData
                        trCss={this.state.isRowClick ? 'selected' : 'default'}
                        datas={this.props.result}
                        trClick={this.rowClick}
                    />
                </table>
            </div>
        )
    };
};

export default Results;