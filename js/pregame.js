function delay(interval) {
    return new Promise(function(resolve) {
        setTimeout(resolve, interval);
    });
}

export const countdown = (stage, run, tempo) => {
  document.getElementById("header").className = "hidden";

  const countdownSound = "countdownSound";
  createjs.Sound.registerSound("assets/shovel.mp3", countdownSound);

  const count3 = new createjs.Text("3", "100px Reenie Beanie", "#00FFFF");
  const count2 = new createjs.Text("2", "100px Reenie Beanie", "#00FF00");
  const count1 = new createjs.Text("1", "100px Reenie Beanie", "#FF0000");

  delay(1000).then(() => {
    count3.x = 180;
    count3.y = 300;
    createjs.Tween.get(count3).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
    createjs.Sound.play(countdownSound);
    stage.addChild(count3);
    return delay(1000);
  }).then(() => {
    stage.removeChild(count3);
    count2.x = 180;
    count2.y = 300;
    createjs.Tween.get(count2).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
    createjs.Sound.play(countdownSound);
    stage.addChild(count2);
    return delay(1000)
  }).then(() => {
    stage.removeChild(count2);
    count1.x = 180;
    count1.y = 300;
    createjs.Tween.get(count1).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
    createjs.Sound.play(countdownSound);
    stage.addChild(count1);
    return delay(1000);
  }).then(() => {
    stage.removeChild(count1);
    run(tempo);
  })
}

export const directions = (stage, run, tempo) => {
  const direction1 = new createjs.Text("=> Press S/D/F to hold down notes.", "60px Reenie Beanie", "#00FF00");
  direction1.x = 150;
  direction1.y = 380;
  stage.addChild(direction1)

  setTimeout(() => {
    const direction2 = new createjs.Text("=> Tap J to strum.", "60px Reenie Beanie", "#00FF00");
    direction2.x = 150;
    direction2.y = 300;
    stage.addChild(direction2)

    setTimeout(() => {
      createjs.Tween.get(direction1).to({x: 360, y: 370, scaleX: 0.5, scaleY: 0.5}, 200)
      createjs.Tween.get(direction2).to({x: 360, y: 330, scaleX: 0.5, scaleY: 0.5}, 200)
      countdown(stage, run, tempo);
    }, 3000)
  }, 1000)
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

export const gameOver = (stage, musicPlayer, scoreboard, hits, misses, run, tempo) => {
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
    message.x = 75;
    message.y = 450;
    stage.addChild(message);
    return delay(1000);
  }).then(() => {
    githubLink.addEventListener("click", () => window.open("https://github.com/PhilMayer/JSHero"))
    githubLink.cursor = "pointer";
    githubLink.x = 75;
    githubLink.y = 20;

    const githubClick = new createjs.Shape();
    githubClick.graphics.beginFill("#000").drawRect(0, 0, githubLink.getMeasuredWidth(), githubLink.getMeasuredHeight());
    githubLink.hitArea = githubClick;

    stage.addChild(githubLink);
    return delay(200);
  }).then(() => {
    playAgain.addEventListener("click", () => {
      stage.removeChild(playAgain, githubLink, message, scoreboard)
      hits = 0;
      misses = 0;
      run(tempo);
    })
    playAgain.cursor = "pointer";
    playAgain.x = 75;
    playAgain.y = 100;

    const hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawRect(0, 0, playAgain.getMeasuredWidth(), playAgain.getMeasuredHeight());
    playAgain.hitArea = hit;
    stage.addChild(playAgain);
  })
}

export const selectLevel = (stage, run) => {
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
