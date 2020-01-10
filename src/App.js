import React, { Component } from 'react';
import {Table, TableRow, TableCell} from './components';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      numRows: 0,
      numCols: 1,
      selectedColor: "#f0e3ff"
    }
  }
  addRow = () => {
    this.setState({numRows: this.state.numRows+1})
    //console.log(this.state.numRows);

  }
  addCol = () => {
    this.setState({numCols: this.state.numCols+1})

  }
  changeColor = (e) => {
    this.setState({selectedColor:e.target.value});
  }
  render() {
    return (
      <div className="App">
      <button className="add-row-button" onClick={this.addRow}>Add Row</button>
      <button className="add-col-button" onClick={this.addCol}>Add Col</button>
      <select onChange ={this.changeColor}>
        <option value="#f0e3ff">purple1</option>
        <option value="#d89cf6">purple2</option>
        <option value="#3e206d">purple3</option>
        <option value="limegreen">limegreen</option>
        <option value="hotpink">hotpink</option>
        <option value="PowderBlue">powderblue</option>
      </select>
      <Table numRows={this.state.numRows} numCols={this.state.numCols} 
        selectedColor={this.state.selectedColor} />
      </div>
    );
  }
}

export default App;
