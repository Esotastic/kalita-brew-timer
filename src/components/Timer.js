import React from 'react';
import PhaseInfo from "./PhaseInfo";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bloomTimer: 30,
      finishTimer: 180
    }
    this.bloomTime = this.bloomTime.bind(this);
    this.mainTime = this.mainTime.bind(this);
  }

  bloomTime() {
    //---These both will be actual timers ---// 
    this.setState({
      bloomTimer: this.state.bloomTimer - 1
    });
  }
  mainTime() {
    this.setState({
      finishTimer: this.state.finishTimer - 1
    });
  }
  
  render () {
    const phase = this.props.phase;
    return (
      <div>
        <h1>Brew Timer</h1>
        <PhaseInfo phase={phase} timeHandler={phase === "Bloom" ? this.bloomTime : this.mainTime} time={phase === "Bloom" ? this.state.bloomTimer : this.state.finishTimer} />
      </div>
    );
  }
}

export default Timer;
