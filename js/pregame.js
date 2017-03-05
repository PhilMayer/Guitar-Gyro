export const selectLevel = (stage) => {
  const tempo1 = new createjs.Text("Allegretto", "30px Arial");
  tempo1.x = 150;
  tempo1.y = 0;
  createjs.Tween.get(tempo1).to({y: 400}, 300, createjs.Ease.bounceOut)
  stage.addChild(tempo1)

  setTimeout(() => {
    const tempo2 = new createjs.Text("Vivace", "30px Arial");
    tempo2.x = 150;
    tempo2.y = 0;
    createjs.Tween.get(tempo2).to({y: 440}, 300, createjs.Ease.bounceOut)
    stage.addChild(tempo2)

    setTimeout(() => {
      const tempo3 = new createjs.Text("Presto", "30px Arial");
      tempo3.x = 150;
      tempo3.y = 0;
      createjs.Tween.get(tempo3).to({y: 480}, 300, createjs.Ease.bounceOut)
      stage.addChild(tempo3)

      setTimeout(() => {
        const tempo4 = new createjs.Text("Prestissimo", "30px Arial");
        tempo4.x = 150;
        tempo4.y = 0;
        createjs.Tween.get(tempo4).to({y: 520}, 300, createjs.Ease.bounceOut)
        stage.addChild(tempo4)
      }, 500)
    }, 500)
  }, 500)
}
