function GravityBall(nothing, nothing2, windowWidth, windowHeight) {
  ChaosBall.call(this);
  this.grav = 9.8;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;


}

GravityBall.prototype = Object.create(ChaosBall.prototype);
GravityBall.prototype.velocityFlagToggleCheck = function() {
  this.ySpeed = this.ySpeed + 9.8 * .01;
  console.log(this.ySpeed)
  if(this.y > this.windowHeight || this.y < 0) this.ySpeed *= -1;
  if(this.x > this.windowWidth || this.x < 0) this.xSpeed *= -1;
}