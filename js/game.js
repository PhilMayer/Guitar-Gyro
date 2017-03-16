import {randomCircle, drawButton} from './circle';
import {getRhythm, mapNoteToDuration} from './melody';
import MusicPlayer from './music_player'
import {gameOver, countdown, directions, selectLevel} from './pregame';

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
    this.redButton = drawButton(this.stage, "red");
    this.blueButton = drawButton(this.stage, "blue");
    this.greenButton = drawButton(this.stage, "green");

    this.tempo = 120;
    this.run = this.run.bind(this);
    selectLevel(this.stage, this.run);
  }

  run (tempo) {
    this.tempo = tempo;
    this.hits = 0;
    this.misses = 0;
    this.scoreboard = this.drawScoreboard();

    this.musicPlayer = new MusicPlayer(this.tempo);
    this.musicPlayer.play();
    const rhythm = getRhythm();
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
      let circle = randomCircle(circleColor);
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
        gameOver(this.stage, this.musicPlayer,
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
      this.redButton = drawButton(this.stage, "red");
    } else if (key === 68) {
      this.bluePressed = false;
      this.blueButton.graphics.clear()
      this.blueButton = drawButton(this.stage, "blue");
    } else if (key === 70) {
      this.greenPressed = false;
      this.greenButton.graphics.clear()
      this.greenButton = drawButton(this.stage, "green");
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
