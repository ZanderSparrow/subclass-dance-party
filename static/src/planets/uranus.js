function UranusBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 8.69;
  this.$node.css('background-image', 'url("planet_img/uranus.png")');
}

UranusBall.prototype = Object.create(GravityBall.prototype);
UranusBall.prototype.constructor = UranusBall;