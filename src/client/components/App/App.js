import React, {Component} from 'react';
import Form from '../Form/Form';
import './App.css';
import app from '../../../builder/builder';



export default class App extends Component{
  state = {
    text: '',
    showError: false,
    showForm: true,
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
      <Form 
        submit={this.submit} 
        change={this.change} 
        showForm={this.state.showForm}
        showError={this.state.showError} 
        minimumWords={app.minimumWords}
      />
    );
  }
};
