import React, {Component} from 'react';

export default class Summary extends Component {
  passed(index){
    return <span className='passed' key={index}>{this.props.text[index]}</span>
  }

  failed(index){
    return <span key={index} className='failed'>{this.props.text[index]}</span>
  }

  normalWord(index){
    return <span key={index}>{this.props.text[index]}</span>
  }

  render() {
    return (
      <div>
        <div>
          {this.props.corrections.map((word, index) => {  
            switch(word[0]){
              case '#': return this.passed(index)
              case '!': return this.failed(index);
              case '[': return this.failed(index);
              default: return this.normalWord(index);
            }
          })}
        </div>
        <div>score: {this.props.score.correct}/{this.props.score.total}</div>
      </div>
    )
  }
};

