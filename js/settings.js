let music = new Audio('audio/music.mp3');

function disableSound() {
    let sounds = document.getElementById('chkSound');
    if (sounds.checked == true) {
        music.volume = 0.05;
        music.play();
    } else {
        music.pause();
    }
}