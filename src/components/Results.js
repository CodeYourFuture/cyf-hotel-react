import React, { Component } from 'react';

import TableHead from './TableHead.js';
import TableData from './TableData.js';
import Counter from './Counter.js';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = { setActiveRow: this.props.result, countActiveRow: 0 };
        this.handleRowActive = this.handleRowActive.bind(this);
    };

    handleRowActive = (id) => {
        let j = id - 1;
        console.log(id);
        let activeRow = this.props.result;
        console.log(activeRow);
        if (!activeRow[j].isActive) {
            activeRow[j].isActive = true;
            this.setState({ setActiveRow: activeRow, countActiveRow: ++this.state.countActiveRow, })
        }
        else {
            activeRow[j].isActive = false;
            this.setState({ setActiveRow: activeRow, countActiveRow: --this.state.countActiveRow })
        };
    };

    render() {
        return (
            <div>
                <Counter messageCounter="Result " result={this.props.result.length} />
                <Counter messageCounter="Row selected " result={this.state.countActiveRow} />
                <table className="table">
                    <TableHead />
                    <TableData result={this.props.result} rowActive={this.handleRowActive} />
                </table>
            </div>
        )
    };
};

export default Results;