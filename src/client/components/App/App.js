import React, {Component} from 'react';
import Error from '../Error/Error';
import './App.css';
import app from '../../../builder/builder';

class App extends Component{
  state = {
    text: '',
    showError: false
  }

  change = (e) => {
    this.setState({
      text: e.target.value,
      showError: false
    })
  }

  submit = (e) => {
    e.preventDefault();
    const {text} = this.state;
    if(text.length > 5){
      const result = app.build(this.state.text, 'intermediate');
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
        <textarea onChange={this.change}/>
        <button>submit</button>
        <select>
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
