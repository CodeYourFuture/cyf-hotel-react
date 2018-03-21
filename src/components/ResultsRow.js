import React,   {Component} from  'react';
export default class ResultsRow extends  Component {
    constructor(props){
        super(props )
        this.state = {
          clicked: false,
          count:  0
        }
    }
handleclick = ()=>{
    this.setState({
        clicked: !this.state.clicked,
        count: this.state.count +1



    })
}
    render(){
        var item = this.props.item 
        var className = this.state.clicked ? 'selected': null;
        return ( 

    <tr onClick= {this.handleclick} className={className}>
    <td>{item.tittle}</td>
    <td>{item.firstname}</td>
    <td>{item.surname}</td>
    <td>{item.email}</td>

    <td>{item.room_id}</td>
    <td>{item.check_in_date}</td>
    <td>{item.check_out_date}</td>
    <td>
    {item.duration}
    </td>
    <td>{this.state.count}</td>
  </tr>
        )
    }
}
        