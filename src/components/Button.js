import React ,{Component} from 'react';                 


   export default class Button extends Component{
       render(){
           return(
           
             <button onClick={this.props.onClick} className="btn btn-warning fn-submit-name">Search {this.props.label}</button>
           
           

           )
       }
   }
 