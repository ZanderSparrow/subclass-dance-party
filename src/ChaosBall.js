var ChaosBall = function(nothing, nothing2, windowWidth, windowHeight) {
  MovingBall.call(this, Math.random() * 10, Math.random() * 10, windowWidth, windowHeight);
};

ChaosBall.prototype = Object.create(MovingBall.prototype);
ChaosBall.prototype.constructor = ChaosBall;