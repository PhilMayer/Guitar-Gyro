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
    switch (color) {
      case "red":
        var button = new createjs.Shape();
        button.graphics.beginStroke("#FF0000");
        button.graphics.setStrokeStyle(1);
        button.snapToPixel = true;
        button.graphics.drawCircle(0, 0, 40, 309);
        button.x = 100;
        button.y = 650;
        stage.addChild(button)
        return button
      case "blue":
        var button = new createjs.Shape();
        button.graphics.beginStroke("#00FFFF");
        button.graphics.setStrokeStyle(1);
        button.snapToPixel = true;
        button.graphics.drawCircle(0, 0, 40, 309);
        button.x = 200;
        button.y = 650;
        stage.addChild(button)
        return button
      case "green":
        var button = new createjs.Shape();
        button.graphics.beginStroke("#00FF00");
        button.graphics.setStrokeStyle(1);
        button.snapToPixel = true;
        button.graphics.drawCircle(0, 0, 40, 309);
        button.x = 300;
        button.y = 650;
        stage.addChild(button)
        return button
      default:
        return null;
    }
}
