export const randomCircle = () => {
  var circle = new createjs.Shape();
  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;

  return circle;
  // stage.addChild(circle);
  //
  // setInterval((stage) => {
  //   circle.y += 1
  //   if (circle.y === 500) {
  //     stage.removeChild(circle);
  //   }
  //   stage.update();
  // }, 1000);
}

export const moveCircle = (circle, stage) =>  {
  setInterval(() => {
    circle.y += 1
    if (circle.y === 500) {
      stage.removeChild(circle);
    }
  }, 10);
}
