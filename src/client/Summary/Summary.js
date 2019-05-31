import React, {Component} from 'react';

export default class Summary extends Component {
  passed(index){
    return <div className='passed word' key={index}>{this.props.text[index]}</div>
  }

  failed(index){
    return <div key={index} className='failed word'>{this.props.text[index]}</div>
  }

  normalWord(index){
    return <div key={index} className='word'>{this.props.text[index]}</div>
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
              case '{': return <br />
              default: return this.normalWord(index);
            }
          })}
        </div>
        <div>score: {this.props.score.correct}/{this.props.score.total}</div>
      </div>
    )
  }
};

