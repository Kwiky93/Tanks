function createMap(){
  map  = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
  [2, 2, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 5, 5, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0]
  ];
  return map;
}

function drawMap(map,brickSize,brickCount){
  for(var i=0;i<brickCount;i++){
    for(var j=0;j<brickCount;j++){
      switch (map[i][j]) {
        case 1:
        ArrayStaticObject.push(new ElementMap(j,i,BrickColor,brickSize));
        break;
        case 2:
        ArrayStaticObject.push(new ElementMap(j,i,ConcreteColor,brickSize));
        break;
        case 3:
        ArrayStaticObject.push(new ElementMap(j,i,IceColor,brickSize));
        break;
        case 4:
        ArrayStaticObject.push(new ElementMap(j,i,SeaColor,brickSize));
        break;
        case 5:
        ArrayStaticObject.push(new ElementMap(j,i,ForestColor,brickSize));
        break;
      }
    }   
  }
  for (var i in ArrayStaticObject) {
    ArrayStaticObject[i].draw();
  }
};

var ElementMap = function(x,y,color,brickSize){
  this.x = x;
  this.y = y;
  this.color = color;
  this.brickSize = brickSize;
};
ElementMap.prototype = {
  draw : function(){
    if(ctx){
      switch (this.color){
        case "red":
        this.drawBrick(this.x,this.y);
        break;
        case "white":
        this.drawConcrete(this.x,this.y);
        break;
        case "blue":
        this.drawWater(this.x,this.y);  
        break;
        case "green":
        this.drawBush(this.x,this.y);
        break;
        default:
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x*this.brickSize,this.y*this.brickSize,this.brickSize,this.brickSize);
        break;
      }
    }
  },
  //Нарисовать кирпич
  drawBrick:function(x,y){
    ctx.fillStyle = "#FF0000 ";
    ctx.fillRect(this.x*this.brickSize, this.y*this.brickSize, this.brickSize, this.brickSize);

    ctx.fillStyle = "#AE0000 ";
    ctx.fillRect(this.x*this.brickSize, this.y*this.brickSize, this.brickSize, this.brickSize/8);
    ctx.fillRect(this.x*this.brickSize, this.y*this.brickSize+this.brickSize/2, this.brickSize, this.brickSize/8);
    ctx.fillRect(this.x*this.brickSize+this.brickSize/2+this.brickSize/8, this.y*this.brickSize+this.brickSize/8, this.brickSize/8, this.brickSize/2);
    ctx.fillRect(this.x*this.brickSize+this.brickSize/8, this.y*this.brickSize+this.brickSize/2, this.brickSize/8, this.brickSize/2);

    ctx.fillStyle = "#808080 ";
    ctx.fillRect(this.x*this.brickSize, this.y*this.brickSize+this.brickSize/2-this.brickSize/8, this.brickSize, this.brickSize/8);
    ctx.fillRect(this.x*this.brickSize, this.y*this.brickSize+this.brickSize-this.brickSize/8, this.brickSize, this.brickSize/8);
    ctx.fillRect(this.x*this.brickSize+this.brickSize/2, this.y*this.brickSize, this.brickSize/8, this.brickSize/2);
    ctx.fillRect(this.x*this.brickSize, this.y*this.brickSize+this.brickSize/2, this.brickSize/8, this.brickSize/2);
  },
  //Нарисовать бетон
  drawConcrete:function(x,y){
    ctx.fillStyle = "#c0c0c0";
    ctx.fillRect(x*brickSize, y*brickSize, brickSize, brickSize); 

    ctx.fillStyle = "#808080";
    ctx.beginPath();
    ctx.moveTo(x*brickSize, y*brickSize+brickSize);  
    ctx.lineTo(x*brickSize+brickSize, y*brickSize+brickSize);  
    ctx.lineTo(x*brickSize+brickSize, y*brickSize);  
    ctx.fill();  

    ctx.fillStyle = "#fff";
    ctx.fillRect(x*brickSize+brickSize/4,y*brickSize+brickSize/4, brickSize/2, brickSize/2);
  },
  //Нарисовать лед
  drawIce:function(x,y){},
  //Нарисовать воду
  drawWater:function(x,y){
    var img = new Image();

    img.src = 'img/trava.png';
          //ctx.drawImage(img, this.x, this.y, brickSize,brickSize);
          ctxLow.fillStyle = "blue";
          ctxLow.fillRect(x*brickSize,y*brickSize,brickSize,brickSize);
  },
  //Нарисовать куст
  drawBush:function(x,y){
          //Треугольники
          ctxHigh.fillStyle = "#4DE236 ";
          ctxHigh.beginPath();
          ctxHigh.moveTo(this.x*this.brickSize, this.y*this.brickSize+this.brickSize);  
          ctxHigh.lineTo(this.x*this.brickSize+this.brickSize, this.y*this.brickSize+this.brickSize);  
          ctxHigh.lineTo(this.x*this.brickSize+this.brickSize, this.y*this.brickSize);  
          ctxHigh.fill();

          ctxHigh.fillStyle = "#107C42 ";
          ctxHigh.beginPath();
          ctxHigh.moveTo(this.x*this.brickSize,this.y*this.brickSize);  
          ctxHigh.lineTo(this.x*this.brickSize, this.y*this.brickSize+this.brickSize);  
          ctxHigh.lineTo(this.x*this.brickSize+this.brickSize, this.y*this.brickSize);  
          ctxHigh.fill();
          ctxHigh.fillStyle = "#1B5536 ";//очень темный
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2,this.y*this.brickSize, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2-+brickSize/4,this.y*this.brickSize+brickSize/8, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize,this.y*this.brickSize+brickSize/2-brickSize/8, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2+brickSize/8,this.y*this.brickSize+brickSize/2-brickSize/8, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2-brickSize/8,this.y*this.brickSize+brickSize/2, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize-brickSize/8,this.y*this.brickSize+brickSize/2, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/8,this.y*this.brickSize+brickSize/2+brickSize/8, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2-brickSize/8,this.y*this.brickSize+brickSize-brickSize/8, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2+brickSize/8,this.y*this.brickSize+brickSize-brickSize/4, this.brickSize/8, this.brickSize/8);

          ctxHigh.fillStyle = "#4DE236 ";//светлый
          ctxHigh.fillRect(this.x*this.brickSize+brickSize-brickSize/4,this.y*this.brickSize, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2-brickSize/8,this.y*this.brickSize+brickSize/8, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2+brickSize/8,this.y*this.brickSize+brickSize/8, this.brickSize/8, this.brickSize/8+this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2-brickSize/8,this.y*this.brickSize+brickSize/2-brickSize/8, this.brickSize/4, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2-brickSize/4,this.y*this.brickSize+brickSize/2, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize,this.y*this.brickSize+brickSize-brickSize/4, this.brickSize/4, this.brickSize/8);

          ctxHigh.fillStyle = "#107C42 ";//темный
          ctxHigh.fillRect(this.x*this.brickSize+brickSize-brickSize/4,this.y*this.brickSize+brickSize/8, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/2+brickSize/4,this.y*this.brickSize+brickSize/2-brickSize/8, this.brickSize/8, this.brickSize/8);
          ctxHigh.fillRect(this.x*this.brickSize+brickSize/4,this.y*this.brickSize+brickSize/2+brickSize/8, this.brickSize/8, this.brickSize/8);

          //Стереть края  
          ctxHigh.clearRect(this.x*this.brickSize,this.y*this.brickSize,this.brickSize/8,this.brickSize/8);
          ctxHigh.clearRect(this.x*this.brickSize,this.y*this.brickSize+this.brickSize-this.brickSize/8,this.brickSize/8,this.brickSize/8);
          ctxHigh.clearRect(this.x*this.brickSize+this.brickSize-this.brickSize/8,this.y*this.brickSize,this.brickSize/8,this.brickSize/8);
          ctxHigh.clearRect(this.x*this.brickSize+this.brickSize-this.brickSize/8,this.y*this.brickSize+this.brickSize-this.brickSize/8,this.brickSize/8,this.brickSize/8);
  },
  destoy : function(){
    map[2][2] = 0;
  }
};

      function getMap() {
        if(map===null){
          return createMap();
        }
        return map;
      };


      function isCollision(x,y,shufl){
        if (x < 0 || x > 25 || y < 0 || y > 25){
        return true;
    }
    if (shufl){
        return map[x][y]==0 || map[x][y]==5 || map[x][y]==4 ? false:true;
    }else{
        return map[y][x]==0 || map[y][x]==5 || map[y][x]==4? false:true;
      }
    };
    function destroyElementMap(x,y){
  if (x < 0 || x > 25 || y < 0 || y > 25){
    return;
  }
  if(map[y][x] == 1){
    ctx.clearRect(x*brickSize, y*brickSize,brickSize,brickSize);
    map[y][x] = 0;
  }else{
    //Перерисовать объект по координатам [y][x]
  }
};

/*var mouseInBlock = function(ArrayStaticObject){
        return mouse.x > ArrayStaticObject.x && mouse.x < ArrayStaticObject.x + 23 && mouse.y > ArrayStaticObject.y && mouse.y < ArrayStaticObject.x + 23;
}*/