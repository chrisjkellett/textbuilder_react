import React, {Component} from 'react';
import Form from '../Form/Form';
import Exercise from '../Exercise/Exercise';
import './App.css';
import app from '../../../builder/builder';

export default class App extends Component {
  state = {
    text: '',
    showError: false,
    showForm: true,
    level: 'easy'
  }

  change = (e) => {
    this.setState({[e.target.id]: e.target.value, showError: false});
  };

  submit = (e) => {
    e.preventDefault();
    const {text, level} = this.state;
    if(text.length > app.minimumWords)
      this.setState({result: app.build(text, level)});
    else
      this.setState({showError: true});
  };

  render() {
    const {showError, showForm} = this.state;
    return (
      <div>
        {showForm 
          ? <Form submit={this.submit} change={this.change} showError={showError} minimumWords={app.minimumWords} />
          : <Exercise />
        }
      </div>
    );
  };
};
