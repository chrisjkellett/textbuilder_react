import React, {Component} from 'react';
import './App.css';
import app from './models/app';

class App extends Component{
  state = {
    text: ''
  }

  change = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  submit = (e) => {
    e.preventDefault();
    const result = app.build(this.state.text, 7);
    console.log(result);
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.submit}>
        <textarea onChange={this.change}/>
        <button>submit</button>
        <select>
          <option id="0">easy</option>
          <option id="1">intermediate</option>
          <option id="2">hard</option>
        </select>
      </form> 
      </div>
    );
  }
}

export default App;
