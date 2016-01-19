function MoonBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 1.62;
}

MoonBall.prototype = Object.create(GravityBall.prototype);
MoonBall.prototype.constructor = MoonBall;