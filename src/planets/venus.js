function VenusBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 8.87;
}

VenusBall.prototype = Object.create(GravityBall.prototype);
VenusBall.prototype.constructor = VenusBall;