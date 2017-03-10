import {randomCircle, drawButton} from './circle';
import {getRhythm, mapNoteToDuration} from './melody';
import MusicPlayer from './music_player'
import {gameOver} from './pregame';

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("play")
  playButton.addEventListener("click", () => {
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
    this.redButton = drawButton(this.stage, "red");
    this.blueButton = drawButton(this.stage, "blue");
    this.greenButton = drawButton(this.stage, "green");

    this.selectLevel();
    this.tempo = 120;
    this.run = this.run.bind(this);
  }

  run () {
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
           this.scoreboard, this.hits, this.misses, this.run);
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

          const githubClick = new createjs.Shape();
          githubClick.graphics.beginFill("#000").drawRect(0, 0, githubLink.getMeasuredWidth(), githubLink.getMeasuredHeight());
          githubLink.hitArea = githubClick;

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

            const hit = new createjs.Shape();
        		hit.graphics.beginFill("#000").drawRect(0, 0, playAgain.getMeasuredWidth(), playAgain.getMeasuredHeight());
        		playAgain.hitArea = hit;
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

  handleHit (circle) {
    this.hits += 1;
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

  // drawCountdown (countNumber, color) {
  //   const countdown = new createjs.Text(countNumber, "100px Reenie Beanie", color);
  //   countdown.x = 180;
  //   countdown.y = 300;
  //   createjs.Tween.get(countdown).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
  //   this.stage.addChild(countdown);
  // }

  countdown () {
    document.getElementById("header").className = "hidden";

    // const count3 = this.drawCountdown("3", "#00FF00");
    const count3 = new createjs.Text("3", "100px Reenie Beanie", "#00FFFF");
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

  drawLevel (text, color) {
    let level = new createjs.Text(text, "30px Reenie Beanie", color);
    level.x = 100;
    level.y = 1200;
    level.cursor = "pointer";

    const hit = new createjs.Shape();
		hit.graphics.beginFill("#000").drawRect(0, 0, level.getMeasuredWidth(), level.getMeasuredHeight());
		level.hitArea = hit;
    return level;
  }

  selectLevel () {
    let level1;
    let level2;
    let level3;
    let level4;

    const levelCallback = (tempo) => {
      this.tempo = tempo;
      this.stage.removeChild(level1, level2, level3, level4)
      this.directions();
    }

    level1 = this.drawLevel("=>Allegretto (easy)", "#00FF00")
    level1.addEventListener("click", () => levelCallback(110));
    createjs.Tween.get(level1).to({y: 140}, 400, createjs.Ease.bounceOut)
    this.stage.addChild(level1)

    setTimeout(() => {
      level2 = this.drawLevel("=>Vivace (medium)", "#00FFFF");
      level2.addEventListener("click", () => levelCallback(130));
      createjs.Tween.get(level2).to({y: 200}, 400, createjs.Ease.bounceOut)
      this.stage.addChild(level2)

      setTimeout(() => {
        level3 = this.drawLevel("=>Presto (hard)", "#FF0000");
        level3.addEventListener("click", () => levelCallback(170));
        createjs.Tween.get(level3).to({y: 260}, 400, createjs.Ease.bounceOut)
        this.stage.addChild(level3)

        setTimeout(() => {
          level4 = this.drawLevel("=>Prestissimo (there's just no way)", "#DC143C");
          level4.addEventListener("click", () => levelCallback(185));
          createjs.Tween.get(level4).to({y: 320}, 400, createjs.Ease.bounceOut)
          this.stage.addChild(level4)
        }, 500)
      }, 500)
    }, 500)
  }
}
