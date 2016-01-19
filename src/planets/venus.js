function VenusBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 8.87;
  this.$node.css('background-image', 'url("planet_img/venus.png")');
}

VenusBall.prototype = Object.create(GravityBall.prototype);
VenusBall.prototype.constructor = VenusBall;