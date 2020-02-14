var colors = ["red","blue", "green", "yellow"];

var path =[];

var userpath = [];

function nextSequence(){
    var min=0; 
    var max=3;  
    var random = Math.random() * (+max - +min) + +min; 
    var randomColor = colors[random];
    path.push(random)
    
    $("#"+randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    var sound = new Audio("sounds/"+randomColor+".mp3");
    sound.play();
    
    return randomColor;

}



$(".btn").click(function clickHandler(){
    var id = $(this).attr("id");
    userpath.push(id);
});

