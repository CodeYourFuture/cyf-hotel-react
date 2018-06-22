import React, { Component } from 'react';
import TableRow from './TableRow';

class TableData extends Component {
    render() {
        const rows = this.props.result;
        // console.log(rows);
        let rowData = rows.map((item, i) => {
            return (<TableRow item={item}
                index={i}
                trCss={rows[i].isActive ? 'selected' : 'default'}
                rowClick={this.props.rowActive}
            />)
        })
        return (
            <tbody id="rows">
                {rowData}
            </tbody>
        )
    };
};

export default TableData;