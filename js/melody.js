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

// export const melody = [
//   'F3  q',
//   'F3  s',
//   'F3  es',
//   'F3  s',
//   'F3  es',
//   'F3  s',
//   'F3  es',
//
//   'F3  q',
//   'G3  s',
//   'A3  e',
//   'A3  e',
//   'G3  e',
//   'F3  s',
//   'G3  s',
//   'F3  s',
//   'G3  e'
// ]


export const bass = [
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

export const getRhythm = () => {
  const rhythm = [];
  const regExp = /\d\s*(.*)/

  melody.forEach(note => {
    const duration = regExp.exec(note)[1]
    rhythm.push(duration)
  })

  return rhythm;
}
