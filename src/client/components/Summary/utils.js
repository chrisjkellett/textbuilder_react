import React from 'react';

export function passed(index, props){
  return <span className='passed' key={index}>{props.text[index]}</span>
};

export function failed(index, props){
  return (
    <span key={index}>
      <span className='failed'>{props.text[index]}</span>
    </span>
  )
};

export function notAnswered(index, props){
  return (
    <span key={index}>
      <span>-</span>
      <span>({props.text[index]})</span>
    </span>
  )
};

export function normalWord(index, word){
  return <span key={index}>{word}</span>
}
