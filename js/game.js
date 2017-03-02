import {randomCircle, moveCircle} from './circle.js';

document.addEventListener("DOMContentLoaded", () => {
  var stage = new createjs.Stage("demoCanvas");
  // var circle = new createjs.Shape();

  createjs.Ticker.addEventListener("tick", () => {
    stage.update();
 })
  createjs.Ticker.setFPS(60);
  
  setInterval(() => {
    let circle = randomCircle();
    stage.addChild(circle);
    // moveCircle(circle, stage);

    circle.addEventListener("tick", () => {
    circle.y += 10;
    });
  }, 1000)

});
