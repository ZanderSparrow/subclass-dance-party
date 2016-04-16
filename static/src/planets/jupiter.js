function JupiterBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 24.79;
  this.$node.css('background-image', 'url("planet_img/jupiter.png")');
}

JupiterBall.prototype = Object.create(GravityBall.prototype);
JupiterBall.prototype.constructor = JupiterBall;