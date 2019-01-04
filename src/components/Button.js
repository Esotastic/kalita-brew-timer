import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.timeButton}>Start your {props.phase} phase</button>
    </div>
  )
}


export default Button; 