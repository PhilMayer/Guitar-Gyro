export const randomCircle = (circleColor) => {
  var circle = new createjs.Shape();
  circle.x = 100;
  circle.y = 100;

  switch (circleColor) {
    case "red":
      circle.graphics.beginFill("#FF0000").drawCircle(0, -200, 25);
      return circle;
    case "blue":
      circle.graphics.beginFill("#00FFFF").drawCircle(100, -200, 25);
      return circle;
    case "green":
      circle.graphics.beginFill("#00FF00").drawCircle(200, -200, 25);
      return circle;
    default:
      return null;
  }
}

export const drawButton = (stage, color) => {
  // var border = new createjs.Shape();
  // border.graphics.beginStroke("#00FFFF");
  // border.graphics.setStrokeStyle(1);
  // border.snapToPixel = true;
  // border.graphics.drawCircle(0, 0, 35, 309);
  // border.x = 200;
  // border.y = 650;
  // stage.addChild(border)
    // let border = new createjs.Shape();
    //
    // border.graphics.setStrokeStyle(1);
    // border.snapToPixel = true;
    // border.graphics.drawCircle(0, 0, 35, 309);
    // border.y = 650;
    //
    switch (color) {
      case "red":
        var border = new createjs.Shape();
        border.graphics.beginStroke("#FF0000");
        border.graphics.setStrokeStyle(1);
        border.snapToPixel = true;
        border.graphics.drawCircle(0, 0, 35, 309);
        border.x = 100;
        border.y = 650;
        stage.addChild(border)
        return border
      case "blue":
        var border = new createjs.Shape();
        border.graphics.beginStroke("#00FFFF");
        border.graphics.setStrokeStyle(1);
        border.snapToPixel = true;
        border.graphics.drawCircle(0, 0, 35, 309);
        border.x = 200;
        border.y = 650;
        stage.addChild(border)
        return border
      case "green":
        var border = new createjs.Shape();
        border.graphics.beginStroke("#00FF00");
        border.graphics.setStrokeStyle(1);
        border.snapToPixel = true;
        border.graphics.drawCircle(0, 0, 35, 309);
        border.x = 300;
        border.y = 650;
        stage.addChild(border)
        return border
      default:
        return null;
    }



  // }
}
