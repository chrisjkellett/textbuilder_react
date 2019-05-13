import React, {Component} from 'react';
import './App.css';
import app from './utils/app';

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
    const result = app.build(this.state.text, 2);
    console.log(result);
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.submit}>
        <textarea onChange={this.change}/>
        <button>submit</button>
      </form> 
      </div>
    );
  }
}

export default App;
