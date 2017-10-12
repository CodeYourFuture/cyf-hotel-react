import React , {Component} from 'react'
import * as FakeBookings from "../data/fakeBookings.json"

export default class SortTable extends Component{
    constructor(props){
        super(props)
        sort: FakeBookings
    }
    sortById = () =>{
        this.setState({sort:FakeBookings.sort(function(a,b){
          return a.id - b.id
        })})
      }

    render(){
        return(
                <th onClick={this.sortById} >id</th>
        )
    }

}