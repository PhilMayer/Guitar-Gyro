import TinyMusic from 'tinymusic';

export const melody = [
  'E3  q',
  'E3  q',
  'F3  q',
  'G3  q',

  'G3  q',
  'F3  q',
  'E3  q',
  'D3  q',

  'C3  q',
  'C3  q',
  'D3  q',
  'E3  q',

  'E3  qe',
  'D3  e',
  'D3  h',

  'E3  q',
  'E3  q',
  'F3  q',
  'G3  q',

  'G3  q',
  'F3  q',
  'E3  q',
  'D3  q',

  'C3  q',
  'C3  q',
  'D3  q',
  'E3  q',

  'D3  qe',
  'C3  e',
  'C3  h',

  'D3  q',
  'D3  q',
  'E3  q',
  'C3  q',

  'D3  q',
  'E3  e',
  'F3  e',
  'E3  q',
  'C3  q',

  'D3  q',
  'E3  e',
  'F3  e',
  'E3  q',
  'D3  q',

  'C3  q',
  'D3  q',
  'G2  h',

  'E3  q',
  'E3  q',
  'F3  q',
  'G3  q',

  'G3  q',
  'F3  q',
  'E3  q',
  'D3  q',

  'C3  q',
  'C3  q',
  'D3  q',
  'E3  q',

  'D3  qe',
  'C3  e',
  'C3  h'
]

export const playMusic = () => {
  let ac = new AudioContext(),
  when = ac.currentTime,
  tempo = 120,
  sequence1,
  sequence2,

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

sequence1.play( when );
sequence2.play( when );
}
