import React from 'react';
import {passed, failed, notAnswered, normalWord} from './utils';

export default function Summary(props) {
  return (
    <div>
      {props.corrections.map((word, index) => {  
        switch(word[0]){
          case '#': return passed(index, props)
          case '!': return failed(index, props);
          case '[': return notAnswered(index, props);
          default: return normalWord(index, word);
        }
      })}
    </div>
  )
};

