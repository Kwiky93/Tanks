var Map = function(ctxLow, ctx, ctxHigh){
	this.ctxLow = ctxLow;
	this.ctx = ctx;
	this.ctxHigh = ctxHigh;
	this.map =[];
	this.brickSize = 24;
};

Map.prototype = {
	//Задать карту по умолчанию
	setMap:function(){
		this.map = [
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
	},
	//Нарисовать карту
	drawMap:function(){
		this.setMap();
		for (var i = 0; i <= this.map.length - 1; i++) {
			for (var j = 0; j <= this.map[i].length - 1; j++) {
				this.drawElement(i,j);
			}
		}
	},
	//Нарисовать элемент карты
	drawElement:function(x,y){
		switch (this.map[y][x]){
			case 1: this.drawBrick(x, y); break;
			case 2: this.drawConcrete(x, y); break;
			case 3: this.drawIce(x, y); break;
			case 4: this.drawWater(x, y); break;
			case 5: this.drawBush(x, y); break;
		}
	},
	//Проверить столкновение объекта с элементом карты
	isCollision:function(x,y,shuffle){
		if (x < 0 || x >= this.map.length || y < 0 || y >= this.map.length){
        return true;
    }
    if (shuffle){
        return this.map[x][y]==0 || this.map[x][y]==5 || this.map[x][y]==3 ? false:true;
    }else{
        return this.map[y][x]==0 || this.map[y][x]==5 || this.map[y][x]==3 ? false:true;
    }
	},
	//Уничтожить элемент карты
	destroyElement:function(x,y){
		if (x < 0 || x >= this.map.length || y < 0 || y >= this.map.length){
    	return;
  	}
  	if(this.map[y][x] == 1){
    	this.ctx.clearRect(x*this.brickSize, y*this.brickSize,this.brickSize,this.brickSize);
    	this.map[y][x] = 0;
  	}else{
    	this.drawElement(x,y);
  	}
	},
	//Нарисовать кирпич
  drawBrick:function(x,y){
    this.ctx.fillStyle = "#FF0000 ";
    this.ctx.fillRect(x*this.brickSize, y*this.brickSize, this.brickSize, this.brickSize);
    
    this.ctx.fillStyle = "#AE0000 ";
    this.ctx.fillRect(x*this.brickSize, y*this.brickSize, this.brickSize, this.brickSize/8);
    this.ctx.fillRect(x*this.brickSize, y*this.brickSize+this.brickSize/2, this.brickSize, this.brickSize/8);
    this.ctx.fillRect(x*this.brickSize+this.brickSize/2+this.brickSize/8, y*this.brickSize+this.brickSize/8, this.brickSize/8, this.brickSize/2);
    this.ctx.fillRect(x*this.brickSize+this.brickSize/8, y*this.brickSize+this.brickSize/2, this.brickSize/8, this.brickSize/2);
                  
    this.ctx.fillStyle = "#808080 ";
    this.ctx.fillRect(x*this.brickSize, y*this.brickSize+this.brickSize/2-this.brickSize/8, this.brickSize, this.brickSize/8);
    this.ctx.fillRect(x*this.brickSize, y*this.brickSize+this.brickSize-this.brickSize/8, this.brickSize, this.brickSize/8);
    this.ctx.fillRect(x*this.brickSize+this.brickSize/2, y*this.brickSize, this.brickSize/8, this.brickSize/2);
    this.ctx.fillRect(x*this.brickSize, y*this.brickSize+this.brickSize/2, this.brickSize/8, this.brickSize/2);
  },
  //Нарисовать бетон
  drawConcrete:function(x,y){
    this.ctx.fillStyle = "#c0c0c0";
    this.ctx.fillRect(x*this.brickSize, y*this.brickSize, this.brickSize, this.brickSize); 

   	this.ctx.fillStyle = "#808080";
    this.ctx.beginPath();
    this.ctx.moveTo(x*this.brickSize, y*this.brickSize+this.brickSize);  
    this.ctx.lineTo(x*this.brickSize+this.brickSize, y*this.brickSize+this.brickSize);  
    this.ctx.lineTo(x*this.brickSize+this.brickSize, y*this.brickSize);  
    this.ctx.fill();  

    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(x*this.brickSize+this.brickSize/4,y*this.brickSize+this.brickSize/4, this.brickSize/2, this.brickSize/2);
  },
  //Нарисовать лед
  drawIce:function(x,y){
  	this.ctxLow.fillStyle = "grey";
  	this.ctxLow.fillRect(x*this.brickSize, y*this.brickSize, this.brickSize, this.brickSize);
  },
  //Нарисовать воду
  drawWater:function(x,y){
    var img = new Image();
    img.src = 'img/trava.png';
    //ctx.drawImage(img, x, y, brickSize,brickSize);
    this.ctxLow.fillStyle = "blue";
    this.ctxLow.fillRect(x * this.brickSize, y * this.brickSize, this.brickSize, this.brickSize);
  },
  //Нарисовать куст
  drawBush:function(x,y){
    //Треугольники
    this.ctxHigh.fillStyle = "#4DE236 ";
    this.ctxHigh.beginPath();
    this.ctxHigh.moveTo(x*this.brickSize, y*this.brickSize+this.brickSize);  
    this.ctxHigh.lineTo(x*this.brickSize+this.brickSize, y*this.brickSize+this.brickSize);  
    this.ctxHigh.lineTo(x*this.brickSize+this.brickSize, y*this.brickSize);  
    this.ctxHigh.fill();

    this.ctxHigh.fillStyle = "#107C42 ";
    this.ctxHigh.beginPath();
    this.ctxHigh.moveTo(x*this.brickSize,y*this.brickSize);  
    this.ctxHigh.lineTo(x*this.brickSize, y*this.brickSize+this.brickSize);  
    this.ctxHigh.lineTo(x*this.brickSize+this.brickSize, y*this.brickSize);  
    this.ctxHigh.fill();
    this.ctxHigh.fillStyle = "#1B5536 ";//очень темный
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2,y*this.brickSize, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2-+brickSize/4,y*this.brickSize+brickSize/8, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize,y*this.brickSize+brickSize/2-brickSize/8, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2+brickSize/8,y*this.brickSize+brickSize/2-brickSize/8, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2-brickSize/8,y*this.brickSize+brickSize/2, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize-brickSize/8,y*this.brickSize+brickSize/2, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/8,y*this.brickSize+brickSize/2+brickSize/8, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2-brickSize/8,y*this.brickSize+brickSize-brickSize/8, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2+brickSize/8,y*this.brickSize+brickSize-brickSize/4, this.brickSize/8, this.brickSize/8);
              
    this.ctxHigh.fillStyle = "#4DE236 ";//светлый
    this.ctxHigh.fillRect(x*this.brickSize+brickSize-brickSize/4,y*this.brickSize, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2-brickSize/8,y*this.brickSize+brickSize/8, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2+brickSize/8,y*this.brickSize+brickSize/8, this.brickSize/8, this.brickSize/8+this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2-brickSize/8,y*this.brickSize+brickSize/2-brickSize/8, this.brickSize/4, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2-brickSize/4,y*this.brickSize+brickSize/2, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize,y*this.brickSize+brickSize-brickSize/4, this.brickSize/4, this.brickSize/8);
              
    this.ctxHigh.fillStyle = "#107C42 ";//темный
    this.ctxHigh.fillRect(x*this.brickSize+brickSize-brickSize/4,y*this.brickSize+brickSize/8, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/2+brickSize/4,y*this.brickSize+brickSize/2-brickSize/8, this.brickSize/8, this.brickSize/8);
    this.ctxHigh.fillRect(x*this.brickSize+brickSize/4,y*this.brickSize+brickSize/2+brickSize/8, this.brickSize/8, this.brickSize/8);
             
    //Стереть края  
    this.ctxHigh.clearRect(x*this.brickSize,y*this.brickSize,this.brickSize/8,this.brickSize/8);
    this.ctxHigh.clearRect(x*this.brickSize,y*this.brickSize+this.brickSize-this.brickSize/8,this.brickSize/8,this.brickSize/8);
    this.ctxHigh.clearRect(x*this.brickSize+this.brickSize-this.brickSize/8,y*this.brickSize,this.brickSize/8,this.brickSize/8);
    this.ctxHigh.clearRect(x*this.brickSize+this.brickSize-this.brickSize/8,y*this.brickSize+this.brickSize-this.brickSize/8,this.brickSize/8,this.brickSize/8);
  },
};