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
      green1: -130,
      green2: -170,
      notes: []
      id: 1

    }
    // this.startGame();
  }

  startGame () {
    setInterval(() => {
      const green1 = this.state.green1 + 1
      const green2 = this.state.green2 + 1
      this.setState({green1: green1, green2: green2})
      // this.state.id += 1
      // addElement("circle-parent", "div style=position:'absolute', top: this.state.green1, left: '50%'", this.state.id)
    }, 10);
  }


  render () {
    return (
      <div>
        <h1>SomethingHero!!</h1>
        <Sound
          url="../game/audio/SummerKnights.mp3"
          playStatus={this.state.playing} />

        <div id="circle-parent" style={{position:'relative'}}>
          <div style={{position:'absolute', top: this.state.green1, left: '50%'}} className="circle"></div>
          <div style={{position:'absolute', top: this.state.green2, left: '50%'}} className="circle"></div>
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
