import React, { Component } from 'react';

class TableCell extends Component {
	constructor(props){
		super(props);
		this.state={
			currColor: null
		}

	}

	onClick = () => {
		this.setState({currColor: this.props.selectedColor});
		// const that = this;
		// return (e) => {
		// 	this.style.backgroundColor = that.props.selectedColor;
		// }
	}
	render(){
		let style= {"background-color":this.state.currColor};
		return(<td style={style} onClick={this.onClick}>hello!!!</td>);
	}
}
export default TableCell;