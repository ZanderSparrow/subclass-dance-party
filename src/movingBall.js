function MovingBall(windowWidth, windowHeight) {
  Dancer.call(this, 100, 100, 10);
  this.xSpeed = 10; // m/s
  this.ySpeed = 10; // m/s
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
  this.velocityChanger();
};

MovingBall.prototype.velocityFlagToggleCheck = function() {
  if(this.y > this.windowHeight || this.y < 0) this.ySpeed *= -1;
  if(this.x > this.windowWidth || this.x < 0) this.xSpeed *= -1;
};