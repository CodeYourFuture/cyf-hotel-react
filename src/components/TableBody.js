import React from 'react';
import TableElement from './TableElement';

class TableBody extends React.Component {
	render() {
		return (
			<tbody>
				<tr>
					<TableElement info='Mrs'/>
					<TableElement info='Olena'/>
					<TableElement info='Kashuba'/>
					<TableElement info='olenak@gmail.com'/>
					<TableElement info='1'/>
					<TableElement info='2018-04-01'/>
					<TableElement info='2018-04-06'/>
				</tr>
			</tbody>
		)
	}
}

export default TableBody;