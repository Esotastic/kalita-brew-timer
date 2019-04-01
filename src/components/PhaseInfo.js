import React from "react";
import Button from "./Button";
import PauseButton from"./PauseButton";
import ResetButton from "./ResetButton";

const PhaseInfo = (props) => {
  return (
    <div>
      <h2>Your {props.phase} phase has {props.time} seconds remaining.</h2>
      <Button timeButton={props.timeHandler} phase={props.phase} />
      <PauseButton pauseTime={props.pause}/>
      <ResetButton resetTime={props.reset}/>
    </div>
  )
}

export default PhaseInfo;