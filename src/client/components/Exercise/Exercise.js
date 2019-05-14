import React, {Component} from 'react'

export default class Exercise extends Component {
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

  change = (e) => {
    this.setState({
      userAnswers: {
        ...this.state.userAnswers,
        [e.target.id]: e.target.value 
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
              return <input onChange={this.change} key={i} id={i} />
          })}
        </div>
        <button onClick={() => this.props.check(this.state.userAnswers)}>check</button>
      </div>
    )
  }
}
