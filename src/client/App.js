import React, {Component} from 'react';
import Form from './Form/Form';
import Exercise from './Exercise/Exercise';
import Summary from './Summary/Summary';
import app from '../tools/builder/builder';

export default class App extends Component {
  state = {
    text: '',
    corrections: null,
    exercise: null,
    showError: false,
    showForm: true,
    showSummary: false,
    showExercise: false,
    level: 'easy',
    userAnswers: null,
    score: null
  }

  change = (e) => {
    this.setState({[e.target.id]: e.target.value, showError: false});
  };

  check = (userAnswers) => {
    const text = this.state.text.split(" ");
    const corrections = app.check(userAnswers, text);
    this.setState({
      showExercise: false, 
      showSummary: true, 
      corrections: corrections, 
      userAnswers: userAnswers,
      score: app.score(corrections)
    });
  }

  submit = () => {
    const {text, level} = this.state;
    if(text.split(" ").length >= app.minimumWords)
      this.setState({exercise: app.build(text, level), showForm: false, showExercise: true});
    else
      this.setState({showError: true});
  };

  render() {
    const {showError, score, showForm, exercise, showExercise, showSummary, corrections, userAnswers} = this.state;
    const text = this.state.text.split(" ");
    return (
      <div>
        {showForm &&
          <Form submit={this.submit} change={this.change} showError={showError} minimumWords={app.minimumWords} /> }
        {showExercise &&
          <Exercise exercise={exercise} check={this.check} />}
        {showSummary && corrections &&
          <Summary 
          corrections={corrections} 
          text={text} 
          userAnswers={userAnswers}
          score={score}/>}
      </div>
    );
  };
};
