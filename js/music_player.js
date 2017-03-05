import TinyMusic from 'tinymusic';

module.exports = class MusicPlayer {
  constructor(tempo) {
    this.tempo = tempo;
    this.sequence1;
    this.sequence2;
  }

  mapNoteToDuration (noteLength) {
    switch(noteLength) {
      case "e":
        return ((60 / tempo) / 2)
      case "q":
        return (60 / tempo)
      case "qe":
        return ((60 / tempo) * 1.5)
      case "h":
        return ((60 / tempo) * 2)
      case "w":
        return ((60 / tempo) * 4)
    }
  }


  play () {
    let ac = new AudioContext(),
    when = ac.currentTime,

    bass = [
      'C2  w',

      'G2  w',

      'E2  w',

      'G2  w',

      'C2  w',

      'G2  w',

      'E2  w',

      'F2  h',
      'E2  h',

      'G2  w',

      'G2  w',

      'G2  h',
      'Ab2 h',

      'A2  h',
      'G2  h',

      'C2  w',

      'G2  w',

      'E2  w',

      'G2  h',
      'E2  h'
    ];

    sequence1 = new TinyMusic.Sequence( ac, tempo, melody );
    sequence2 = new TinyMusic.Sequence( ac, tempo, bass );

    sequence1.staccato = 0.1;

    sequence1.gain.gain.value = 1.0;
    sequence2.gain.gain.value = 0.65;

    sequence1.mid.frequency.value = 800;
    sequence1.mid.gain.value = 3;

    sequence2.mid.gain.value = 3;
    sequence2.bass.gain.value = 6;
    sequence2.bass.frequency.value = 80;
    sequence2.mid.gain.value = -6;
    sequence2.mid.frequency.value = 500;
    sequence2.treble.gain.value = -2;
    sequence2.treble.frequency.value = 1400;

    sequence1.play( when + ( 60 / tempo ) * (tempo / 30));
    sequence2.play( when + ( 60 / tempo ) * (tempo / 30));
  }
}
