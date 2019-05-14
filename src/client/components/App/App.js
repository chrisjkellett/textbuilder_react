import React, {Component} from 'react';
import Form from '../Form/Form';
import Exercise from '../Exercise/Exercise';
import './App.css';
import app from '../../../builder/builder';

export default class App extends Component {
  state = {
    text: '',
    exercise: null,
    showError: false,
    showForm: true,
    level: 'easy'
  }

  change = (e) => {
    this.setState({[e.target.id]: e.target.value, showError: false});
  };

  check = () => {
    console.log('check')
  }

  submit = () => {
    const {text, level} = this.state;
    if(text.length > app.minimumWords)
      this.setState({exercise: app.build(text, level), showForm: false});
    else
      this.setState({showError: true});
  };

  render() {
    const {showError, showForm, exercise} = this.state;
    return (
      <div>
        {showForm 
          ? <Form submit={this.submit} change={this.change} showError={showError} minimumWords={app.minimumWords} />
          : <Exercise exercise={exercise} check={this.check} />
        }
      </div>
    );
  };
};
