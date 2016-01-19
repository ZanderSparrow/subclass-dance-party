function MovingBall(xSpeed, ySpeed, windowWidth, windowHeight) {
  Dancer.call(this, 10, 10, 10);
  this.xSpeed = xSpeed; // m/s
  this.ySpeed = ySpeed; // m/s
  this.x = this.left;
  this.y = this.top;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;
}

MovingBall.prototype = Object.create(Dancer.prototype);

MovingBall.prototype.move = function() {
  this.x += this.xSpeed;
  this.y += this.ySpeed; 
};

MovingBall.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.move();
  this.setPosition(this.y, this.x);
  this.$node.css(this.styleSettings);
  // this.$node.css("left", this.x + "px");
  // this.$node.css("top", this.y + "px");
  this.velocityFlagToggleCheck();
};

MovingBall.prototype.velocityFlagToggleCheck = function() {
  if(this.y > this.windowHeight || this.y < 0) this.ySpeed *= -1;
  if(this.x > this.windowWidth || this.x < 0) this.xSpeed *= -1;
};