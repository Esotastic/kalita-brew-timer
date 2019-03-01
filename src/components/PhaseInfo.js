import React from "react";
import Button from "./Button";
import PauseButton from"./PauseButton";

const PhaseInfo = (props) => {
  return (
    <div>
      <h2>Your {props.phase} phase has {props.time} seconds remaining.</h2>
      <Button timeButton={props.timeHandler} phase={props.phase} />
      <PauseButton pauseTime={props.pause}/>
    </div>
  )
}

export default PhaseInfo;