import React, {Component} from 'react';
import Error from '../Error/Error';
import './App.css';
import app from '../../../builder/builder';

class App extends Component{
  state = {
    text: '',
    showError: false,
    level: 'easy'
  }

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      showError: false
    })
  }

  submit = (e) => {
    e.preventDefault();
    const {text, level} = this.state;
    if(text.length > app.minimumWords){
      const result = app.build(text, level);
      console.log(result);
    }
    else{
      this.setState({showError: true})
    }
  }

  render() {
    return (
      <div className="App">
      <form onSubmit={this.submit}>
        <textarea id="text" onChange={this.change}/>
        <button>submit</button>
        <select id="level" onChange={this.change}>
          <option id="0">easy</option>
          <option id="1">intermediate</option>
          <option id="2">hard</option>
        </select>
        <Error showError={this.state.showError} minLength={app.minimumWords} />
      </form> 
      </div>
    );
  }
}

export default App;
