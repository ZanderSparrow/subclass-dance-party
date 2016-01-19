function JupiterBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 24.79;
}

JupiterBall.prototype = Object.create(GravityBall.prototype);
JupiterBall.prototype.constructor = JupiterBall;