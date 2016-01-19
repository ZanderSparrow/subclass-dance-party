function GravityBall(windowWidth, windowHeight) {
  ChaosBall.call(this);
  this.grav = 9.8;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;


}

GravityBall.prototype = Object.create(ChaosBall.prototype);
GravityBall.prototype.velocityFlagToggleCheck = function() {
  this.ySpeed = this.ySpeed + this.grav * .01;
  if(this.y > this.windowHeight) {
    this.ySpeed *= -0.9;
    this.y = this.windowHeight;
  }
  if(this.y < 0) {
    this.ySpeed *= -1;
  }
  if(this.x > this.windowWidth || this.x < 0) {
    this.xSpeed *= -1;
  }
};