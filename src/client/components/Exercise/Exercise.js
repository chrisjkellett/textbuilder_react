import React from 'react'
import './Exercise.css';

export default function Exercise(props) {
  return (
    <div>
      <div>
        {props.exercise.map((word, i) => {
          if(word !== '{gap}')
            return <span key={i} id={i}>{word}</span>
          else
            return <input key={i} id={i} />
        })}
      </div>
      <button onClick={props.check}>check</button>
    </div>
  )
}
