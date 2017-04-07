function delay(interval) {
    return new Promise(function(resolve) {
        setTimeout(resolve, interval);
    });
}

export const countdown = (stage, run, tempo) => {
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

const drawCount = (stage, count, prevCount) => {
  if (prevCount) stage.removeChild(prevCount);
  count.x = 180;
  count.y = 300;
  createjs.Tween.get(count).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
  stage.addChild(count);
}

export const directions = (stage, run, tempo) => {
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

const drawDirection = (stage, direction, yCoord) => {
  direction.x = 150;
  direction.y = yCoord;
  stage.addChild(direction)
}

const drawLevel = (text, color, stage, levelCallback, tempo, yCoord) => {
  let level = new createjs.Text(text, "30px Reenie Beanie", color);
  level.x = 100;
  level.y = 1200;
  level.cursor = "pointer";

  const hit = new createjs.Shape();
  hit.graphics.beginFill("#000").drawRect(0, 0, level.getMeasuredWidth(), level.getMeasuredHeight());
  level.hitArea = hit;

  level.addEventListener("click", () => levelCallback(tempo));
  createjs.Tween.get(level).to({y: yCoord}, 400, createjs.Ease.bounceOut)
  stage.addChild(level)

  return level;
}

export const gameOver = (stage, musicPlayer, scoreboard, hits, misses, run, tempo) => {
  const applause = "applause";
  createjs.Sound.registerSound("assets/applause.mp3", applause);

  const message = new createjs.Text("You're basically Beethoven.", "30px Reenie Beanie");
  const githubLink = new createjs.Text("A game by Phil Mayer => Github", "40px Reenie Beanie", "#FF0000")
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

export const selectLevel = (stage, run) => {
  let level1, level2, level3, level4, gameTempo;

  const levelDrawn = "levelDrawn";
  const levelChosen = "levelChosen";
  createjs.Sound.registerSound("assets/warning.mp3", levelChosen);
  createjs.Sound.registerSound("assets/countdown.mp3", levelDrawn);

  const levelCallback = (tempo) => {
    createjs.Sound.play(levelChosen)
    gameTempo = tempo
    stage.removeChild(level1, level2, level3, level4)
    directions(stage, run, gameTempo);
  }

  delay(500).then(() => {
    level1 = drawLevel("=>Allegretto (easy)", "#00FF00", stage, levelCallback, 110, 140)
    createjs.Sound.play(levelDrawn)
    return delay(500);
  }).then(() => {
    createjs.Sound.play(levelDrawn)
    level2 = drawLevel("=>Vivace (medium)", "#00FFFF", stage, levelCallback, 130, 200)
    return delay(500);
  }).then(() => {
    createjs.Sound.play(levelDrawn)
    level3 = drawLevel("=>Presto (hard)", "#FF0000", stage, levelCallback, 170, 260)
    return delay(500);
  }).then(() => {
    createjs.Sound.play(levelDrawn)
    level4 = drawLevel("=>Prestissimo (there's just no way)", "#FF6600", stage, levelCallback, 185, 320)
  })
}
