var ChaosBall = function(windowWidth, windowHeight) {
  MovingBall.call(this, windowWidth, windowHeight);
  this.xSpeed = Math.random() * 2;
  this.ySpeed = Math.random() * 2;
};

ChaosBall.prototype = Object.create(MovingBall.prototype);
ChaosBall.prototype.constructor = ChaosBall;