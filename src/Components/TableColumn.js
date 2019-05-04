import React from 'react';


class TableColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false }
    }
    sendColumnToSort = () => {
        const nameOFCoulumn = this.props.title
        console.log(nameOFCoulumn)
        this.setState(prev => {
            return { clicked: !prev.clicked }
        })

        this.props.sortAndUpdate(nameOFCoulumn, this.state.clicked)
        console.log(this.state.clicked)
    }

    render() {

        return (
            <th onClick={this.sendColumnToSort} scope="col">{this.props.title}</th>
        );
    }
}

export default TableColumn;