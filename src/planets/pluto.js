function PlutoBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 0.65;
  this.$node.css('background-image', 'url("planet_img/pluto1.png")');
}

PlutoBall.prototype = Object.create(GravityBall.prototype);
PlutoBall.prototype.constructor = PlutoBall;