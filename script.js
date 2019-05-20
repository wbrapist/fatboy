$(document).ready(function() {
    setTimeout(function() {
        const sound = new Audio();
        sound.src = "track.mp3";
        sound.play();
    }, 500)

    setTimeout(function() {
        $("body p").css("color", "rgb(247, 247, 247)");
    }, 2500)
});