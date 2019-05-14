import React from 'react'

export default function Summary(props) {
  return (
    <div>
      {props.corrections.map((word, index) => {
        if(word[0] === '#')
          return <span className='passed' key={index}>{props.text[index]}</span>
        else if(word[0] === '!'){
          return (
            <span>
              <span className='failed' key={index}>{props.userAnswers[index]}</span>
              <span>({props.text[index]})</span>
            </span>
          )
        }else
          return <span key={index}>{word}</span>
      })}
    </div>
  )
}
