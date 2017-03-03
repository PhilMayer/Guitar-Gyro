import TinyMusic from 'tinymusic';

export const playMusic = () => {
  var ac = new AudioContext();

  // set the playback tempo (120 beats per minute)
  var tempo = 120;

  // create some notes ('<Note Name> <Beat Length>')
  // q = quarter note, h = half note (more on that later)
  var note1 = new TinyMusic.Note('G3 q');
  var note2 = new TinyMusic.Note('E4 q');
  var note3 = new TinyMusic.Note('C4 h');

  // create a new sequence
  var sequence = new TinyMusic.Sequence( ac, tempo );

  // add the notes
  sequence.push( note1, note2, note3 );

  // disable looping
  sequence.loop = false;

  // play it
  sequence.play();
}
