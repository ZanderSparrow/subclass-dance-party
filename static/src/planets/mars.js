function MarsBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 3.71;
  this.$node.css('background-image', 'url("planet_img/mars.png")');
}

MarsBall.prototype = Object.create(GravityBall.prototype);
MarsBall.prototype.constructor = MarsBall;