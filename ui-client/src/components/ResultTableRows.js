import React, { Component } from "react";

export default class ResultTableRows extends Component{
  constructor(props){
    super(props)
    this.state ={
      isRowSelected : false
    }
  }
  rowSelected =(i)=>{
    let numberOfRowSelected = this.props.numberOfRowSelected; 
    if(this.state.isRowSelected){
      this.setState({
        isRowSelected:false
       }, function(){ //as it is not guranted that change in state is reflected immediately
        this.refs[i].removeAttribute('class')
        //we are updating the state of the parent
        this.props.updateNumberOfRowsSelected(--numberOfRowSelected)
      }) 
    } else{
      this.setState({
        isRowSelected:true
      }, function(){ 
        this.refs[i].setAttribute('class','table-success');
        //we are updating the state of the parent
        this.props.updateNumberOfRowsSelected(++numberOfRowSelected)
      })
    }
  }
  
  render(){ 
    return (
      <tr 
        key ={this.props.index}
        /*since the key is not accessible for use we pass the index to identify each row from refs  */
        onClick ={this.rowSelected.bind(this,this.props.index)} 
        ref={this.props.index}
        >
      { 
        /* get all the keys of the object and map their value to the td*/
        Object.keys(this.props.reservations)
        .map((result,j)=>{
          if(result !== 'id'){
            return <td key={j}>
                      {this.props.reservations[result]}
                   </td>  
          }     
        })
      }
      </tr>
    )
  }  
} 
