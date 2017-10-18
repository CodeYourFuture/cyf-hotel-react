import React from 'react'
import moment from 'moment'

class TableRows extends React.Component{
constructor(props){
    super(props)
    this.state ={
        selected: false
    }
}
selctedRows = () =>{
    this.setState({selected : !this.state.selected},
    () => {
        this.props.counter(this.state.selected)
    })
    

}

    render(){
    return (
        <tr className={this.state.selected ? 'selectRow' : ''}>
        <td onClick={this.selctedRows}>{this.props.customerId}</td>
        <td onClick={this.selctedRows}>{this.props.title}</td>
        <td onClick={this.selctedRows}>{this.props.firstname}</td>
        <td onClick={this.selctedRows}>{this.props.surname}</td>
        <td onClick={this.selctedRows}>{this.props.email}</td>
        <td onClick={this.selctedRows}>{this.props.roomId}</td>
        <td onClick={this.selctedRows}>{this.props.checkInDate}</td>
        <td onClick={this.selctedRows}>{this.props.checkOutDate}</td>
        <td onClick={this.selctedRows}>{moment(this.props.checkOutDate).diff(this.props.checkInDate, 'days')}</td>
      </tr> 
    )
    }
}

export default TableRows