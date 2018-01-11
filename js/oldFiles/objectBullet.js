var kofSize = 3;
var Bullet = function(tankX,tankY,tankCourse){
	this.setPos(tankX,tankY,tankCourse);
	this.course = tankCourse;
	this.status = 1;
};

Bullet.prototype = {
	setPos:function(x,y,course){
		switch(course){
			case "up":
				this.x = x + brickSize - (brickSize / kofSize) / 2;
				this.y = y - (brickSize / kofSize); 
				break;
			case "down":
				this.x = x + brickSize - (brickSize / kofSize) / 2;
				this.y = y + 2 * brickSize; 
				break;
			case "left":
				this.x = x - (brickSize / kofSize);
				this.y = y + brickSize - (brickSize / kofSize) / 2;
				break;
			case "right":
				this.x = x + 2 * brickSize;
				this.y = y + brickSize - (brickSize / kofSize) / 2;
				break;
		}
	},
	action:function(){
		this.clear();
		switch(this.course){
			case "up":
				this.y -= 1;
				break
			case "down":
				this.y += 1; 
				break;
			case "left":
				this.x -= 1;
				break;
			case "right":
				this.x += 1;
				break;
		}
		this.draw();
	},
	draw:function(){
		ctx.fillRect(this.x, this.y, brickSize / kofSize, brickSize / kofSize);
	},
	clear:function(){
		ctx.clearRect(this.x, this.y, brickSize / kofSize, brickSize / kofSize);
	},
	destroy:function(){

	}

};