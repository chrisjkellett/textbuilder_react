import React from 'react';
import styles from './Words.module.css';

export default function Words(props) {
  return props.exercise.map((word, i) => {
    if(word !== '{gap}')
      return <div className={styles.Word} key={i} id={i}>{word}</div>
    else
      return <input onChange={props.change} value={props.userAnswers[i]} key={i} id={i} />
  });
};
