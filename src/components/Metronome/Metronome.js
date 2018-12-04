import React , { Component }from 'react';


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
      this.setState(
        {playing:false}
      )
    }else {
      this.setState(
        {playing:true}
      )
    }
  }

  onBmpChange = event => {
    this.setState(
      {bpm:event.target.value}
    );
  }

  render() {
    return (
      <div>
        <p>metronome goes here</p>  
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
