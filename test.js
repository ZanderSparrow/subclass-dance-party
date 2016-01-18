function Test() {
  this.doSomething();
}

Test.prototype.doSomething = function() {
  console.log('something!!');
};

var tester = new Test();