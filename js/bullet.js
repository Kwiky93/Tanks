var Bullet = function(tankX,tankY,tankCourse,speed){
  this.setPos(tankX,tankY,tankCourse);
  this.course = tankCourse;
  this.status = 1;
  this.speed = speed;
};

Bullet.prototype = {
  setPos:function(x,y,course){
    switch(course){
      case "up":
      this.x = x + brickSize - (brickSize / 3) / 2;
      this.y = y - (brickSize / 3); 
      break;
      case "down":
      this.x = x + brickSize - (brickSize / 3) / 2;
      this.y = y + 2 * brickSize; 
      break;
      case "left":
      this.x = x - (brickSize / 3);
      this.y = y + brickSize - (brickSize / 3) / 2;
      break;
      case "right":
      this.x = x + 2 * brickSize;
      this.y = y + brickSize - (brickSize / 3) / 2;
      break;
    }
  },

  draw:function(){
    let dx = this.x + 4;
    let dy = this.y + 4;

    ctx.save();
    ctx.translate(dx, dy);

    switch(this.course){
      case "left": ctx.rotate(-Math.PI/2); break;
      case "right":ctx.rotate(Math.PI/2);  break;
      case "up":   ctx.rotate(0/Math.PI);  break;
      case "down": ctx.rotate(Math.PI);    break;
    }
    ctx.rotate(this.angle);
    ctx.translate(-dx, -dy);
    ctx.fillStyle = "#D2C9C9";
    ctx.fillRect(this.x, this.y, brickSize / 3, brickSize / 3);
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);  
    ctx.lineTo(this.x+4, this.y-4);  
    ctx.lineTo(this.x+8, this.y);  
    ctx.fill();
    ctx.restore();
  },

  clear:function(){
    switch(this.course){
      case "left": 
        ctx.clearRect(this.x - 4, this.y, brickSize / 3 + 4, brickSize / 3);
        break;
      case "right":
        ctx.clearRect(this.x, this.y, brickSize / 3 + 4, brickSize / 3);
        break;
      case "up":
        ctx.clearRect(this.x, this.y - 4, brickSize / 3, brickSize / 3 + 4);
        break;
      case "down":
        ctx.clearRect(this.x, this.y, brickSize / 3, brickSize / 3 + 4);
        break;
    }
  },

  actionBullet:function(coef){
    this.clear();
    switch(this.course){
      case "up":
      this.y -= Math.floor(this.speed/coef);
      this.testCollision(this.course);
      break;
      case "down":
      this.y += Math.floor(this.speed/coef); 
      this.testCollision(this.course);
      break;
      case "left":
      this.x -= Math.floor(this.speed/coef);
      this.testCollision(this.course);
      break;
      case "right":
      this.x += Math.floor(this.speed/coef);
      this.testCollision(this.course);
      break;
    }
    if (this.status != 0){
      this.draw();
    }
  },
  destroy:function(){
  },
  testCollision:function(course){
    //Angle Up-Left
    if (map.isCollision(Math.floor(this.x/brickSize),Math.floor(this.y/brickSize), false)){
      map.destroyElement(Math.floor(this.x/brickSize),Math.floor(this.y/brickSize));
      this.status = 0;
    }
    //Angle Up-Right
    if (map.isCollision(Math.floor((this.x + brickSize/3)/brickSize),Math.floor(this.y/brickSize), false)){
      map.destroyElement(Math.floor((this.x + brickSize/3)/brickSize),Math.floor(this.y/brickSize));
      this.status = 0;
    }
    //Angle Down-Left
    if (map.isCollision(Math.floor(this.x/brickSize),Math.floor((this.y + brickSize/3)/brickSize), false)){
      map.destroyElement(Math.floor(this.x/brickSize),Math.floor((this.y + brickSize/3)/brickSize));
      this.status = 0;
    }
    //Angle Down-Right
    if (map.isCollision(Math.floor((this.x + brickSize/3)/brickSize),Math.floor((this.y + brickSize/3)/brickSize), false)){
      map.destroyElement(Math.floor((this.x + brickSize/3)/brickSize),Math.floor((this.y + brickSize/3)/brickSize));
      this.status = 0;
    }
  }
};