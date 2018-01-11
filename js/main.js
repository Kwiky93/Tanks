var tank;
var brickSize = 24;
var brickCount = 26;
var tankSize = brickSize * 2;
var startPositionX = 8 * brickSize;
var startPositionY = 24 * brickSize;
var map = null;
var ArrayStaticObject = [];
var arrayBullets = [];

var ctxLow;
var ctx;
var ctxHigh;

var interval;
var isKeyActive = false;
var arrayMoveTank = [];
var map;

window.onload = function() {
  ctxLow = document.getElementById("canvasLow").getContext("2d");
  ctx = document.getElementById("canvas").getContext("2d");
  ctxHigh = document.getElementById("canvasHigh").getContext("2d");
  map = new Map(ctxLow,ctx,ctxHigh);
  map.drawMap();
  tank = new Tank(startPositionX,startPositionY,"up",3);
  tank.draw();

  setInterval(function(){
    for (var i in arrayBullets) {
      if (arrayBullets[i].status == 0){
        arrayBullets.splice(i, 1);
      }else{
        arrayBullets[i].actionBullet(3);
      }
    }
  }, 2);    
};

window.onkeydown = function(e){
  var code = e.keyCode ? e.keyCode : e.which;
  if (tank instanceof Tank && tank !=null){
    switch(code){
      case 37://left
      if (arrayMoveTank.indexOf("left") == -1){
        arrayMoveTank.push("left");
        moveTank(arrayMoveTank[arrayMoveTank.length - 1]);
      }
      break;
      case 38://up
      if (arrayMoveTank.indexOf("up") == -1){
        arrayMoveTank.push("up");
        moveTank(arrayMoveTank[arrayMoveTank.length - 1]);
      }
      break;
      case 39://right
      if (arrayMoveTank.indexOf("right") == -1){
        arrayMoveTank.push("right");
        moveTank(arrayMoveTank[arrayMoveTank.length - 1]);
      }
      break;
      case 40://down
      if (arrayMoveTank.indexOf("down") == -1){
        arrayMoveTank.push("down");
        moveTank(arrayMoveTank[arrayMoveTank.length - 1]);
      }
      break;
      case 32://space
      tank.shoot();
      break;
    } 
  }
};

window.onkeyup = function(e){
  if (tank instanceof Tank && tank !=null){
    switch (e.keyCode){
      case 37: 
      arrayMoveTank.splice(arrayMoveTank.indexOf("left"), 1);
      moveTank(arrayMoveTank[arrayMoveTank.length - 1]);
      break;
      case 38: 
      arrayMoveTank.splice(arrayMoveTank.indexOf("up"), 1);
      moveTank(arrayMoveTank[arrayMoveTank.length - 1]);
      break;
      case 39: 
      arrayMoveTank.splice(arrayMoveTank.indexOf("right"), 1);
      moveTank(arrayMoveTank[arrayMoveTank.length - 1]);
      break;
      case 40: 
      arrayMoveTank.splice(arrayMoveTank.indexOf("down"), 1);
      moveTank(arrayMoveTank[arrayMoveTank.length - 1]);
      break;
    }
  }
};

function moveTank(course){
  clearInterval(interval);
  if(!course){
    return;
  }
  tank.setCourse(course);
  interval = setInterval(function(){
    tank.test(course);
  }, 60);
};