// alert("hola mofo");
// $("h1").css("color", "red");

const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence () {
    let randomNumber = Math.floor(Math.random()*4);
    return(randomNumber);
}
let next = nextSequence();

let randomChoosenColor = buttonColors[next];
gamePattern.push(randomChoosenColor);

// showing sequence to user
$("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
switch (randomChoosenColor) {
    case "red":
        var audio = new Audio("/sounds/red.mp3");
            audio.play();
        break;
        case "blue":
        var audio = new Audio("/sounds/blue.mp3");
            audio.play();
        break;
        case "green":
        var audio = new Audio("/sounds/green.mp3");
            audio.play();
        break;
        case "yellow":
        var audio = new Audio("/sounds/yellow.mp3");
            audio.play();
        break;
        

    default: alert('yo');
        break;
}

// check what button was pressed by the user

$(".btn").click(function (){
    let userChosenColor = $(this).attr("id");
    switch (userChosenColor) {
        case "red":
            var audio = new Audio("/sounds/red.mp3");
                audio.play();
            break;
            case "blue":
            var audio = new Audio("/sounds/blue.mp3");
                audio.play();
            break;
            case "green":
            var audio = new Audio("/sounds/green.mp3");
                audio.play();
            break;
            case "yellow":
            var audio = new Audio("/sounds/yellow.mp3");
                audio.play();
            break;
            
    
        default: alert('yo');
            break;
    }
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
})

// add animation to user clicks
function animatePress(currentolor) {
    $('#' + currentolor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
    }5











