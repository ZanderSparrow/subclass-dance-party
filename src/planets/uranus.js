function UranusBall(windowWidth, windowHeight){
  GravityBall.call(this, windowWidth, windowHeight);
  this.grav = 8.69;
}

UranusBall.prototype = Object.create(GravityBall.prototype);
UranusBall.prototype.constructor = UranusBall;