
var buttonColours = ["blue", "green"];


var started = false;
var flag =0;


$(document).keypress(function() {
  if (!started) {flag =0
    $("h1").text("Get ready!");

    var randomNumber = Math.floor(Math.random() * 6);
    var time = (randomNumber*1000)+2000;

    setTimeout(function(){
      nextSequence();},time);

    started = true;
  }
});

$(".btn").click(function() {


  var userChosenColour = $(this).attr("id");
  checkAnswer(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);


});



function checkAnswer(userChosenColour)
{
  if(flag==1){
    if (userChosenColour=="green")
   {
       playSound("green");
        $("body").addClass("game-over2");
        $("h1").text("Green won, Press Any Key to Restart");
        started=false;


        setTimeout(function(){
          $("body").removeClass("game-over2");
;},1000);



      }





      else if(userChosenColour=="blue") { {
         playSound("red");
          $("body").addClass("game-over1");
          $("h1").text("blue won, Press Any Key to Restart");
          started=false;

          setTimeout(function(){
            $("body").removeClass("game-over2");
  ;},1000);
}}}
    else if(flag==0){$("h1").text(userChosenColour+" pressed too soon, Press Any Key to Restart");
    started=false;
    flag=0;


    }




}

function nextSequence() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.







    $(".container").fadeIn(100).fadeOut(100).fadeIn(100);
    playSound("green")
    flag=1



}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
