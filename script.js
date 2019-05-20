$(document).ready(function() {
    setTimeout(function() {
        let sound = new Audio();
        sound.src = "track.mp3";
        sound.play();
    }, 1000)

    setTimeout(function() {
        $("body p").css("color", "rgb(247, 247, 247)");
    }, 3000)
});
