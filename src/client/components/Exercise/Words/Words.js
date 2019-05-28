import React from 'react'

export default function Words(props) {
  return props.exercise.map((word, i) => {
    if(word !== '{gap}')
      return <span key={i} id={i}>{word}</span>
    else
      return <input onChange={props.change} value={props.userAnswers[i]} key={i} id={i} />
  });
}
