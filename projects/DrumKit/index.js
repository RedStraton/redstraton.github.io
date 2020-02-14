var drumLenght = document.querySelectorAll(".drum").length;

for(var i=0; i<drumLenght;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

}
addEventListener("keydown",handleKeyDown)

function handleClick(){

    this.style.color = "white";      
    var innerHtml = this.innerHTML;
    console.log(innerHtml);
    var sound;
    playSound(innerHtml);
    animation(innerHtml);

}

function handleKeyDown(event){
    playSound(event.key);
    animation(event.key);
}

function playSound(key){
    switch (key) {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            console.log("played");
        break;
        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            console.log("played");
        break;
        case "s":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            console.log("played");
        break;
        case "d":
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            console.log("played");
        break;
        case "j":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            console.log("played");
        break;
        case "k":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            console.log("played");
        break; 
        case "l":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            console.log("played");
        break;
        default:
        break;
    }





}

function animation(currentKey){
    var button= document.querySelector("."+currentKey);
    button.classList.add("pressed");
    setTimeout(function(){button.classList.remove("pressed",100)})
}