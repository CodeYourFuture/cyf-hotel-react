import React from 'react';
import PropTypes from 'prop-types';
import * as FakeBookings from "../data/fakeBookings.json"

const Counter = props => 
    <tbody>
        <tr>
            <td> Result Found:</td>
            <td>{props.FakeBookings.parse.length}</td>
        </tr>
    </tbody>   
   ;

Counter.propTypes = {
    numberFound: PropTypes.number
};
export default Counter;