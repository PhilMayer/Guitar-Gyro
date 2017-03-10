export const countdown = (stage, run) => {
  document.getElementById("header").className = "hidden";

  // const count3 = this.drawCountdown("3", "#00FF00");
  const count3 = new createjs.Text("3", "100px Reenie Beanie", "#00FFFF");
  count3.x = 180;
  count3.y = 300;
  createjs.Tween.get(count3).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
  stage.addChild(count3);

  setTimeout(() => {
    stage.removeChild(count3);
    const count2 = new createjs.Text("2", "100px Reenie Beanie", "#00FFFF");
    count2.x = 180;
    count2.y = 300;
    createjs.Tween.get(count2).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
    stage.addChild(count2);

    setTimeout(() => {
      stage.removeChild(count2);
      const count1 = new createjs.Text("1", "100px Reenie Beanie", "#FF0000");
      count1.x = 180;
      count1.y = 300;
      createjs.Tween.get(count1).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
      stage.addChild(count1);

      setTimeout(() => {
        stage.removeChild(count1);
        run();
      }, 1000)
    }, 1000)
  }, 1000)
}

export const directions = (stage, run) => {
  const direction1 = new createjs.Text("=> Press S/D/F to hold down notes.", "60px Reenie Beanie", "#00FF00");
  direction1.x = 150;
  direction1.y = -60;

  createjs.Tween.get(direction1).to({y: 380}, 400, createjs.Ease.bounceOut)
  stage.addChild(direction1)

  setTimeout(() => {
    const direction2 = new createjs.Text("=> Tap J to strum.", "60px Reenie Beanie", "#00FF00");
    direction2.x = 150;
    direction2.y = -60;

    createjs.Tween.get(direction2).to({y: 300}, 400, createjs.Ease.bounceOut)
    stage.addChild(direction2)

    setTimeout(() => {
      createjs.Tween.get(direction1).to({x: 360, y: 370, scaleX: 0.5, scaleY: 0.5}, 200)
      createjs.Tween.get(direction2).to({x: 360, y: 330, scaleX: 0.5, scaleY: 0.5}, 200)
      // stage.removeChild(direction2, direction1);
      countdown(stage, run);
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

export const gameOver = (stage, musicPlayer, scoreboard, hits, misses, run) => {
  setTimeout(() => {
    musicPlayer.stopMusic();
    createjs.Tween.get(scoreboard).to({x: 75, y: 500, rotation: -360},
      700, createjs.Ease.bounceOut);

    setTimeout(() => {
      const message = new createjs.Text("You're basically Beethoven.", "30px Reenie Beanie");
      message.x = 75;
      message.y = 450;
      stage.addChild(message);

      setTimeout(() => {
        const githubLink = new createjs.Text("A game by Phil Mayer => Github", "40px Reenie Beanie")
        githubLink.addEventListener("click", () => window.open("https://github.com/PhilMayer/JSHero"))
        githubLink.cursor = "pointer";
        githubLink.x = 75;
        githubLink.y = 20;

        const githubClick = new createjs.Shape();
        githubClick.graphics.beginFill("#000").drawRect(0, 0, githubLink.getMeasuredWidth(), githubLink.getMeasuredHeight());
        githubLink.hitArea = githubClick;

        stage.addChild(githubLink);

        setTimeout(() => {
          const playAgain = new createjs.Text("Play again!!", "80px Reenie Beanie", "#00FF00")
          playAgain.addEventListener("click", () => {
            stage.removeChild(playAgain, githubLink, message, scoreboard)
            hits = 0;
            misses = 0;
            run();
          })
          playAgain.cursor = "pointer";
          playAgain.x = 75;
          playAgain.y = 100;

          const hit = new createjs.Shape();
          hit.graphics.beginFill("#000").drawRect(0, 0, playAgain.getMeasuredWidth(), playAgain.getMeasuredHeight());
          playAgain.hitArea = hit;
          stage.addChild(playAgain);
        }, 200)
      }, 1000)
    }, 1000)
  }, 2000)
}

export const selectLevel = (stage, gameTempo, run) => {
  let level1;
  let level2;
  let level3;
  let level4;

  const levelCallback = (tempo) => {
    gameTempo = tempo;
    stage.removeChild(level1, level2, level3, level4)
    directions(stage, run);
  }

  level1 = drawLevel("=>Allegretto (easy)", "#00FF00")
  level1.addEventListener("click", () => levelCallback(110));
  createjs.Tween.get(level1).to({y: 140}, 400, createjs.Ease.bounceOut)
  stage.addChild(level1)

  setTimeout(() => {
    level2 = drawLevel("=>Vivace (medium)", "#00FFFF");
    level2.addEventListener("click", () => levelCallback(130));
    createjs.Tween.get(level2).to({y: 200}, 400, createjs.Ease.bounceOut)
    stage.addChild(level2)

    setTimeout(() => {
      level3 = drawLevel("=>Presto (hard)", "#FF0000");
      level3.addEventListener("click", () => levelCallback(170));
      createjs.Tween.get(level3).to({y: 260}, 400, createjs.Ease.bounceOut)
      stage.addChild(level3)

      setTimeout(() => {
        level4 = drawLevel("=>Prestissimo (there's just no way)", "#DC143C");
        level4.addEventListener("click", () => levelCallback(185));
        createjs.Tween.get(level4).to({y: 320}, 400, createjs.Ease.bounceOut)
        stage.addChild(level4)
      }, 500)
    }, 500)
  }, 500)
}

  // drawCountdown (countNumber, color) {
  //   const countdown = new createjs.Text(countNumber, "100px Reenie Beanie", color);
  //   countdown.x = 180;
  //   countdown.y = 300;
  //   createjs.Tween.get(countdown).to({alpha: 1}, 500).to({alpha: 0}, 500).to({alpha: 1}, 500);
  //   this.stage.addChild(countdown);
  // }
