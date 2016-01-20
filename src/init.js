var globalBalls = [];
var counter = 0;
$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var windowHeight = $('body').height() - 50;
    var windowWidth = $('body').width() - 50;
    var ball = new dancerMakerFunction(windowWidth, windowHeight);
    globalBalls.push(ball);
    (function(currentCount) {
      $('body').append(ball.$node.on('click', function() {
        if(Math.round(Math.random())) {
          globalBalls[currentCount].ySpeed -= Math.random() * 60 / globalBalls[currentCount].grav;  
        } else {
          globalBalls[currentCount].ySpeed += Math.random() * 60 / globalBalls[currentCount].grav;
        }
        if(Math.round(Math.random())) {
          globalBalls[currentCount].xSpeed -= Math.random() * 5;  
        } else {
          globalBalls[currentCount].xSpeed += Math.random() * 5;
        }
      }));
    })(counter);
    counter++;
  });

  $('#clear-planets').on('click', function() {
    $('span').remove();
  });
  $('#add-sun').on('click', function() {
    isSun = !isSun;
    $('#add-sun').text(isSun ? 'Sun: ON' : 'Sun: OFF');
    $('#the-sun').toggle();
  });

});
var isSun = false;
