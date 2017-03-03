import {randomCircle, drawButton} from './circle.js';
import {playMusic} from './melody';

document.addEventListener("DOMContentLoaded", () => {
  new Game();
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

    this.redHit = false;
    this.blueHit = false;
    this.greenHit = false;

    this.redPressed = false;
    this.bluePressed = false;
    this.greenPressed = false;

    this.strumming = false;

    window.redHit = this.redHit
    window.redPressed = this.redPressed

    this.redButton = drawButton(this.stage, "red");
    this.blueButton = drawButton(this.stage, "blue");
    this.greenButton = drawButton(this.stage, "green");

    this.run = this.run.bind(this);
    this.run();
  }

  drawLetters () {
    const letters = ["S", "E", "F"]
    let xCoord = 92;
    letters.forEach(letter => {
      let toDraw = new createjs.Text(letter, "25px Arial");
      toDraw.x = xCoord;
      toDraw.y = 690;
      xCoord += 100;
      this.stage.addChild(toDraw);
    })
  }

  keyPressed(e) {
    const key = e.keyCode;
    // this.strumming = key === 73 || key === 74


    if (key === 83) {
      this.redPressed = true;
      this.redButton.graphics.clear()
        .beginFill("#FF0000").drawCircle(0, 0, 40, 309).endFill();
    } else if (key === 69) {
      this.blueButton.graphics.clear()
        .beginFill("#00FFFF").drawCircle(0, 0, 40, 309).endFill();
    } else if (key === 70) {
      this.greenButton.graphics.clear()
        .beginFill("#00FF00").drawCircle(0, 0, 40, 309).endFill();
    } else if (key === 73 || key === 74) {
      this.strumming = true
    }

    // if (this.redPressed && strumming) {
    //   this.redHit = true;
    // }
  }

  keyReleased(e) {
    const key = e.keyCode;
    if (key === 83) {
      this.redPressed = false;
      this.redButton.graphics.clear()
      this.redButton = drawButton(this.stage, "red");
    } else if (key === 69) {
      this.blueButton.graphics.clear()
      this.blueButton = drawButton(this.stage, "blue");
    } else if (key === 70) {
      this.greenButton.graphics.clear()
      this.greenButton = drawButton(this.stage, "green");
    } else if (key === 73 || key === 74) {
      this.strumming = false
    }
  }

  run () {
    playMusic();
    const colors = ["red", "blue", "green"]
    setInterval(() => {
      const circleColor = colors[Math.floor(Math.random() * colors.length)];
      let circle = randomCircle(circleColor);
      this.stage.addChild(circle);

      circle.addEventListener("tick", () => {
        circle.y += 8;
        if (circle.y === 1100) {
          this.stage.removeChild(circle);
        } else if (circle.y > 830) {
            if (this.redPressed && this.strumming && circleColor === "red") {

              this.stage.removeChild(circle);
              this.redHit = false;
            }
        }
      });
    }, 500)
  }
}
