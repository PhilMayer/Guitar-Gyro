import {randomCircle, drawButton} from './circle.js';

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
    this.stage.on("keypress", (e) => {
      console.log(e)
    })

    this.redButton = drawButton(this.stage, "red");
    this.blueButton = drawButton(this.stage, "blue");
    this.greenButton = drawButton(this.stage, "green");

    this.run();
  }

  keyPressed(e) {
    const key = e.keyCode;
    if (key === 75) {
      this.button.graphics.clear()
        .beginFill("#FF0000").drawCircle(0, 0, 35, 309).endFill();
    }
  }

  keyReleased(e) {
    const key = e.keyCode;

    this.button.graphics.clear()
    var border = new createjs.Shape();
    border.graphics.beginStroke("#00FFFF");
    border.graphics.setStrokeStyle(1);
    border.snapToPixel = true;
    border.graphics.drawCircle(0, 0, 35, 309);
    border.x = 200;
    border.y = 650;
    this.stage.addChild(border)
  }

  run () {
    const colors = ["red", "blue", "green"]
    setInterval(() => {
      const circleColor = colors[Math.floor(Math.random() * colors.length)];
      let circle = randomCircle(circleColor);
      this.stage.addChild(circle);

      circle.addEventListener("tick", () => {
        circle.y += 10;
        if (circle.y === 1100) {
          this.stage.removeChild(circle);
        }
      });
    }, 200)
  }
}
