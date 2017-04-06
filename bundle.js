/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const melody = [
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
/* harmony export (immutable) */ __webpack_exports__["b"] = melody;


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


const bass = [
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
/* harmony export (immutable) */ __webpack_exports__["c"] = bass;


const getRhythm = () => {
  const rhythm = [];
  const regExp = /\d\s*(.*)/

  melody.forEach(note => {
    const duration = regExp.exec(note)[1]
    rhythm.push(duration)
  })

  return rhythm;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = getRhythm;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const randomCircle = (circleColor) => {
  var circle = new createjs.Shape();
  circle.x = 100;
  circle.y = 100;

  switch (circleColor) {
    case "red":
      circle.graphics.beginFill("#FF0000").drawCircle(0, -200, 25);
      return circle;
    case "blue":
      circle.graphics.beginFill("#00FFFF").drawCircle(100, -200, 25);
      return circle;
    case "green":
      circle.graphics.beginFill("#00FF00").drawCircle(200, -200, 25);
      return circle;
    default:
      return null;
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = randomCircle;


const drawButton = (stage, color) => {
    switch (color) {
      case "red":
        var button = new createjs.Shape();
        button.graphics.beginStroke("#FF0000");
        button.graphics.setStrokeStyle(1);
        button.snapToPixel = true;
        button.graphics.drawCircle(0, 0, 25, 309);
        button.x = 100;
        button.y = 650;
        stage.addChild(button)
        return button
      case "blue":
        var button = new createjs.Shape();
        button.graphics.beginStroke("#00FFFF");
        button.graphics.setStrokeStyle(1);
        button.snapToPixel = true;
        button.graphics.drawCircle(0, 0, 25, 309);
        button.x = 200;
        button.y = 650;
        stage.addChild(button)
        return button
      case "green":
        var button = new createjs.Shape();
        button.graphics.beginStroke("#00FF00");
        button.graphics.setStrokeStyle(1);
        button.snapToPixel = true;
        button.graphics.drawCircle(0, 0, 25, 309);
        button.x = 300;
        button.y = 650;
        stage.addChild(button)
        return button
      default:
        return null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = drawButton;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tinymusic__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tinymusic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tinymusic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__melody_js__ = __webpack_require__(0);



class MusicPlayer {
  constructor(tempo) {
    this.tempo = tempo;
    this.sequence1;
    this.sequence2;
  }

  mapNoteToDuration (noteLength) {
    switch(noteLength) {
      case "s":
        return ((60 / this.tempo) / 4)
      case "e":
        return ((60 / this.tempo) / 2)
      case "es":
        return ((60 / this.tempo) / 1.5)
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
    const ac = new AudioContext();
    const when = ac.currentTime;

    this.sequence1 = new __WEBPACK_IMPORTED_MODULE_0_tinymusic___default.a.Sequence( ac, this.tempo, __WEBPACK_IMPORTED_MODULE_1__melody_js__["b" /* melody */] );
    this.sequence2 = new __WEBPACK_IMPORTED_MODULE_0_tinymusic___default.a.Sequence( ac, this.tempo, __WEBPACK_IMPORTED_MODULE_1__melody_js__["c" /* bass */] );
    this.sequence1.staccato = 0.2;

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
/* harmony export (immutable) */ __webpack_exports__["a"] = MusicPlayer;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function delay(interval) {
    return new Promise(function(resolve) {
        setTimeout(resolve, interval);
    });
}

const countdown = (stage, run, tempo) => {
  document.getElementById("header").className = "hidden";

  const count3 = new createjs.Text("3", "100px Reenie Beanie", "#00FFFF");
  const count2 = new createjs.Text("2", "100px Reenie Beanie", "#00FF00");
  const count1 = new createjs.Text("1", "100px Reenie Beanie", "#FF0000");

  const countdownSound = "countdownSound";
  createjs.Sound.registerSound("assets/shovel.mp3", countdownSound);

  delay(1000).then(() => {
    drawCount(stage, count3);
    createjs.Sound.play(countdownSound);
    return delay(1000);
  }).then(() => {
    drawCount(stage, count2, count3);
    createjs.Sound.play(countdownSound);
    return delay(1000)
  }).then(() => {
    drawCount(stage, count1, count2);
    createjs.Sound.play(countdownSound);
    return delay(1000);
  }).then(() => {
    stage.removeChild(count1);
    run(tempo);
  })
}
/* unused harmony export countdown */


const drawCount = (stage, count, prevCount) => {
  if (prevCount) stage.removeChild(prevCount);
  count.x = 180;
  count.y = 300;
  createjs.Tween.get(count).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
  stage.addChild(count);
}

const directions = (stage, run, tempo) => {
  const direction1 = new createjs.Text("=> Press S/D/F to hold down notes.", "60px Reenie Beanie", "#00FF00");
  drawDirection(stage, direction1, 380);

  setTimeout(() => {
    const direction2 = new createjs.Text("=> Tap J to strum.", "60px Reenie Beanie", "#00FF00");
    drawDirection(stage, direction2, 300);

    setTimeout(() => {
      createjs.Tween.get(direction1).to({x: 360, y: 370, scaleX: 0.5, scaleY: 0.5}, 200)
      createjs.Tween.get(direction2).to({x: 360, y: 330, scaleX: 0.5, scaleY: 0.5}, 200)
      countdown(stage, run, tempo);
    }, 3000)
  }, 1000)
}
/* unused harmony export directions */


const drawDirection = (stage, direction, yCoord) => {
  direction.x = 150;
  direction.y = yCoord;
  stage.addChild(direction)
}

const drawLevel = (text, color) => {
  let level = new createjs.Text(text, "30px Reenie Beanie", color);
  level.x = 100;
  level.y = 1200;
  level.cursor = "pointer";

  const hit = new createjs.Shape();
  hit.graphics.beginFill("#000").drawRect(0, 0, level.getMeasuredWidth(), level.getMeasuredHeight());
  level.hitArea = hit;
  return level;
}

const gameOver = (stage, musicPlayer, scoreboard, hits, misses, run, tempo) => {
  const applause = "applause";
  createjs.Sound.registerSound("assets/applause.mp3", applause);

  const message = new createjs.Text("You're basically Beethoven.", "30px Reenie Beanie");
  const githubLink = new createjs.Text("A game by Phil Mayer => Github", "40px Reenie Beanie")
  const playAgain = new createjs.Text("Play again!!", "80px Reenie Beanie", "#00FF00")

  delay(2000).then(() => {
    musicPlayer.stopMusic();
    createjs.Tween.get(scoreboard).to({x: 75, y: 500, rotation: -360},
      700, createjs.Ease.bounceOut);
    return delay(1000);
  }).then(() => {
    createjs.Sound.play(applause);
    drawGameOverMessage(stage, message);
    return delay(1000);
  }).then(() => {
    githubLink.addEventListener("click", () => window.open("https://github.com/PhilMayer/JSHero"))
    drawClickableArea(stage, githubLink, 20);
    return delay(200);
  }).then(() => {
    playAgain.addEventListener("click", () => {
      stage.removeChild(playAgain, githubLink, message, scoreboard)
      hits = 0;
      misses = 0;
      run(tempo);
    })
    drawClickableArea(stage, playAgain, 100);
  })
}
/* harmony export (immutable) */ __webpack_exports__["b"] = gameOver;


const drawGameOverMessage = (stage, message) => {
  message.x = 75;
  message.y = 450;
  stage.addChild(message);
}

const drawClickableArea = (stage, area, yCoord) => {
  area.cursor = "pointer";
  area.x = 75;
  area.y = yCoord;

  const clickArea = new createjs.Shape();
  clickArea.graphics.beginFill("#000").drawRect(0, 0, area.getMeasuredWidth(), area.getMeasuredHeight());
  area.hitArea = clickArea;

  stage.addChild(area);
}

const selectLevel = (stage, run) => {
  let level1;
  let level2;
  let level3;
  let level4;
  let gameTempo;

  const levelChosen = "levelChosen";
  createjs.Sound.registerSound("assets/warning.mp3", levelChosen);
  const levelDrawn = "levelDrawn";
  createjs.Sound.registerSound("assets/countdown.mp3", levelDrawn);

  const levelCallback = (tempo) => {
    createjs.Sound.play(levelChosen)
    gameTempo = tempo
    stage.removeChild(level1, level2, level3, level4)
    directions(stage, run, gameTempo);
  }

  delay(500).then(() => {
    level1 = drawLevel("=>Allegretto (easy)", "#00FF00")
    level1.addEventListener("click", () => levelCallback(110));
    createjs.Tween.get(level1).to({y: 140}, 400, createjs.Ease.bounceOut)
    stage.addChild(level1)
    createjs.Sound.play(levelDrawn)
    return delay(500);
  }).then(() => {
    createjs.Sound.play(levelDrawn)
    level2 = drawLevel("=>Vivace (medium)", "#00FFFF");
    level2.addEventListener("click", () => levelCallback(130));
    createjs.Tween.get(level2).to({y: 200}, 400, createjs.Ease.bounceOut)
    stage.addChild(level2)
    return delay(500);
  }).then(() => {
    createjs.Sound.play(levelDrawn)
    level3 = drawLevel("=>Presto (hard)", "#FF0000");
    level3.addEventListener("click", () => levelCallback(170));
    createjs.Tween.get(level3).to({y: 260}, 400, createjs.Ease.bounceOut)
    stage.addChild(level3)
    return delay(500);
  }).then(() => {
    createjs.Sound.play(levelDrawn)
    level4 = drawLevel("=>Prestissimo (there's just no way)", "#DC143C");
    level4.addEventListener("click", () => levelCallback(185));
    createjs.Tween.get(level4).to({y: 320}, 400, createjs.Ease.bounceOut)
    stage.addChild(level4)
  })
}
/* harmony export (immutable) */ __webpack_exports__["a"] = selectLevel;



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function ( root, factory ) {
  if ( true ) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ exports ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof exports === 'object' && typeof exports.nodeName !== 'string' ) {
    factory( exports );
  } else {
    factory( root.TinyMusic = {} );
  }
}( this, function ( exports ) {

/*
 * Private stuffz
 */

var enharmonics = 'B#-C|C#-Db|D|D#-Eb|E-Fb|E#-F|F#-Gb|G|G#-Ab|A|A#-Bb|B-Cb',
  middleC = 440 * Math.pow( Math.pow( 2, 1 / 12 ), -9 ),
  numeric = /^[0-9.]+$/,
  octaveOffset = 4,
  space = /\s+/,
  num = /(\d+)/,
  offsets = {};

// populate the offset lookup (note distance from C, in semitones)
enharmonics.split('|').forEach(function( val, i ) {
  val.split('-').forEach(function( note ) {
    offsets[ note ] = i;
  });
});

/*
 * Note class
 *
 * new Note ('A4 q') === 440Hz, quarter note
 * new Note ('- e') === 0Hz (basically a rest), eigth note
 * new Note ('A4 es') === 440Hz, dotted eighth note (eighth + sixteenth)
 * new Note ('A4 0.0125') === 440Hz, 32nd note (or any arbitrary
 * divisor/multiple of 1 beat)
 *
 */

// create a new Note instance from a string
function Note( str ) {
  var couple = str.split( space );
  // frequency, in Hz
  this.frequency = Note.getFrequency( couple[ 0 ] ) || 0;
  // duration, as a ratio of 1 beat (quarter note = 1, half note = 0.5, etc.)
  this.duration = Note.getDuration( couple[ 1 ] ) || 0;
}

// convert a note name (e.g. 'A4') to a frequency (e.g. 440.00)
Note.getFrequency = function( name ) {
  var couple = name.split( num ),
    distance = offsets[ couple[ 0 ] ],
    octaveDiff = ( couple[ 1 ] || octaveOffset ) - octaveOffset,
    freq = middleC * Math.pow( Math.pow( 2, 1 / 12 ), distance );
  return freq * Math.pow( 2, octaveDiff );
};

// convert a duration string (e.g. 'q') to a number (e.g. 1)
// also accepts numeric strings (e.g '0.125')
// and compund durations (e.g. 'es' for dotted-eight or eighth plus sixteenth)
Note.getDuration = function( symbol ) {
  return numeric.test( symbol ) ? parseFloat( symbol ) :
    symbol.toLowerCase().split('').reduce(function( prev, curr ) {
      return prev + ( curr === 'w' ? 4 : curr === 'h' ? 2 :
        curr === 'q' ? 1 : curr === 'e' ? 0.5 :
        curr === 's' ? 0.25 : 0 );
    }, 0 );
};

/*
 * Sequence class
 */

// create a new Sequence
function Sequence( ac, tempo, arr ) {
  this.ac = ac || new AudioContext();
  this.createFxNodes();
  this.tempo = tempo || 120;
  this.loop = true;
  this.smoothing = 0;
  this.staccato = 0;
  this.notes = [];
  this.push.apply( this, arr || [] );
}

// create gain and EQ nodes, then connect 'em
Sequence.prototype.createFxNodes = function() {
  var eq = [ [ 'bass', 100 ], [ 'mid', 1000 ], [ 'treble', 2500 ] ],
    prev = this.gain = this.ac.createGain();
  eq.forEach(function( config, filter ) {
    filter = this[ config[ 0 ] ] = this.ac.createBiquadFilter();
    filter.type = 'peaking';
    filter.frequency.value = config[ 1 ];
    prev.connect( prev = filter );
  }.bind( this ));
  prev.connect( this.ac.destination );
  return this;
};

// accepts Note instances or strings (e.g. 'A4 e')
Sequence.prototype.push = function() {
  Array.prototype.forEach.call( arguments, function( note ) {
    this.notes.push( note instanceof Note ? note : new Note( note ) );
  }.bind( this ));
  return this;
};

// create a custom waveform as opposed to "sawtooth", "triangle", etc
Sequence.prototype.createCustomWave = function( real, imag ) {
  // Allow user to specify only one array and dupe it for imag.
  if ( !imag ) {
    imag = real;
  }

  // Wave type must be custom to apply period wave.
  this.waveType = 'custom';

  // Reset customWave
  this.customWave = [ new Float32Array( real ), new Float32Array( imag ) ];
};

// recreate the oscillator node (happens on every play)
Sequence.prototype.createOscillator = function() {
  this.stop();
  this.osc = this.ac.createOscillator();

  // customWave should be an array of Float32Arrays. The more elements in
  // each Float32Array, the dirtier (saw-like) the wave is
  if ( this.customWave ) {
    this.osc.setPeriodicWave(
      this.ac.createPeriodicWave.apply( this.ac, this.customWave )
    );
  } else {
    this.osc.type = this.waveType || 'square';
  }

  this.osc.connect( this.gain );
  return this;
};

// schedules this.notes[ index ] to play at the given time
// returns an AudioContext timestamp of when the note will *end*
Sequence.prototype.scheduleNote = function( index, when ) {
  var duration = 60 / this.tempo * this.notes[ index ].duration,
    cutoff = duration * ( 1 - ( this.staccato || 0 ) );

  this.setFrequency( this.notes[ index ].frequency, when );

  if ( this.smoothing && this.notes[ index ].frequency ) {
    this.slide( index, when, cutoff );
  }

  this.setFrequency( 0, when + cutoff );
  return when + duration;
};

// get the next note
Sequence.prototype.getNextNote = function( index ) {
  return this.notes[ index < this.notes.length - 1 ? index + 1 : 0 ];
};

// how long do we wait before beginning the slide? (in seconds)
Sequence.prototype.getSlideStartDelay = function( duration ) {
  return duration - Math.min( duration, 60 / this.tempo * this.smoothing );
};

// slide the note at <index> into the next note at the given time,
// and apply staccato effect if needed
Sequence.prototype.slide = function( index, when, cutoff ) {
  var next = this.getNextNote( index ),
    start = this.getSlideStartDelay( cutoff );
  this.setFrequency( this.notes[ index ].frequency, when + start );
  this.rampFrequency( next.frequency, when + cutoff );
  return this;
};

// set frequency at time
Sequence.prototype.setFrequency = function( freq, when ) {
  this.osc.frequency.setValueAtTime( freq, when );
  return this;
};

// ramp to frequency at time
Sequence.prototype.rampFrequency = function( freq, when ) {
  this.osc.frequency.linearRampToValueAtTime( freq, when );
  return this;
};

// run through all notes in the sequence and schedule them
Sequence.prototype.play = function( when ) {
  when = typeof when === 'number' ? when : this.ac.currentTime;

  this.createOscillator();
  this.osc.start( when );

  this.notes.forEach(function( note, i ) {
    when = this.scheduleNote( i, when );
  }.bind( this ));

  this.osc.stop( when );
  this.osc.onended = this.loop ? this.play.bind( this, when ) : null;

  return this;
};

// stop playback, null out the oscillator, cancel parameter automation
Sequence.prototype.stop = function() {
  if ( this.osc ) {
    this.osc.onended = null;
    this.osc.disconnect();
    this.osc = null;
  }
  return this;
};

  exports.Note = Note;
  exports.Sequence = Sequence;
}));


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__melody__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_player__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pregame__ = __webpack_require__(3);





document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("play")


  playButton.addEventListener("click", () => {
    document.getElementById("play-button").className = "hidden";
    // createjs.Sound.play(soundID)
    new Game();
  })
});

class Game {
  constructor () {
    this.stage = new createjs.Stage("gameCanvas");
    this.stage.keyboardEventsEnabled = true;
    this.stage.enableMouseOver();

    document.onkeyup = this.keyReleased.bind(this);
    document.onkeydown = this.keyPressed.bind(this);

    createjs.Ticker.addEventListener("tick", () => {
      this.stage.update();
    })
    createjs.Ticker.setFPS(60);

    this.drawLetters();
    this.curAccuracy = 0;
    this.strumming = false;
    this.redPressed = false;
    this.bluePressed = false;
    this.greenPressed = false;
    this.redButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["a" /* drawButton */])(this.stage, "red");
    this.blueButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["a" /* drawButton */])(this.stage, "blue");
    this.greenButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["a" /* drawButton */])(this.stage, "green");

    this.tempo = 120;
    this.run = this.run.bind(this);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pregame__["a" /* selectLevel */])(this.stage, this.run);
  }

  run (tempo) {
    this.tempo = tempo;
    this.hits = 0;
    this.misses = 0;
    this.scoreboard = this.drawScoreboard();

    this.musicPlayer = new __WEBPACK_IMPORTED_MODULE_2__music_player__["a" /* default */](this.tempo);
    this.musicPlayer.play();
    const rhythm = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__melody__["a" /* getRhythm */])();
    this.deployNote(rhythm);
  }

  accuracy () {
    const totalNotes = this.hits + this.misses;
    if (totalNotes === 0) {
      return 0;
    } else {
      return Math.round((this.hits / totalNotes) * 100)
    }
  }

  deployNote (rhythm, note = 0) {
    const typeOfNote = rhythm[note - 1] || rhythm[0];
    const delay = this.musicPlayer.mapNoteToDuration(typeOfNote) * 1000
    const colors = ["red", "blue", "green"]

    setTimeout(() => {
      const circleColor = colors[Math.floor(Math.random() * colors.length)];
      let circle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["b" /* randomCircle */])(circleColor);
      this.stage.addChild(circle);

      circle.addEventListener("tick", () => {
        circle.y += 8;
        if (circle.y === 1100) {
          this.misses += 1;
          this.updateScore();
          this.stage.removeChild(circle);
        } else if (circle.y > 840 && circle.y < 865) {
            if (this.redPressed && this.strumming && circleColor === "red") {
              this.handleHit(circle);
            } else if (this.bluePressed && this.strumming && circleColor === "blue") {
              this.handleHit(circle);
            } else if (this.greenPressed && this.strumming && circleColor === "green") {
              this.handleHit(circle);
            }
        }
      });

      if (note + 1 === rhythm.length) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pregame__["b" /* gameOver */])(this.stage, this.musicPlayer,
           this.scoreboard, this.hits, this.misses, this.run, this.tempo);
      } else {
        this.deployNote(rhythm, note + 1);
      }
    }, delay)
  }

  drawLetters () {
    const letters = ["S", "D", "F"]
    let xCoord = 92;

    letters.forEach(letter => {
      let buttonLetter = new createjs.Text(letter, "25px Reenie Beanie");
      buttonLetter.x = xCoord;
      buttonLetter.y = 690;
      xCoord += 100;
      this.stage.addChild(buttonLetter);
    })
  }

  drawScoreboard () {
    const accuracy = this.accuracy().toString() + "%";

    let displayAccuracy = new createjs.Text(accuracy, "90px Reenie Beanie");
    displayAccuracy.x = 400;
    displayAccuracy.y = 600;
    this.stage.addChild(displayAccuracy);

    return displayAccuracy
  }

  handleHit (circle) {
    this.hits += 1;
    this.stage.removeChild(circle);
    this.updateScore();
  }

  keyPressed(e) {
    const key = e.keyCode;

    if (key === 83) {
      this.redPressed = true;
      this.redButton.graphics.clear()
        .beginFill("#FF0000").drawCircle(0, 0, 25, 309).endFill();
      this.blueButton.graphics.clear();
      this.greenButton.graphics.clear();
      this.bluePressed = false;
      this.greenPressed = false;

    } else if (key === 68) {
      this.bluePressed = true;
      this.blueButton.graphics.clear()
        .beginFill("#00FFFF").drawCircle(0, 0, 25, 309).endFill();
      this.greenButton.graphics.clear();
      this.redButton.graphics.clear();
      this.redPressed = false;
      this.greenPressed = false;

    } else if (key === 70) {
      this.greenPressed = true;
      this.greenButton.graphics.clear()
      .beginFill("#00FF00").drawCircle(0, 0, 25, 309).endFill();
      this.redButton.graphics.clear();
      this.blueButton.graphics.clear();

      this.redPressed = false;
      this.bluePressed = false;
    } else if (key === 74) {
      this.strumming = true;

      setTimeout(() => {
        this.strumming = false;
      }, 100)
    }
  }

  keyReleased(e) {
    const key = e.keyCode;
    if (key === 83) {
      this.redPressed = false;
      this.redButton.graphics.clear()
      this.redButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["a" /* drawButton */])(this.stage, "red");
    } else if (key === 68) {
      this.bluePressed = false;
      this.blueButton.graphics.clear()
      this.blueButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["a" /* drawButton */])(this.stage, "blue");
    } else if (key === 70) {
      this.greenPressed = false;
      this.greenButton.graphics.clear()
      this.greenButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["a" /* drawButton */])(this.stage, "green");
    } else
    if (key === 74) {
      this.strumming = false
    }
  }

  updateScore () {
    const updatedAccuracy = this.accuracy().toString() + "%";
    this.scoreboard.text = updatedAccuracy;

    if (updatedAccuracy >= this.curAccuracy) {
      this.scoreboard.color = "#00FF00"
    } else {
      this.scoreboard.color = "#FF0000"
    }

    this.curAccuracy = updatedAccuracy;
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map