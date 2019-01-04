import React from "react";
import Button from "./Button";

const PhaseInfo = (props) => {
  return (
    <div>
      <h1>Your {props.phase} phase has {props.time} seconds remaining.</h1>
      <Button timeButton={props.timeHandler} phase={props.phase} />
    </div>
  )
}

export default PhaseInfo;