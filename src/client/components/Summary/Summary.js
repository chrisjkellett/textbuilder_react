import React from 'react'

export default function Summary(props) {
  console.log(props.corrections);
  console.log(props.text);
  console.log(props.userAnswers);
  return (
    <div>
      {props.corrections.map((word, index) => {
        if(word[0] === '#')
          return <span className='passed' key={index}>{props.text[index]}</span>
        else if(word[0] === '!')
          return <span className='failed' key={index}>{props.userAnswers[index]}</span>
        else
          return <span key={index}>{word}</span>
      })}
    </div>
  )
}
