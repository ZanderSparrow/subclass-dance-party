function MercuryBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 3.7;
}

MercuryBall.prototype = Object.create(GravityBall.prototype);
MercuryBall.prototype.constructor = MercuryBall;