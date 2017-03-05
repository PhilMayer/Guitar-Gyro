import {randomCircle, drawButton} from './circle';
import {playMusic, stopMusic, getRhythm, mapNoteToDuration} from './melody';

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("play")
  playButton.addEventListener("click", () => {
    stopMusic();
    new Game();
  })
});

class Game {
  constructor () {
    this.stage = new createjs.Stage("demoCanvas");
    this.stage.keyboardEventsEnabled = true;

    document.onkeydown = this.keyPressed.bind(this);
    document.onkeyup = this.keyReleased.bind(this);

    createjs.Ticker.addEventListener("tick", () => {
      this.stage.update();
    })
    createjs.Ticker.setFPS(60);

    this.drawLetters();

    this.misses = 0;
    this.hits = 0;

    this.scoreboard = this.drawScoreboard();
    this.scoreboard.addEventListener("tick", () => {
      this.updateScore()
    })

    this.strumming = false;

    this.redPressed = false;
    this.bluePressed = false;
    this.greenPressed = false;


    this.redButton = drawButton(this.stage, "red");
    this.blueButton = drawButton(this.stage, "blue");
    this.greenButton = drawButton(this.stage, "green");


    this.run = this.run.bind(this);
    this.run();
  }

  run () {
    playMusic();
    this.generateNotes();
  }

  accuracy () {
    const totalNotes = this.hits + this.misses;
    if (totalNotes === 0) {
      return 0;
    } else {
      return Math.round((this.hits / totalNotes) * 100)
    }
  }

  drawLetters () {
    const letters = ["S", "D", "F"]
    let xCoord = 92;

    letters.forEach(letter => {
      let buttonLetter = new createjs.Text(letter, "25px Arial");
      buttonLetter.x = xCoord;
      buttonLetter.y = 690;
      xCoord += 100;
      this.stage.addChild(buttonLetter);
    })
  }

  drawScoreboard () {
    const accuracy = this.accuracy().toString() + "%";

    let displayAccuracy = new createjs.Text(accuracy, "60px Arial");
    displayAccuracy.x = 500;
    displayAccuracy.y = 250;
    this.stage.addChild(displayAccuracy);

    // let displayLabel = new createjs.Text("accuracy", "20px Arial")
    // displayLabel.x = 610;
    // displayLabel.y = 287;
    // this.stage.addChild(displayLabel);

    return displayAccuracy
  }


  // keyPressed(e) {
  //   const key = e.keyCode;
  //
  //   if (key === 83 && !this.bluePressed && !this.greenPressed) {
  //     this.redPressed = true;
  //     this.redButton.graphics.clear()
  //       .beginFill("#FF0000").drawCircle(0, 0, 25, 309).endFill();
  //   } else if (key === 68 && !this.redPressed && !this.greenPressed) {
  //     this.bluePressed = true;
  //     this.blueButton.graphics.clear()
  //       .beginFill("#00FFFF").drawCircle(0, 0, 25, 309).endFill();
  //   } else if (key === 70 && !this.bluePressed && !this.redPressed) {
  //     this.greenPressed = true;
  //     this.greenButton.graphics.clear()
  //       .beginFill("#00FF00").drawCircle(0, 0, 25, 309).endFill();
  //   } else if (key === 74) {
  //     this.strumming = true
  //   }
  // }
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

  gameOver () {
    setTimeout(() => {
      stopMusic();
      createjs.Tween.get(this.scoreboard).to({x: 80, rotation: -360},
        1000, createjs.Ease.bounceOut);
    }, 2000)
  }

  generateNotes () {
    const rhythm = getRhythm();
    this.deployNote(rhythm);
  }

  handleHit (circle) {
    this.hits += 1;
    // createjs.Tween.get(circle).to({scaleX: 2, scaleY: 2}, 500);
    this.stage.removeChild(circle);
  }

  deployNote (rhythm, note = 0) {
      const typeOfNote = rhythm[note - 1] || rhythm[0];
      const delay = mapNoteToDuration[typeOfNote] * 1000
      const colors = ["red", "blue", "green"]

      setTimeout(() => {
        const circleColor = colors[Math.floor(Math.random() * colors.length)];
        let circle = randomCircle(circleColor);
        // let tween = createjs.Tween.get(circle)
        //   .to({scaleX: 2, scaleY: 2}, 100)
        //   .to({scaleX: .5, scaleY: .5}, 100);

        this.stage.addChild(circle);

        circle.addEventListener("tick", () => {
          circle.y += 8;
          if (circle.y === 1100) {
            this.misses += 1;
            this.stage.removeChild(circle);
          } else if (circle.y > 835 && circle.y < 860) {
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

  updateScore () {
    const accuracy = this.accuracy().toString() + "%";
    this.scoreboard.text = accuracy;
  }
    // setInterval(() => {
    //   const circleColor = colors[Math.floor(Math.random() * colors.length)];
    //   let circle = randomCircle(circleColor);
    //   this.stage.addChild(circle);
    //
    //   circle.addEventListener("tick", () => {
    //     circle.y += 8;
    //     if (circle.y === 1100) {
    //       this.misses += 1;
    //       this.stage.removeChild(circle);
    //     } else if (circle.y > 830) {
    //         if (this.redPressed && this.strumming && circleColor === "red") {
    //           this.handleHit(circle);
    //         } else if (this.bluePressed && this.strumming && circleColor === "blue") {
    //           this.handleHit(circle);
    //         } else if (this.greenPressed && this.strumming && circleColor === "green") {
    //           this.handleHit(circle);
    //         }
    //     }
    //   });
    // }, 500)

}
