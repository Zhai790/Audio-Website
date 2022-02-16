let audio = document.getElementById("winter-wind")
audio.volume = 0.1;
let buttonIcon = document.getElementById("button-icon");

buttonIcon.onclick = function() {
    if(audio.paused) {
        audio.play();
        buttonIcon.src = "content/pause.png";
    } 
    else {
        audio.pause();
        buttonIcon.src = "content/play.png";
    }
}