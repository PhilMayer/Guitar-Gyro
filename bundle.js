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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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


  // export const mapNoteToDuration = {
  //   "e": ((60 / tempo) / 2),
  //   "q": (60 / tempo),
  //   "qe": ((60 / tempo) * 1.5),
  //   "h": ((60 / tempo) * 2),
  //   "w": ((60 / tempo) * 4)
  // }


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tinymusic__ = __webpack_require__(3);
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
    const ac = new AudioContext();
    const when = ac.currentTime;

    this.sequence1 = new __WEBPACK_IMPORTED_MODULE_0_tinymusic___default.a.Sequence( ac, this.tempo, __WEBPACK_IMPORTED_MODULE_1__melody_js__["b" /* melody */] );
    this.sequence2 = new __WEBPACK_IMPORTED_MODULE_0_tinymusic___default.a.Sequence( ac, this.tempo, __WEBPACK_IMPORTED_MODULE_1__melody_js__["c" /* bass */] );
    this.sequence1.smoothing = 0.1;
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__circle__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__melody__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music_player__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_animejs__);





document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("play")
  playButton.addEventListener("click", () => {
    // stopMusic();
    document.getElementById("play-button").className = "hidden";
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


    this.hits = 0;
    this.misses = 0;
    this.drawLetters();
    this.curAccuracy = 0;
    this.strumming = false;
    this.redPressed = false;
    this.bluePressed = false;
    this.greenPressed = false;
    this.redButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["a" /* drawButton */])(this.stage, "red");
    this.blueButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["a" /* drawButton */])(this.stage, "blue");
    this.greenButton = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__circle__["a" /* drawButton */])(this.stage, "green");

    this.selectLevel();
    this.tempo = 120;
  }

  run () {
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
        this.gameOver();
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
    displayAccuracy.y = 250;
    this.stage.addChild(displayAccuracy);

    return displayAccuracy
  }

  gameOver () {
    setTimeout(() => {
      this.musicPlayer.stopMusic();
      createjs.Tween.get(this.scoreboard).to({x: 75, rotation: -360},
        1000, createjs.Ease.bounceOut);

      setTimeout(() => {
        const message = new createjs.Text("You're basically Beethoven.", "30px Reenie Beanie");
        message.x = 75;
        message.y = 335;
        this.stage.addChild(message);

        setTimeout(() => {
          const githubLink = new createjs.Text("A game by Phil Mayer => Github", "40px Reenie Beanie")
          githubLink.addEventListener("click", () => window.open("https://github.com/PhilMayer/JSHero"))
          githubLink.cursor = "pointer";
          githubLink.x = 75;
          githubLink.y = 20;
          this.stage.addChild(githubLink);

          setTimeout(() => {
            const playAgain = new createjs.Text("Play again!!", "80px Reenie Beanie", "#00FF00")
            playAgain.addEventListener("click", () => {
              this.stage.removeChild(playAgain, githubLink, message, this.scoreboard)
              this.hits = 0;
              this.misses = 0;
              this.run();
            })
            playAgain.cursor = "pointer";
            playAgain.x = 75;
            playAgain.y = 375;
            this.stage.addChild(playAgain);
          }, 200)
        }, 1000)
      }, 1000)
    }, 2000)
  }

  keyPressed(e) {
    const key = e.keyCode;

    if (key === 83) {
      this.redPressed = true;
      this.redButton.graphics.clear()
        .beginFill("#FF0000").drawCircle(0, 0, 25, 309).endFill();
      this.blueButton.graphics.clear()
      this.greenButton.graphics.clear()
    } else if (key === 68) {
      this.bluePressed = true;
      this.blueButton.graphics.clear()
        .beginFill("#00FFFF").drawCircle(0, 0, 25, 309).endFill();
      this.greenButton.graphics.clear()
      this.redButton.graphics.clear()
    } else if (key === 70) {
      this.greenPressed = true;
      this.greenButton.graphics.clear()
      .beginFill("#00FF00").drawCircle(0, 0, 25, 309).endFill();
      this.redButton.graphics.clear()
      this.blueButton.graphics.clear()
    } else if (key === 74) {
      this.strumming = true
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

  handleHit (circle) {
    this.hits += 1;
    // createjs.Tween.get(circle).to({scaleX: 2, scaleY: 2}, 500);
    //
    // anime({
    // targets: circle,
    // translateX: 250
    // });

    this.stage.removeChild(circle);
    this.updateScore();
  }

  updateScore () {
    const updatedAccuracy = this.accuracy().toString() + "%";
    this.scoreboard.text = updatedAccuracy;

    if (updatedAccuracy > this.curAccuracy) {
      this.scoreboard.color = "#00FF00"
    } else {
      this.scoreboard.color = "#FF0000"
    }

    this.curAccuracy = updatedAccuracy;
  }

  countdown () {
    // document.getElementById("play-button").className = "hidden";
    document.getElementById("header").className = "hidden";

    const count3 = new createjs.Text("3", "100px Reenie Beanie", "#00FF00");
    count3.x = 180;
    count3.y = 300;
    createjs.Tween.get(count3).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
    this.stage.addChild(count3);

    setTimeout(() => {
      this.stage.removeChild(count3);
      const count2 = new createjs.Text("2", "100px Reenie Beanie", "#00FFFF");
      count2.x = 180;
      count2.y = 300;
      createjs.Tween.get(count2).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
      this.stage.addChild(count2);

      setTimeout(() => {
        this.stage.removeChild(count2);
        const count1 = new createjs.Text("1", "100px Reenie Beanie", "#FF0000");
        count1.x = 180;
        count1.y = 300;
        createjs.Tween.get(count1).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
        this.stage.addChild(count1);

        setTimeout(() => {
          this.stage.removeChild(count1);
          this.run();
        }, 1000)
      }, 1000)
    }, 1000)
  }

  directions () {
    const direction1 = new createjs.Text("=> Press S/D/F to hold down notes.", "60px Reenie Beanie", "#00FF00");
    direction1.x = 150;
    direction1.y = -60;

    createjs.Tween.get(direction1).to({y: 180}, 400, createjs.Ease.bounceOut)
    this.stage.addChild(direction1)

    setTimeout(() => {
      const direction2 = new createjs.Text("=> Tap J to strum.", "60px Reenie Beanie", "#00FF00");
      direction2.x = 150;
      direction2.y = -60;

      createjs.Tween.get(direction2).to({y: 100}, 400, createjs.Ease.bounceOut)
      this.stage.addChild(direction2)

      setTimeout(() => {
        this.stage.removeChild(direction2, direction1);
        this.countdown();
      }, 3000)
    }, 1000)
  }

  selectLevel () {
    let tempo1
    let tempo2
    let tempo3
    let tempo4

    tempo1 = new createjs.Text("=>Allegretto (easy)", "30px Reenie Beanie", "#00FF00");
    tempo1.x = 100;
    tempo1.y = 1200;
    tempo1.cursor = "pointer";
    tempo1.addEventListener("click", () => {
      this.tempo = 110;
      this.stage.removeChild(tempo1, tempo2, tempo3, tempo4)
      this.directions();
    })
    createjs.Tween.get(tempo1).to({y: 300}, 400, createjs.Ease.bounceOut)
    this.stage.addChild(tempo1)

    setTimeout(() => {
      tempo2 = new createjs.Text("=>Vivace (medium)", "30px Reenie Beanie", "#00FFFF");
      tempo2.x = 100;
      tempo2.y = 1200;
      tempo2.cursor = "pointer";
      tempo2.addEventListener("click", () => {
        this.tempo = 130;
        this.stage.removeChild(tempo1, tempo2, tempo3, tempo4)
        this.directions();
      })
      createjs.Tween.get(tempo2).to({y: 200}, 400, createjs.Ease.bounceOut)
      this.stage.addChild(tempo2)

      setTimeout(() => {
        tempo3 = new createjs.Text("=>Presto (hard)", "30px Reenie Beanie", "#FF0000");
        tempo3.x = 100;
        tempo3.y = 1200;
        tempo3.cursor = "pointer";
        tempo3.addEventListener("click", () => {
          this.tempo = 170;
          this.stage.removeChild(tempo1, tempo2, tempo3, tempo4)
          this.directions();
        })
        createjs.Tween.get(tempo3).to({y: 380}, 400, createjs.Ease.bounceOut)
        this.stage.addChild(tempo3)

        setTimeout(() => {
          tempo4 = new createjs.Text("=>Prestissimo (there's just no way)", "30px Reenie Beanie", "#DC143C");
          tempo4.x = 100;
          tempo4.y = 1200;
          tempo4.cursor = "pointer";
          tempo4.addEventListener("click", () => {
            this.tempo = 185;
            this.stage.removeChild(tempo1, tempo2, tempo3, tempo4)
            this.directions();
          })
          createjs.Tween.get(tempo4).to({y: 420}, 400, createjs.Ease.bounceOut)
          this.stage.addChild(tempo4)
        }, 500)
      }, 500)
    }, 500)
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp$this=this;
(function(u,r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"===typeof module&&module.exports?module.exports=r():u.anime=r()})(this,function(){function u(a){if(!g.col(a))try{return document.querySelectorAll(a)}catch(b){}}function r(a){return a.reduce(function(a,c){return a.concat(g.arr(c)?r(c):c)},[])}function v(a){if(g.arr(a))return a;g.str(a)&&(a=u(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function E(a,b){return a.some(function(a){return a===b})}
function z(a){var b={},c;for(c in a)b[c]=a[c];return b}function F(a,b){var c=z(a),d;for(d in a)c[d]=b.hasOwnProperty(d)?b[d]:a[d];return c}function A(a,b){var c=z(a),d;for(d in b)c[d]=g.und(a[d])?b[d]:a[d];return c}function R(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,h){return b+b+c+c+h+h});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var c=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+c+","+b+")"}function S(a){function b(a,b,c){0>
c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a}var c=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);a=parseInt(c[1])/360;var d=parseInt(c[2])/100,c=parseInt(c[3])/100;if(0==d)d=c=a=c;else{var e=.5>c?c*(1+d):c+d-c*d,k=2*c-e,d=b(k,e,a+1/3),c=b(k,e,a);a=b(k,e,a-1/3)}return"rgb("+255*d+","+255*c+","+255*a+")"}function w(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(a))return a[2]}function T(a){if(-1<a.indexOf("translate"))return"px";
if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function G(a,b){return g.fnc(a)?a(b.target,b.id,b.total):a}function B(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function H(a,b){if(g.dom(a)&&E(U,b))return"transform";if(g.dom(a)&&(a.getAttribute(b)||g.svg(a)&&a[b]))return"attribute";if(g.dom(a)&&"transform"!==b&&B(a,b))return"css";if(null!=a[b])return"object"}function V(a,b){var c=T(b),c=-1<b.indexOf("scale")?
1:0+c;a=a.style.transform;if(!a)return c;for(var d=[],e=[],k=[],h=/(\w+)\((.+?)\)/g;d=h.exec(a);)e.push(d[1]),k.push(d[2]);a=k.filter(function(a,c){return e[c]===b});return a.length?a[0]:c}function I(a,b){switch(H(a,b)){case "transform":return V(a,b);case "css":return B(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0}function J(a,b){var c=/^(\*=|\+=|-=)/.exec(a);if(!c)return a;b=parseFloat(b);a=parseFloat(a.replace(c[0],""));switch(c[0][0]){case "+":return b+a;case "-":return b-a;case "*":return b*
a}}function C(a){return g.obj(a)&&a.hasOwnProperty("totalLength")}function W(a,b){function c(c){c=void 0===c?0:c;return a.el.getPointAtLength(1<=b+c?b+c:0)}var d=c(),e=c(-1),k=c(1);switch(a.property){case "x":return d.x;case "y":return d.y;case "angle":return 180*Math.atan2(k.y-e.y,k.x-e.x)/Math.PI}}function K(a,b){var c=/-?\d*\.?\d+/g;a=C(a)?a.totalLength:a;if(g.col(a))b=g.rgb(a)?a:g.hex(a)?R(a):g.hsl(a)?S(a):void 0;else{var d=w(a);a=d?a.substr(0,a.length-d.length):a;b=b?a+b:a}b+="";return{original:b,
numbers:b.match(c)?b.match(c).map(Number):[0],strings:b.split(c)}}function X(a,b){return b.reduce(function(b,d,e){return b+a[e-1]+d})}function L(a){return(a?r(g.arr(a)?a.map(v):v(a)):[]).filter(function(a,c,d){return d.indexOf(a)===c})}function Y(a){var b=L(a);return b.map(function(a,d){return{target:a,id:d,total:b.length}})}function Z(a,b){var c=z(b);if(g.arr(a)){var d=a.length;2!==d||g.obj(a[0])?g.fnc(b.duration)||(c.duration=b.duration/d):a={value:a}}return v(a).map(function(a,c){c=c?0:b.delay;
a=g.obj(a)&&!C(a)?a:{value:a};g.und(a.delay)&&(a.delay=c);return a}).map(function(a){return A(a,c)})}function aa(a,b){var c={},d;for(d in a){var e=G(a[d],b);g.arr(e)&&(e=e.map(function(a){return G(a,b)}),1===e.length&&(e=e[0]));c[d]=e}c.duration=parseFloat(c.duration);c.delay=parseFloat(c.delay);return c}function ba(a){return g.arr(a)?x.apply(this,a):M[a]}function ca(a,b){var c;return a.tweens.map(function(d){d=aa(d,b);var e=d.value,k=I(b.target,a.name),h=c?c.to.original:k,h=g.arr(e)?e[0]:h,n=J(g.arr(e)?
e[1]:e,h),k=w(n)||w(h)||w(k);d.isPath=C(e);d.from=K(h,k);d.to=K(n,k);d.start=c?c.end:a.offset;d.end=d.start+d.delay+d.duration;d.easing=ba(d.easing);d.elasticity=(1E3-Math.min(Math.max(d.elasticity,1),999))/1E3;g.col(d.from.original)&&(d.round=1);return c=d})}function da(a,b){return r(a.map(function(a){return b.map(function(b){var c=H(a.target,b.name);if(c){var d=ca(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})).filter(function(a){return!g.und(a)})}
function N(a,b,c){var d="delay"===a?Math.min:Math.max;return b.length?d.apply(Math,b.map(function(b){return b[a]})):c[a]}function ea(a){var b=F(fa,a),c=F(ga,a),d=Y(a.targets),e=[],g=A(b,c),h;for(h in a)g.hasOwnProperty(h)||"targets"===h||e.push({name:h,offset:g.offset,tweens:Z(a[h],c)});a=da(d,e);return A(b,{animatables:d,animations:a,duration:N("duration",a,c),delay:N("delay",a,c)})}function m(a){function b(){return window.Promise&&new Promise(function(a){return P=a})}function c(a){return f.reversed?
f.duration-a:a}function d(a){for(var b=0,c={},d=f.animations,e={};b<d.length;){var g=d[b],h=g.animatable,n=g.tweens;e.tween=n.filter(function(b){return a<b.end})[0]||n[n.length-1];e.isPath$0=e.tween.isPath;e.round=e.tween.round;e.eased=e.tween.easing(Math.min(Math.max(a-e.tween.start-e.tween.delay,0),e.tween.duration)/e.tween.duration,e.tween.elasticity);n=X(e.tween.to.numbers.map(function(a){return function(b,c){c=a.isPath$0?0:a.tween.from.numbers[c];b=c+a.eased*(b-c);a.isPath$0&&(b=W(a.tween.value,
b));a.round&&(b=Math.round(b*a.round)/a.round);return b}}(e)),e.tween.to.strings);ha[g.type](h.target,g.property,n,c,h.id);g.currentValue=n;b++;e={isPath$0:e.isPath$0,tween:e.tween,eased:e.eased,round:e.round}}if(c)for(var k in c)D||(D=B(document.body,"transform")?"transform":"-webkit-transform"),f.animatables[k].target.style[D]=c[k].join(" ");f.currentTime=a;f.progress=a/f.duration*100}function e(a){if(f[a])f[a](f)}function g(){f.remaining&&!0!==f.remaining&&f.remaining--}function h(a){var h=f.duration,
k=f.offset,m=f.delay,O=f.currentTime,p=f.reversed,q=c(a),q=Math.min(Math.max(q,0),h);q>k&&q<h?(d(q),!f.began&&q>=m&&(f.began=!0,e("begin")),e("run")):(q<=k&&0!==O&&(d(0),p&&g()),q>=h&&O!==h&&(d(h),p||g()));a>=h&&(f.remaining?(t=n,"alternate"===f.direction&&(f.reversed=!f.reversed)):(f.pause(),P(),Q=b(),f.completed||(f.completed=!0,e("complete"))),l=0);if(f.children)for(a=f.children,h=0;h<a.length;h++)a[h].seek(q);e("update")}a=void 0===a?{}:a;var n,t,l=0,P=null,Q=b(),f=ea(a);f.reset=function(){var a=
f.direction,b=f.loop;f.currentTime=0;f.progress=0;f.paused=!0;f.began=!1;f.completed=!1;f.reversed="reverse"===a;f.remaining="alternate"===a&&1===b?2:b};f.tick=function(a){n=a;t||(t=n);h((l+n-t)*m.speed)};f.seek=function(a){h(c(a))};f.pause=function(){var a=p.indexOf(f);-1<a&&p.splice(a,1);f.paused=!0};f.play=function(){f.paused&&(f.paused=!1,t=0,l=f.completed?0:c(f.currentTime),p.push(f),y||ia())};f.reverse=function(){f.reversed=!f.reversed;t=0;l=c(f.currentTime)};f.restart=function(){f.pause();
f.reset();f.play()};f.finished=Q;f.reset();f.autoplay&&f.play();return f}var fa={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},ga={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},U="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),D,g={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},svg:function(a){return a instanceof
SVGElement},dom:function(a){return a.nodeType||g.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return g.hex(a)||g.rgb(a)||g.hsl(a)}},x=function(){function a(a,c,d){return(((1-3*d+3*c)*a+(3*d-6*c))*a+3*c)*a}return function(b,c,d,e){if(0<=b&&1>=b&&
0<=d&&1>=d){var g=new Float32Array(11);if(b!==c||d!==e)for(var h=0;11>h;++h)g[h]=a(.1*h,b,d);return function(h){if(b===c&&d===e)return h;if(0===h)return 0;if(1===h)return 1;for(var k=0,l=1;10!==l&&g[l]<=h;++l)k+=.1;--l;var l=k+(h-g[l])/(g[l+1]-g[l])*.1,n=3*(1-3*d+3*b)*l*l+2*(3*d-6*b)*l+3*b;if(.001<=n){for(k=0;4>k;++k){n=3*(1-3*d+3*b)*l*l+2*(3*d-6*b)*l+3*b;if(0===n)break;var m=a(l,b,d)-h,l=l-m/n}h=l}else if(0===n)h=l;else{var l=k,k=k+.1,f=0;do m=l+(k-l)/2,n=a(m,b,d)-h,0<n?k=m:l=m;while(1e-7<Math.abs(n)&&
10>++f);h=m}return a(h,c,e)}}}}(),M=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var b="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),c={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],
[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},d={linear:x(.25,.25,.75,.75)},e={},k;for(k in c)e.type=k,c[e.type].forEach(function(a){return function(c,e){d["ease"+a.type+b[e]]=g.fnc(c)?c:x.apply($jscomp$this,c)}}(e)),e={type:e.type};return d}(),ha={css:function(a,b,c){return a.style[b]=
c},attribute:function(a,b,c){return a.setAttribute(b,c)},object:function(a,b,c){return a[b]=c},transform:function(a,b,c,d,e){d[e]||(d[e]=[]);d[e].push(b+"("+c+")")}},p=[],y=0,ia=function(){function a(){y=requestAnimationFrame(b)}function b(b){var c=p.length;if(c){for(var e=0;e<c;)p[e]&&p[e].tick(b),e++;a()}else cancelAnimationFrame(y),y=0}return a}();m.version="2.0.1";m.speed=1;m.running=p;m.remove=function(a){a=L(a);for(var b=p.length-1;0<=b;b--)for(var c=p[b],d=c.animations,e=d.length-1;0<=e;e--)E(a,
d[e].animatable.target)&&(d.splice(e,1),d.length||c.pause())};m.getValue=I;m.path=function(a,b){var c=g.str(a)?u(a)[0]:a,d=b||100;return function(a){return{el:c,property:a,totalLength:c.getTotalLength()*(d/100)}}};m.setDashoffset=function(a){var b=a.getTotalLength();a.setAttribute("stroke-dasharray",b);return b};m.bezier=x;m.easings=M;m.timeline=function(a){var b=m(a);b.duration=0;b.children=[];b.add=function(a){v(a).forEach(function(a){var c=a.offset,d=b.duration;a.autoplay=!1;a.offset=g.und(c)?
d:J(c,d);a=m(a);a.duration>d&&(b.duration=a.duration);b.children.push(a)});return b};return b};m.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return m});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map