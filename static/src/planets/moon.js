function MoonBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 1.62;
  this.$node.css('background-image', 'url("planet_img/moon.png")');
}

MoonBall.prototype = Object.create(GravityBall.prototype);
MoonBall.prototype.constructor = MoonBall;