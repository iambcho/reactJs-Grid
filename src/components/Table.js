import React, { Component } from 'react';
import TableRow from './TableRow.js';

class Table extends Component {
	constructor(props){
		super(props);

	}
	createRows = () => {
		let rows = [];
		console.log(this.props.numRows);
		for(let i = 0; i < this.props.numRows; i++){
			rows.push(<TableRow numCols={this.props.numCols} selectedColor={this.props.selectedColor} />);
		}
		return rows;

	}
	render(){
		return(<table><tbody>{this.createRows()}</tbody></table>);
	}
}
export default Table;