import React, {Component} from 'react';
import validate from '../../tools/validate/validate';
import Words from './Words/Words';

export default class Exercise extends Component {
  state = {
    userAnswers: null
  }
  
  componentWillMount(){
    if(this.props.exercise !== null){
      let obj = {};
      this.props.exercise.forEach((word, i) => {
        if(word === '{gap}'){
          obj[i] = ''
        }  
      });
      this.setState({userAnswers: obj});
    }
  }

  change = ({target: {id, value}}) => {
    this.setState({
      userAnswers: {
        ...this.state.userAnswers,
        [id]: validate.hasNoSpaces(value) ? value : this.state.userAnswers[id]
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          <Words 
            exercise={this.props.exercise}
            change={this.change}
            userAnswers={this.state.userAnswers} />
        </div>
        <button onClick={() => this.props.check(this.state.userAnswers)}>check</button>
      </div>
    )
  }
}
