import React from 'react';
import PhaseInfo from "./PhaseInfo";


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bloomTimer: 0,
      bloomStart: 0,
      finishTimer: 180,
      finishState: 0
    }
    this.bloomTime = this.bloomTime.bind(this);
    this.mainTime = this.mainTime.bind(this);
    this.pauseBloom = this.pauseBloom.bind(this);
    this.pauseMain = this.pauseMain.bind(this);
    this.resetBloom = this.resetBloom.bind(this);
    this.resetMain = this.resetMain.bind(this);
  }

  bloomTime() {
    this.setState({
      bloomTimer: this.state.bloomTimer,
      bloomStart: Date.now() - this.state.bloomTimer
    })
    this.timer = setInterval(() => this.setState({
      bloomTimer: Date.now() - this.state.bloomStart
    }), 1)
    // let second = this.state.bloomTimer; 
    // this.timer = setInterval(() => 
    //   this.setState({
    //     bloomTimer: second--
    //   }), 1000);
  }
  mainTime() {
    let secondMain = this.state.finishTimer;
    this.timer = setInterval(() =>
      this.setState({
        finishTimer: secondMain--
      }), 1000);
  }

  pauseBloom() {
      clearInterval(this.timer);
  }

  pauseMain() {
    let currentMain = this.state.finishTimer;
    if(currentMain < 180) {
      clearInterval(this.timer);
    } else {
      alert("Main phase timer isn't running!");
    };
  }

  resetBloom() {
    if (this.state.bloomTimer < 30) {
      this.setState({
        bloomTimer: 30
      });
    }
  }
  resetMain() {
    if (this.state.finishTimer < 180) {
      alert("resetting main timer");
    }
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
          reset={phase === "Bloom" ? this.resetBloom : this.resetMain}
        />
      </div>
    );
  }
}

export default Timer;
