function PlutoBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 0.65;
}

PlutoBall.prototype = Object.create(GravityBall.prototype);
PlutoBall.prototype.constructor = PlutoBall;