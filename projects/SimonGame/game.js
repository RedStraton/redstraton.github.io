var colors = ["red","blue", "green", "yellow"];
var path =[];
var  userpath= [];
var started = false;
var level = 0;

$(document).keypress(function(){
    if (!started) {
        $("#level-title").text("Level :" + level);
        nextSequence();
        started = true;
      }
})

$(".btn").click(function(){
    var id = $(this).attr("id");
    userpath.push(id);
    animate(id)
    playSound(id);
    checkAnswer(userpath.length-1)
});

function nextSequence(){
    userpath = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = colors[randomNumber];
    path.push(randomChosenColour);
    
    animate(randomChosenColour)
    
    playSound(randomChosenColour);
    level=level+1;  
    $("#level-title").text("Level " + level);
    return randomChosenColour;
}

function playSound(color){
    var sound = new Audio("sounds/"+color+".mp3");
    sound.play();   
};

function animate(color){
    $("#"+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function checkAnswer(currentLevel){
    if (path[currentLevel] === userpath[currentLevel]) {

        console.log("success");
  
        if (userpath.length === path.length){
          console.log("Next Level:" + level);  
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
        console.log("wrong");
        playSound("wrong");      
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
      }
}

function startOver(){
    level=0;
    path=0;
    started=false;
}


