import React, { Component } from 'react';
import TableCell from './TableCell';

class TableRow extends Component {
	constructor(props){
		super(props);

	}
	createCols = () => {
		let cols = [];
		for(let i = 0; i < this.props.numCols; i++){
			cols.push(<TableCell selectedColor={this.props.selectedColor} />)
		}
		return cols;
	}
	render(){
		return(<tr>{this.createCols()}</tr>);
	}
}
export default TableRow;