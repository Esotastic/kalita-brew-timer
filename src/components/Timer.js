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
    let second = this.state.bloomTimer; 
    //---These both will be actual timers ---// 
    this.timer = setInterval(() => 
      this.setState({
        bloomTimer: second--
      }), 1000);
  }
  mainTime() {
    let secondMain = this.state.finishTimer;
    this.timer = setInterval(() =>
      this.setState({
        finishTimer: secondMain--
      }), 1000);
  }

  pauseBloom() {
    let currentBloom = this.state.bloomTimer;
    if (currentBloom< 30) {
      alert("Timer would totally be paused right now");
    } else {
      alert("Timer isn't running, so....");
    };
  }

  pauseMain() {
    alert("Main phase paused testeroonie");
  }
  
  render () {
    const phase = this.props.phase;
    return (
      <div>
        <h1>{phase} Timer</h1>
        <PhaseInfo 
          phase={phase} 
          timeHandler={phase === "Bloom" ? this.bloomTime : this.mainTime} 
          time={phase === "Bloom" ? this.state.bloomTimer : this.state.finishTimer}
          pause={phase === "Bloom" ? this.pauseBloom : this.pauseMain} 
        />
      </div>
    );
  }
}

export default Timer;
