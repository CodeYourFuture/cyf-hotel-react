import React, { Component } from 'react';

import TableHead from './TableHead.js';
import TableData from './TableData.js';
import Counter from './Counter.js';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setActiveRow: this.props.result,
            countActiveRow: 0,
            sortOrder: 'ascending'
        };
        this.handleRowActive = this.handleRowActive.bind(this);
    };

    handleRowActive = (id) => {
        let j = id - 1;
        let activeRow = this.props.result;
        if (!activeRow[j].isActive) {
            activeRow[j].isActive = true;
            this.setState({ setActiveRow: activeRow, countActiveRow: ++this.state.countActiveRow, })
        }
        else {
            activeRow[j].isActive = false;
            this.setState({ setActiveRow: activeRow, countActiveRow: --this.state.countActiveRow })
        };
    };

    sortFunction = (data, column) => {
        return data.sort((a, b) => {
            if (this.state.sortOrder === 'ascending') {
                if (a[column] > b[column]) {
                    return 1
                } else {
                    return -1
                }
            } else {
                if (a[column] < b[column]) {
                    return 1
                } else {
                    return -1
                }
            };
        });
    };

    handelSort = (setColumn) => {
        let tempSortOrder;
        if (this.state.sortOrder === 'ascending') {
            tempSortOrder = 'descending';
        } else {
            tempSortOrder = 'ascending';
        }
        this.setState({
            setActiveRow: this.sortFunction(this.state.setActiveRow, setColumn),
            sortOrder: tempSortOrder
        });
    };

    render() {
        return (
            <div>
                <Counter messageCounter="Result " result={this.props.result.length} />
                <Counter messageCounter="Row selected " result={this.state.countActiveRow} />
                <table className="table">
                    <TableHead sortColumn={this.handelSort} />
                    <TableData result={this.props.result} rowActive={this.handleRowActive} />
                </table>
            </div>
        )
    };
};

export default Results;