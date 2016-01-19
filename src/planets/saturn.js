function SaturnBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 10.44;
}

SaturnBall.prototype = Object.create(GravityBall.prototype);
SaturnBall.prototype.constructor = SaturnBall;