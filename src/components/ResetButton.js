import React from "react";

const ResetButton = (props) => {
  return(
    <div>
      <button onClick={props.resetTime}>Reset</button>
    </div>
  )
}

export default ResetButton;