import React, {Component} from 'react';
import validate from '../../utilities/validate/validate';

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
          {this.props.exercise.map((word, i) => {
            if(word !== '{gap}')
              return <span key={i} id={i}>{word}</span>
            else
              return <input onChange={this.change} value={this.state.userAnswers[i]} key={i} id={i} />
          })}
        </div>
        <button onClick={() => this.props.check(this.state.userAnswers)}>check</button>
      </div>
    )
  }
}
