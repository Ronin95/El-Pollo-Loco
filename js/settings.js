function disableSound() {
    let sounds = document.getElementById('chkSound');
    if (sounds.checked == true) {
        sounds.play();
    } else {
        sounds.pause();
    }
}