function NeptuneBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 11.15;
  this.$node.css('background-image', 'url("planet_img/neptune.png")');
}

NeptuneBall.prototype = Object.create(GravityBall.prototype);
NeptuneBall.prototype.constructor = NeptuneBall;