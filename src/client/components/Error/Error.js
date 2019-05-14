import React from 'react';

export default function Error(props) {
  return !props.showError ? null : (
    <div>
      text must contain at least {props.minimumWords} words
    </div>
)};
