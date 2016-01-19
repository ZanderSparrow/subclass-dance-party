function NeptuneBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 11.15;
}

NeptuneBall.prototype = Object.create(GravityBall.prototype);
NeptuneBall.prototype.constructor = NeptuneBall;