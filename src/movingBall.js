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

MovingBall.prototype.velocityChanger = function() {
  if(this.y > this.windowHeight) {
    this.bounce("y", "b");
  } else if(this.y < 0) {
    this.bounce("y", "t");
  } else if(this.x > this.windowWidth) {
    this.bounce("x", "b");
  } else if(this.x < 0) {
    this.bounce("x", "t");
  }
};

MovingBall.prototype.bounce = function(xy, tb) {
  // takes x or y and top or bottom as params
  if(xy === "x" && tb == "t") {
    this.xSpeed *= -1;
  } else if(xy === "x" && tb === "b") {
    this.xSpeed *= -0.9;
  } else if(xy === "y" && tb === "b") {
    this.ySpeed *= -0.9;
    this.y = this.windowHeight;
  } else if(xy === "y" && tb === "t") {
    this.ySpeed *= -1;
    this.y = 0;
  }
};