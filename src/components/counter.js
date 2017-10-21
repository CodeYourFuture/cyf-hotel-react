import React from 'react';
import PropTypes from 'prop-types';


const Counter = props => 
    <tbody>
        <tr>
            <td> Result Found:</td>
            <td>{props.resultLength}</td>
        </tr>
    </tbody>   
   ;

Counter.propTypes = {
    numberFound: PropTypes.number
};
export default Counter;