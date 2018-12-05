import React , { Component }from 'react';
import click1 from './../assets/click1.wav'

class Metronome extends Component {
  constructor(){
    super();
    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };
  }

  onStartStop = event => {
    if(this.state.playing){
      this.setState({
        playing: false
      });
      clearInterval(this.soundTimer);
    }else {
      this.setState({
        playing: true
      });
      const interval = this.calculateInterval();
      this.soundTimer = setInterval(function(){
        let localClick = new Audio(click1);
        localClick.play();
      },interval);
    }
  }

  onBmpChange = event => {
    this.setState(
      {bpm:event.target.value}
    );
    if(this.state.playing){
      clearInterval(this.soundTimer);
      const interval = this.calculateInterval();
      this.soundTimer = setInterval(function(){
        let localClick = new Audio(click1);
        localClick.play();
      },interval);
    }
  }


  calculateInterval = () =>  60000 / this.state.bpm; 
  
  render() {
    return (
      <div>
        <p>Metronome built in react. Which barely works :p See readme for possible improvements</p>  
        <input
              type="range"
              min="60"
              max="240"
              onChange={this.onBmpChange} />
        <br />
        <button onClick={this.onStartStop}>{this.state.playing? 'Stop':'Start'}</button>
      </div>
      
    );
  };

}

export default Metronome;
