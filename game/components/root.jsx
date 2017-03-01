import React from 'react';
// import {Provider} from 'react-redux';
import Sound from 'react-sound';

// const muzak = new Audio("../audio/SummerKnights.mp3")
// muzak.play()
// <button onClick={() => {"document.getElementById('player').play()"}}>Play</button>

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playing: "STOPPED",
      position: 0
    }
    // this.startGame();
  }

  startGame () {
    setInterval(() => {
      const nextPos = this.state.position + 1
      return this.setState({position: nextPos})
    }, 1);
  }



  render () {
    return (
      <div>
        <h1>SomethingHero!!</h1>
        <Sound
          url="../game/audio/SummerKnights.mp3"
          playStatus={this.state.playing} />

        <div style={{position:'relative'}}>
          <div style={{position:'absolute', top: this.state.position, left: '50%'}} className="circle"></div>
        </div>

        <div className="play-button-holder">
          <div className="play-button">
            <span
              onClick={() => this.setState({playing: "PLAYING"})}
              className="triangle">
              ►
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Root;
