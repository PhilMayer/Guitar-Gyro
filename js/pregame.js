export const gameOver = (stage, musicPlayer, scoreboard, hits, misses, run) => {
  setTimeout(() => {
    musicPlayer.stopMusic();
    createjs.Tween.get(scoreboard).to({x: 75, rotation: -360},
      1000, createjs.Ease.bounceOut);

    setTimeout(() => {
      const message = new createjs.Text("You're basically Beethoven.", "30px Reenie Beanie");
      message.x = 75;
      message.y = 335;
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
          playAgain.y = 375;

          const hit = new createjs.Shape();
          hit.graphics.beginFill("#000").drawRect(0, 0, playAgain.getMeasuredWidth(), playAgain.getMeasuredHeight());
          playAgain.hitArea = hit;
          stage.addChild(playAgain);
        }, 200)
      }, 1000)
    }, 1000)
  }, 2000)
}
