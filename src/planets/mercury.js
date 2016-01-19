function MercuryBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 3.7;
  this.$node.css('background-image', 'url("planet_img/mercury.png")');
}

MercuryBall.prototype = Object.create(GravityBall.prototype);
MercuryBall.prototype.constructor = MercuryBall;