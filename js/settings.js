let music = new Audio('audio/music.mp3');

/**
 * A function that is called when the checkbox is checked or unchecked.
 * The function disables on enables the music for the game
 * 
 * @function
 * @name disableSound
 * @kind function
 * @returns {void}
 */
function disableSound() {
    let sounds = document.getElementById('chkSound');
    if (sounds.checked == true) {
        music.volume = 0.05;
        music.play();
    } else {
        music.pause();
    }
}