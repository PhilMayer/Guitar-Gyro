import TinyMusic from 'tinymusic';
import {bass, melody} from './melody.js';

export default class MusicPlayer {
  constructor(tempo) {
    this.tempo = tempo;
    this.sequence1;
    this.sequence2;
  }

  mapNoteToDuration (noteLength) {
    switch(noteLength) {
      case "e":
        return ((60 / this.tempo) / 2)
      case "q":
        return (60 / this.tempo)
      case "qe":
        return ((60 / this.tempo) * 1.5)
      case "h":
        return ((60 / this.tempo) * 2)
      case "w":
        return ((60 / this.tempo) * 4)
    }
  }

  play () {
    const  ac = new AudioContext();
    const when = ac.currentTime;

    this.sequence1 = new TinyMusic.Sequence( ac, this.tempo, melody );
    this.sequence2 = new TinyMusic.Sequence( ac, this.tempo, bass );

    this.sequence1.staccato = 0.1;

    this.sequence1.gain.gain.value = 1.0;
    this.sequence2.gain.gain.value = 0.65;

    this.sequence1.mid.frequency.value = 800;
    this.sequence1.mid.gain.value = 3;

    this.sequence2.mid.gain.value = 3;
    this.sequence2.bass.gain.value = 6;
    this.sequence2.bass.frequency.value = 80;
    this.sequence2.mid.gain.value = -6;
    this.sequence2.mid.frequency.value = 500;
    this.sequence2.treble.gain.value = -2;
    this.sequence2.treble.frequency.value = 1400;

    this.sequence1.play( when + ( 60 / this.tempo ) * (this.tempo / 30));
    this.sequence2.play( when + ( 60 / this.tempo ) * (this.tempo / 30));
  }

  stopMusic () {
    if (this.sequence1) this.sequence1.stop();
    if (this.sequence2) this.sequence2.stop();
  }
}
