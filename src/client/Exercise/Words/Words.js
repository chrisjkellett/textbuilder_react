import React from 'react';

export default function Words(props) {
  return props.exercise.map((word, i) => {
    if(word === '{gap}')
      return <input onChange={props.change} value={props.userAnswers[i]} key={i} id={i} />
    else if(word === '{p}')
      return <br key={i} />
    else
      return <div className='word' key={i} id={i}>{word}</div>
  });
};
