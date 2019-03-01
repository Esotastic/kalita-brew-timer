import React from "react";

const PauseButton = (props) => {
  return(
    <div>
      <button onClick={props.pauseTime}>Pause</button>
    </div>
  )
}

export default PauseButton;