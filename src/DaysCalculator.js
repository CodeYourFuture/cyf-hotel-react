

var moment = require('moment');
moment().format();

const DaysCalculator = (props) => {

    return (
        
    moment(props.dateout).diff(moment(props.datein), 'days' )
 )
}
export default DaysCalculator;