function MovingBall(windowWidth, windowHeight) {
  Dancer.call(this, 100, 100, 10);
  this.xSpeed = 10; // m/s
  this.ySpeed = 10; // m/s
  this.x = this.left;
  this.y = this.top;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;
  this.radius = 25;
  // Add position to positions obj as k = "x, y" at center
  ballPositions[(this.x + this.radius) + ", " + (this.y + this.radius)] = true;
}

MovingBall.prototype = Object.create(Dancer.prototype);

MovingBall.prototype.move = function() {
  var newX = this.x + this.xSpeed;
  var newY = this.y + this.ySpeed;

  // Calculate center, string coordinates seperated by comma: "3, 4"
  var center = (this.x + this.randius) + ", " + (this.y + this.radius);
  // Check positions object for center
  
  // else:
    // Delete old pos from obj
    // Move
    this.x = newX;
    this.y = newY;
    // Add new pos to obj 
};

MovingBall.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.move();
  this.setPosition(this.y, this.x);
  this.$node.css(this.styleSettings);
  this.velocityChanger();
};

MovingBall.prototype.velocityChanger = function() {
  if(this.y > this.windowHeight) {
    this.bounce("y", true);
  } else if(this.y < 0) {
    this.bounce("y", false);
  } else if(this.x > this.windowWidth) {
    this.bounce("x", true);
  } else if(this.x < 0) {
    this.bounce("x", false);
  }
};

MovingBall.prototype.bounce = function(xy, resist) {
  // takes x or y and top or bottom as params
  if(xy === "x" && !resist) {
    this.xSpeed *= -1;
  } else if(xy === "x" && resist) {
    this.xSpeed *= -0.9;
  } else if(xy === "y" && resist) {
    this.ySpeed *= -0.9;
    this.y = this.windowHeight;
  } else if(xy === "y" && !resist) {
    this.ySpeed *= -1;
    this.y = 0;
  }
};