import React, { Component } from 'react'
import Button from './Button'

class Search extends Component {
  setInputRef = input => {
    this.input = input
  }
  submitHandler = e => {
    this.props.search(this.input.value)
    // console.log('in focus')
    e.preventDefault()
  }
  render () {
    return (
      <div className='search container'>
        <div className='page-header'>
          <h4 className='text-left'>Search Bookings</h4>
        </div>
        <div className='row search-wrapper'>
          <div className='col'>
            <form
              onSubmit={this.submitHandler}
              className='form-group search-box'
            >
              <label htmlFor='customerName'>Customer name</label>
              <div className='search-row'>
                <input
                  type='text'
                  id='customerName'
                  className='form-control'
                  placeholder='Customer Id'
                  ref={this.setInputRef}
                />
                <Button caption='Search Id' />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Search
