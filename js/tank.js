var Tank = function(x,y,course,life){
  this.x = x;
  this.y = y;
  this.course = course;
  this.life = life;
  this.speed = 4;
}

Tank.prototype = {
  shoot:function(){
    arrayBullets.push(new Bullet(this.x,this.y,this.course,this.speed+1));
  },
  setPos:function(x,y){
    this.x = x;
    this.y = y;
  },
  setCourse:function(course){
    this.course = course;
  },
  addLife:function(diff){
    this.Life += diff;
  },
  takeLife:function(diff){
    this.life -= diff;
  },
  draw:function(){
    let dx = this.x+brickSize;
    let dy = this.y+brickSize;
    let color1 = "#FFAA00";
    let color2 = "#BF8F30";
    let color3 = "#A66F00";
    let color4 = "#FFBF40";
    let color5 = "#FFD073";
    /*switch(this.course) {
      case "up": 
      break;
      case "down": 
      break;
      case "left": 
      break;
      case "right": 
      break;
    }*/
    ctx.fillStyle = color5;
    let tankSize = brickSize*2;
    
    //Гусеницы
    //Левая
    ctx.fillRect(this.x + tankSize/24, this.y + tankSize/4 - tankSize/24, tankSize/4 - tankSize/24, tankSize - tankSize/4);
    //Правая
    ctx.fillStyle = color4;
    ctx.fillRect(this.x + tankSize - tankSize/4 + tankSize/24 - tankSize/24, this.y + tankSize/4  - tankSize/24, tankSize/4 - tankSize/24, tankSize - tankSize/4);
    ctx.fillStyle = color5;
    ctx.fillRect(this.x + tankSize - tankSize/4 + tankSize/24 - tankSize/24, this.y + tankSize/4  - tankSize/24, tankSize/4 - tankSize/24, tankSize - tankSize/4);
    
    //Круглая основа танка
    ctx.fillStyle = color4;
    ctx.beginPath();
    ctx.arc(this.x + tankSize/2, this.y + tankSize/2 + tankSize/8, tankSize/4 + tankSize/48, 0, 2*Math.PI);
    ctx.fill();

    //
    ctx.fillStyle = color5;
    ctx.beginPath();
    ctx.arc(this.x + tankSize/2 - tankSize/48, this.y + tankSize/2 + tankSize/8 - tankSize/48, tankSize/4 - tankSize/48, 0, 2*Math.PI);
    ctx.fill();    

    //Пушка
    ctx.fillRect(this.x + (tankSize - 4)/2,this.y + tankSize/48,tankSize/12,tankSize/2);

    //Башня
    ctx.fillStyle = color4;
    ctx.beginPath();
    ctx.arc(this.x + tankSize/2 - tankSize/24, this.y + tankSize/2 + tankSize/12, tankSize/8, 0, 2*Math.PI);
    ctx.fill();

    //
    ctx.fillStyle = color5;
    ctx.beginPath();
    ctx.arc(this.x + tankSize/2 - tankSize/24  - tankSize/24, this.y + tankSize/2 + tankSize/12 - tankSize/24, tankSize/8, 0, 2*Math.PI);
    ctx.fill(); 

    //Засечки на гусеницах
    ctx.fillStyle = color3;
    ctx.fillRect(this.x + tankSize/24, this.y + tankSize/4 + tankSize/12 - tankSize/24, tankSize/24*3, tankSize/12);
    ctx.fillRect(this.x + tankSize/24, this.y + tankSize/4 + tankSize/12 + tankSize/6 - tankSize/24, tankSize/24*3, tankSize/12);
    ctx.fillRect(this.x + tankSize/24, this.y + tankSize/4 + tankSize/12 + tankSize/6*2 - tankSize/24, tankSize/24*3, tankSize/12);
    ctx.fillRect(this.x + tankSize/24, this.y + tankSize/4 + tankSize/12 + tankSize/6*3 - tankSize/24, tankSize/24*3, tankSize/12);

    ctx.fillRect(this.x + tankSize - tankSize/8 - tankSize/24, this.y + tankSize/4 + tankSize/12 - tankSize/24, tankSize/24*3, tankSize/12);
    ctx.fillRect(this.x + tankSize - tankSize/8 - tankSize/24, this.y + tankSize/4 + tankSize/12 + tankSize/6 - tankSize/24, tankSize/24*3, tankSize/12);
    ctx.fillRect(this.x + tankSize - tankSize/8 - tankSize/24, this.y + tankSize/4 + tankSize/12 + tankSize/6*2 - tankSize/24, tankSize/24*3, tankSize/12);
    ctx.fillRect(this.x + tankSize - tankSize/8 - tankSize/24, this.y + tankSize/4 + tankSize/12 + tankSize/6*3 - tankSize/24, tankSize/24*3, tankSize/12);

    //Стерка
    ctx.clearRect(this.x + tankSize/24, this.y + tankSize/4 - tankSize/24, tankSize/48,tankSize/48);
    ctx.clearRect(this.x + tankSize/24 + tankSize/48 + tankSize/6, this.y + tankSize/4 - tankSize/24, tankSize/48,tankSize/48);
    ctx.clearRect(this.x + tankSize - tankSize/24 - tankSize/6 - tankSize/24, this.y + tankSize/4 - tankSize/24, tankSize/48,tankSize/48);
    ctx.clearRect(this.x + tankSize - tankSize/24 - tankSize/48 , this.y + tankSize/4 - tankSize/24, tankSize/48,tankSize/48);
    ctx.clearRect(this.x + tankSize/24 + tankSize/6 + tankSize/48, this.y + tankSize - tankSize/24*2 + tankSize/48, tankSize/48,tankSize/48);
    ctx.clearRect(this.x + tankSize/24, this.y + tankSize - tankSize/24*2 + tankSize/48, tankSize/48,tankSize/48);
    ctx.clearRect(this.x + tankSize - tankSize/24 - tankSize/6 - tankSize/24, this.y + tankSize - tankSize/24*2 + tankSize/48, tankSize/48,tankSize/48);
    ctx.clearRect(this.x + tankSize - tankSize/24 - tankSize/48, this.y + tankSize - tankSize/24*2 + tankSize/48, tankSize/48,tankSize/48);
  },
  clear:function(){
    ctx.clearRect(this.x,this.y,brickSize*2,brickSize*2);
  },
  test : function(course){
    this.clear();
    let posA  = course == "up"   || course == "down" ? this.x : this.y;
    let posB  = course == "up"   || course == "down" ? this.y : this.x;
    let shufl = course == "up"   || course == "down" ? true   : false;
    let num   = course == "left" || course == "up"   ? 0      : 2;
    let num2  = course == "left" || course == "up"   ? 0      : 1;
    let kof   = course == "left" || course == "up"   ? -1     : 1;

        /*if (!map.isCollision(Math.floor(this.x/brickSize),Math.floor(this.y/brickSize), false)){
          this.stepTank(course)
        }*/

        if(posA / brickSize == Math.floor(posA / brickSize)){
         if(posB / brickSize == Math.floor(posB / brickSize)){
          if(!map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize), shufl) && 
           !map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize + 1), shufl)){
           this.stepTank(course, posB + kof * this.speed);
       }
     }else{
      if(kof * -posB - this.speed >= kof * -Math.floor(posB / brickSize + num2) * brickSize){
       this.stepTank(course, posB + kof * this.speed);
     }else{
       if(!map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize), shufl) && 
        !map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize + 1), shufl)){
        this.stepTank(course, posB + kof * this.speed);
    }else{
      this.stepTank(course, Math.floor(posB /  brickSize + num2) * brickSize);
    }
  }
}
}else{
  if(posB / brickSize == Math.floor(posB / brickSize)){
    if(!map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize), shufl) && 
     !map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize + 1), shufl) && 
     !map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize + 2), shufl)){
     this.stepTank(course, posB + kof * this.speed);
 }
}else{
  if(kof * -posB - this.speed >= kof * -Math.floor(posB / brickSize + num2) * brickSize){
    this.stepTank(course, posB + kof * this.speed);
  }else{
    if(!map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize), shufl) && 
     !map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize + 1), shufl) && 
     !map.isCollision(Math.floor((posB + kof * this.speed) / brickSize + num), Math.floor(posA / brickSize + 2), shufl)){
     this.stepTank(course, posB + kof * this.speed);
 }else{
   this.stepTank(course, Math.floor(posB / brickSize + num2) * brickSize);
 }
}
}
}
this.draw();
},
stepTank:function(course, step){
  switch (course){
    case "up":
    this.y = step;
    break;
    case "down":
    this.y = step;  
    break;
    case "left":
    this.x = step;
    break;
    case "right":
    this.x = step;
    break;
  }
}
};