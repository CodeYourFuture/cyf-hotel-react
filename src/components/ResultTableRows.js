import React from 'react';


class ResultTableRows extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      isRowSelected : false
    }
  }
  rowSelected =(i)=>{
    if(this.state.isRowSelected){
      this.setState({isRowSelected:false}, function(){
        this.refs[i].removeAttribute('class')
        console.log(this.state)
      }) 
      ;
       
    } else{
      this.setState({isRowSelected:true}, function(){
        this.refs[i].setAttribute('class','table-success');
        console.log(this.refs)
      })
      
      
    }
    
  }
  
  render(){
    return (this.props.bookings.map( (booking,i) =>(
      <tr key ={i} onClick ={this.rowSelected.bind(this,i)} ref={i}>
      {
        /* get all the keys of the object and map their value to the td*/
        Object.keys(booking)
        .map((result,j)=>{
          if(result !== 'id')
            return <td key={j}>{booking[result]}</td>   
        })
      }
      </tr>
    )))
  }
  
} 



export default ResultTableRows;