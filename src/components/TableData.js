import React, { Component } from 'react';
import TableRow from './TableRow';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = { setActiveRow: this.props.datas, countActiveRow: 5 };
    };

    rowActive = (viewRow) => {
        let j = viewRow - 1;
        let activeRow = this.state.setActiveRow;
        if (!activeRow[j].isActive) {
            activeRow[j].isActive = true;
            this.setState({ setActiveRow: activeRow, countActiveRow: ++this.state.countActiveRow })
        }
        else {
            activeRow[j].isActive = false;
            this.setState({ setActiveRow: activeRow, countActiveRow: --this.state.countActiveRow })
        };
    };
    
    temp = () => { this.props.updateCounter(this.state.countActiveRow) };

    render() {
        const rows = this.props.datas;
        let rowData = rows.map((item, i) => {
            return (<TableRow item={item}
                index={i}
                trCss={rows[i].isActive ? 'selected' : 'default'}
                rowClick={this.rowActive}
                temprowClick={this.temp} />)
        })
        return (
            <tbody id="rows">
                {rowData}
            </tbody>

        )
    };
};

export default TableData;