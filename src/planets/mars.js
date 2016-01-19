function MarsBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 3.71;
}

MarsBall.prototype = Object.create(GravityBall.prototype);
MarsBall.prototype.constructor = MarsBall;