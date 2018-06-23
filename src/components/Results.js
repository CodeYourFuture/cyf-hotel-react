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
        this.sortFunction = this.sortFunction.bind(this);
        this.handelSort = this.handelSort.bind(this)
    };

    handleRowActive = (id) => {
        let activeRow = this.state.setActiveRow;
        let filterActivRow = activeRow.find(x => x.id === id);
        if (!filterActivRow.isActive) {
            filterActivRow.isActive = true;
            let tempCountActiveRow = this.state.countActiveRow + 1;
            this.setState({
                setActiveRow: activeRow,
                countActiveRow: tempCountActiveRow
            })
        } else {
            filterActivRow.isActive = false;
            let tempCountActiveRow = this.state.countActiveRow - 1;
            this.setState({
                setActiveRow: activeRow,
                countActiveRow: tempCountActiveRow
            })
        }
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
            }
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
                <Counter messageCounter="Result " resultLength={this.props.result.length} />
                <Counter messageCounter="Row selected " resultLength={this.state.countActiveRow} />
                <table className="table">
                    <TableHead sortColumn={this.handelSort} />
                    <TableData results={this.state.setActiveRow} rowActive={this.handleRowActive} />
                </table>
            </div>
        )
    };
};

export default Results;