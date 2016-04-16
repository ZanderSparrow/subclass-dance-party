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

  if (isSun) {
    // if (this.y === blackHoleLocationY && this.x === blackHoleLocationX) this.$node.remove();
    var sunGrav = 20;
    var sunLocationX = this.windowWidth / 2;
    var sunLocationY = this.windowHeight / 2;

    var heightDffDistance = Math.abs(sunLocationY - this.y);
    var widthDiffDistance = Math.abs(sunLocationX - this.x);
    ratio = widthDiffDistance / heightDffDistance;

    if (this.y < sunLocationY) { 
      this.ySpeed = this.ySpeed + sunGrav * 0.01;
      if (this.x < sunLocationX) this.xSpeed = ratio * this.ySpeed;
    }
    if (this.y > sunLocationY) {
      this.ySpeed = this.ySpeed - sunGrav * 0.01;
      if (this.x > sunLocationX) this.xSpeed = ratio * this.ySpeed;
    }
  } else {
    this.ySpeed = this.ySpeed + this.grav * 0.01;
    MovingBall.prototype.velocityChanger.call(this);
  }
};
