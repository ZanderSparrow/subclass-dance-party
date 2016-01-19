function GravityBall(windowWidth, windowHeight) {
  ChaosBall.call(this);
  this.grav = 9.8;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;
  this.$node.css('background-image', 'url("planet_img/earth.png")');
  // this.position value is the center of the ball

}

GravityBall.prototype = Object.create(ChaosBall.prototype);
GravityBall.prototype.velocityChanger = function() {
  this.ySpeed = this.ySpeed + this.grav * 0.01;
  if(this.y > this.windowHeight) {
    this.ySpeed *= -0.9;
    this.y = this.windowHeight;
  }
  if(this.y < 0) {
    this.ySpeed *= -1;
    this.y = 0;
  }
  if(this.x > this.windowWidth || this.x < 0) {
    this.xSpeed *= -1;
  }
  // check for collision
    // delete the old position from the global object
    // check if new position causes a collision
      // If N, go to that and add a new position key to onj
      // If Y, bouncy in proper direction
};