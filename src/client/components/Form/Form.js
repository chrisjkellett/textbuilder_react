import React from 'react';
import Error from './Error/Error';
import './Form.css';

export default function Form(props) {
  return (
    <div>
      <textarea id="text" onChange={props.change}/>
      <button onClick={props.submit}>submit</button>
      <select id="level" onChange={props.change}>
        <option>easy</option>
        <option>intermediate</option>
        <option>hard</option>
      </select>
      <Error showError={props.showError} minimumWords={props.minimumWords} />
    </div> 
  );
};
