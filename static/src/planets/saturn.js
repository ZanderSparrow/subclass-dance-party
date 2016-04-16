function SaturnBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 10.44;
  this.$node.css('background-image', 'url("planet_img/saturn.png")');
  this.$node.css('height', '91px');
  this.$node.css('width', '75px');
}

SaturnBall.prototype = Object.create(GravityBall.prototype);
SaturnBall.prototype.constructor = SaturnBall;