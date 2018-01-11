var Tank = function(x,y,course,life){
	this.x = x;
	this.y = y;
	this.course = course;
	this.life = life;
}

Tank.prototype = {
	shoot:function(){},
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
			
	},
	moveLeft:function(course){
		if(this.y / brickSize == Math.floor(this.y / brickSize)){
		     if(this.x / brickSize == Math.floor(this.x / brickSize)){
		          if(!isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize)) && 
		          	 !isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize + 1))){
		               this.x -= speed;
		          }
		     }else{
		          if(this.x - speed >= Math.floor(this.x / brickSize) * brickSize){
		               this.x -= speed;
		          }else{
		               if(!isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize)) && 
		               	  !isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize + 1))){
		                    this.x -= speed;
		               }else{
		                    this.x = Math.floor(this.x /  brickSize) * brickSize;
		               }
		          }
		     }
		}else{
		     if(this.x / brickSize == Math.floor(this.x / brickSize)){
		          if(!isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize)) && 
		          	 !isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize + 1)) && 
		          	 !isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize + 2))){
		               this.x -= speed;
		          }
		     }else{
		     		if(this.x - speed >= Math.floor(this.x / brickSize) * brickSize){
		     			this.x -= speed;
		     			//(this.x+speed+brickSize <= Math.floor(this.x/brickSize + 1)*brickSize )
		     		}else{
		          if(!isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize)) && 
		          	 !isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize + 1)) && 
		          	 !isCollision(Math.floor((this.x - speed) / brickSize), Math.floor(this.y / brickSize + 2))){
		               this.x -= speed;
		          }else{
		               this.x = Math.floor(this.x / brickSize) * brickSize;
		          }
		        }
		     }
		}
	},
	moveRight:function(){
		if(this.y / brickSize == Math.floor(this.y / brickSize)){
		     if(this.x / brickSize == Math.floor(this.x / brickSize)){
		          if(!isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize)) && 
		          	 !isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize + 1))){
		               this.x += speed;
		          }
		     }else{
		          if(this.x + speed <= Math.floor(this.x / brickSize + 1) * brickSize){
		               this.x += speed;
		          }else{
		               if(!isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize)) && 
		               	  !isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize + 1))){
		                    this.x += speed;
		               }else{
		                    this.x = Math.floor(this.x /  brickSize + 1) * brickSize;
		               }
		          }
		     }
		}else{
		     if(this.x / brickSize == Math.floor(this.x / brickSize)){
		          if(!isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize)) && 
		          	 !isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize + 1)) && 
		          	 !isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize + 2))){
		               this.x += speed;
		          }
		     }else{
		     		if(this.x + speed <= Math.floor(this.x / brickSize + 1) * brickSize){
		     			this.x += speed;
		     		}else{
		          if(!isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize)) && 
		          	 !isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize + 1)) && 
		          	 !isCollision(Math.floor((this.x + speed) / brickSize), Math.floor(this.y / brickSize + 2))){
		               this.x += speed;
		          }else{
		               this.x = Math.floor(this.x / brickSize + 1) * brickSize;
		          }
		        }
		     }
		}
	},
	moveHorizontal:function(course){
		let num = course == "left" ? 0 : 2;
		let num2 = course == "left"? 0 : 1;
		let kof = course == "left" ? -1 : 1;

		if(this.y / brickSize == Math.floor(this.y / brickSize)){
		     if(this.x / brickSize == Math.floor(this.x / brickSize)){
		          if(!isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize)) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 1))){
		               this.x += kof * speed;
		          }
		     }else{
		          if(kof * -this.x - speed >= kof * -Math.floor(this.x / brickSize + num2) * brickSize){
		               this.x += kof * speed;
		          }else{
		               if(!isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize)) && 
		               	  !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 1))){
		                    this.x += kof * speed;
		               }else{
		                    this.x = Math.floor(this.x /  brickSize + num2) * brickSize;
		               }
		          }
		     }
		}else{
		    if(this.x / brickSize == Math.floor(this.x / brickSize)){
		          if(!isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize)) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 1)) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 2))){
		               this.x += kof * speed;
		          }
		    }else{
		     		if(kof * -this.x - speed >= kof * -Math.floor(this.x / brickSize + num2) * brickSize){
		     			this.x += kof * speed;
		     		}else{
		          if(!isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize)) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 1)) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 2))){
		               this.x += kof * speed;
		          }else{
		               this.x = Math.floor(this.x / brickSize + num2) * brickSize;
		          }
		        }
		    }
		}
	},
	moveVertical:function(course){
		let num = course == "up" ? 0 : 2;
		let num2 = course == "up"? 0 : 1;
		let kof = course == "up" ? -1 : 1;

		if(this.x / brickSize == Math.floor(this.x / brickSize)){
		     if(this.y / brickSize == Math.floor(this.y / brickSize)){
		          if(!isCollision(Math.floor(this.x / brickSize), Math.floor((this.y + kof * speed) / brickSize + num)) && 
		          	 !isCollision(Math.floor(this.x / brickSize + 1), Math.floor((this.y + kof * speed) / brickSize + num))){
		               this.y += kof * speed;
		          }
		     }else{
		          if(kof * -this.y - speed >= kof * -Math.floor(this.y / brickSize + num2) * brickSize){
		               this.y += kof * speed;
		          }else{
		               if(!isCollision(Math.floor(this.x / brickSize), Math.floor((this.y + kof * speed) / brickSize + num)) && 
		               	  !isCollision(Math.floor(this.x / brickSize + 1), Math.floor((this.y + kof * speed) / brickSize + num))){
		                    this.y += kof * speed;
		               }else{
		                    this.y = Math.floor(this.y /  brickSize + num2) * brickSize;
		               }
		          }
		     }
		}else{
		     if(this.y / brickSize == Math.floor(this.y / brickSize)){
		          if(!isCollision(Math.floor(this.x / brickSize), Math.floor((this.y + kof * speed) / brickSize + num)) && 
		          	 !isCollision(Math.floor(this.x / brickSize + 1), Math.floor((this.y + kof * speed) / brickSize + num)) && 
		          	 !isCollision(Math.floor(this.x / brickSize + 2), Math.floor((this.y + kof * speed) / brickSize + num))){
		               this.y += kof * speed;
		          }
		     }else{
		     		if(kof * -this.y - speed >= kof * -Math.floor(this.y / brickSize + num2) * brickSize){
		     			this.y += kof * speed;
		     		}else{
		          if(!isCollision(Math.floor(this.x / brickSize), Math.floor((this.y + kof * speed) / brickSize + num)) && 
		          	 !isCollision(Math.floor(this.x / brickSize + 1), Math.floor((this.y + kof * speed) / brickSize + num)) && 
		          	 !isCollision(Math.floor(this.x / brickSize + 2), Math.floor((this.y + kof * speed) / brickSize + num))){
		               this.y += kof * speed;
		          }else{
		               this.y = Math.floor(this.y / brickSize + num2) * brickSize;
		          }
		        }
		     }
		}
	},
	move:function(course){
		let posA = course == "up" || course == "down" ? this.x : this.y;
		let posB = course == "up" || course == "down" ? this.y : this.x;
		let shufl = course == "up" || course == "down"? true : false;

		let num = course == "left" || course == "up" ? 0 : 2;
		let num2 = course == "left" || course == "up"? 0 : 1;
		let kof = course == "left" || course == "up" ? -1 : 1;

		if(this.y / brickSize == Math.floor(this.y / brickSize)){
		     if(this.x / brickSize == Math.floor(this.x / brickSize)){
		          if(!isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize), shufl) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 1), shufl)){
		               this.stepTank(course, this.x + kof * speed);
		          }
		     }else{
		          if(kof * -this.x - speed >= kof * -Math.floor(this.x / brickSize + num2) * brickSize){
		               this.stepTank(course, this.x + kof * speed);
		          }else{
		               if(!isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize), shufl) && 
		               	  !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 1), shufl)){
		                    this.stepTank(course, this.x + kof * speed);
		               }else{
		                    this.stepTank(course, Math.floor(this.x / brickSize + num2) * brickSize);
		               }
		          }
		     }
		}else{
		    if(this.x / brickSize == Math.floor(this.x / brickSize)){
		          if(!isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize), shufl) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 1), shufl) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 2), shufl)){
		               this.stepTank(course, this.x + kof * speed);
		          }
		    }else{
		     		if(kof * -this.x - speed >= kof * -Math.floor(this.x / brickSize + num2) * brickSize){
		     			this.stepTank(course, this.x + kof * speed);
		     		}else{
		          if(!isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize), shufl) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 1), shufl) && 
		          	 !isCollision(Math.floor((this.x + kof * speed) / brickSize + num), Math.floor(this.y / brickSize + 2), shufl)){
		               this.stepTank(course, this.x + kof * speed);
		          }else{
		               this.stepTank(course, Math.floor(this.x / brickSize + num2) * brickSize);
		          }
		        }
		    }
		}
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
	},
	botAction:function(){

	},
}