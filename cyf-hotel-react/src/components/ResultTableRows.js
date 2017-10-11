import React from 'react';

class ResultTableRows extends React.Component{
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
       }, function(){
        this.refs[i].removeAttribute('class')
        this.props.updateNumberOfRowsSelected(--numberOfRowSelected)
      }) 
    } else{
      this.setState({
        isRowSelected:true
      }, function(){
        this.refs[i].setAttribute('class','table-success');
        this.props.updateNumberOfRowsSelected(++numberOfRowSelected)
      })
    }
    
  }
  
  render(){ 
    return (
      <tr 
        key ={this.props.index} 
        onClick ={this.rowSelected.bind(this,this.props.index)} 
        ref={this.props.index}
        >
      { 
        /* get all the keys of the object and map their value to the td*/
        Object.keys(this.props.booking)
        .map((result,j)=>{
          if(result !== 'id'){
            return <td key={j}>
                      {this.props.booking[result]}
                   </td>  
          }     
        })
      }
      </tr>
    )
  }  
} 
export default ResultTableRows;