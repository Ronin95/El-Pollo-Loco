let canvas;
let world;
let keyboard = new Keyboard();
let alive = true;
let fullscreen = false;
let openMenu = false;
let mobileMode = false;
let game_status = true; 
let game_over_sound = new Audio('audio/game_over.mp3');
let game_won_sound = new Audio('audio/win.mp3');
let song = new Audio('audio/music.mp3');
let music = false;


/**
 * A function that is called when the checkbox is checked or unchecked.
 * The function disables on enables the music for the game
 * 
 * @function
 * @name disableSound
 * @kind function
 * @returns {void}
 */
function playMusic() {
    if (music == false) {
        document.getElementById('playMusic').src = 'img/icons/volume-off.png';
        song.pause();
        music = true;
    } else if (music == true) {
        music = false;
        document.getElementById('playMusic').src = 'img/icons/volume-on.png';
        song.play();
    }
}

function enableMobileMode() {
    if (!mobileMode) {
        fullscreen = false;
        // fullscreenMode();
        document.getElementById("mobileButton").src = "img/icons/mobileoff.svg";
        document.getElementById("mobileLeft").style = "";
        document.getElementById("mobileRight").style = "";
        document.getElementById("mobileJump").style = "";
        document.getElementById("mobileThrowBottle").style = "";
        document.getElementById("mobileThrowShuriken").style = "";
        mobileMode = true;
    } else {
        // fullscreenMode();
        document.getElementById("mobileButton").src = "img/icons/mobile.svg";
        document.getElementById("mobileLeft").style = "display: none";
        document.getElementById("mobileRight").style = "display: none";
        document.getElementById("mobileJump").style = "display: none";
        document.getElementById("mobileThrowBottle").style = "display: none";
        document.getElementById("mobileThrowShuriken").style = "display: none";
        mobileMode = false;
    }
    // document.getElementById('canvas').requestFullscreen();
}

function gameWonSound() {
    if (game_status) {
        game_won_sound.play();
        game_status = false;
    }
}

function gameLostSound() {
    if (game_status) {
        game_over_sound.play();
        game_status = false;
    }
}

function loadCanvasStartScreen() {
    document.getElementById('canvas').style = 
        "background-image: url('img/9_intro_outro_screens/start/startscreen_1.png')";
}

function removeCanvasBackgroundWhilePlaying() {
    document.getElementById('canvas').style = "";
}

function init() {
    document.getElementById("instruct").style = "display: none";
    document.getElementById("playButton").style = "display: none";
    document.getElementById("mobileButton").style = "display: none";
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    enableReplayButton();
}

function enableReplayButton() {
    document.getElementById("playButton").src = "img/icons/replay.svg";
    document.getElementById("playButton").setAttribute("onclick", "enableReplay()");
    document.getElementById("playButton").style = "";
}

function enableReplay() {
    // for (let i = 0; i < 1500; i++){
    //     clearInterval(i);
    // }
    // init();
    window.location.reload();
};

function gameLost() {
    if (alive) {
        document.getElementById("canvas").style = 
        "background-position: center; background-image: url('img/9_intro_outro_screens/game_over/game_over.png')";
        gameLostSound();
        enableReplayButton();
    }
}

function gameWon() {
    if (alive) {
        document.getElementById("canvas").style =
        "background-image: url('img/9_intro_outro_screens/start/startscreen_2.png')";
        gameWonSound();
        enableReplayButton();
    }
    document.getElementById("youWon").style = "";
    document.getElementById("playButton").src = "img/icons/replay.svg";
    document.getElementById("playButton").setAttribute("onclick", "enableReplay()");
    document.getElementById("playButton").style = "";
}


function showMenu() {
    if (!openMenu) {
      document.getElementById("playButton").style = "";
      document.getElementById("mobileButton").style = "";
      openMenu = true;
    } else {
      document.getElementById("mobileButton").style = "display: none;";
      openMenu = false;
    }
};


function moveRight() {
    keyboard.RIGHT = true;
};

function moveRightStop() {
    keyboard.RIGHT = false;
};

function moveLeft() {
    keyboard.LEFT = true;
};

function moveLeftStop() {
    keyboard.LEFT = false;
};

function throwBottle() {
    keyboard.B = true;
};

function throwBottleStop() {
    keyboard.B = false;
};

function throwShuriken() {
    keyboard.S = true;
};

function throwShurikenStop() {
    keyboard.S = false;
}

function jump() {
    keyboard.SPACE = true;
};

function jumpStop() {
    keyboard.SPACE = false;
};

/**
 * Removing the keyboard.
 * 
 * @function
 * @name removeKeyBoard
 * @kind function
 * @returns {void}
 */
function removeKeyBoard() {
    window.addEventListener('keydown', (e) => {
        if (e.keyCode == 39) {
            keyboard.RIGHT = false;
        }
        if (e.keyCode == 37) {
            keyboard.LEFT = false;
        }
        if (e.keyCode == 38) {
            keyboard.UP = false;
        }
        if (e.keyCode == 40) {
            keyboard.DOWN = false;
        }
        if (e.keyCode == 32) {
            keyboard.SPACE = false;
        }
        if (e.keyCode == 66) {
            keyboard.B = false;
        }
        if (e.keyCode == 83) {
            keyboard.S = false;
        }
    })
}

/**
 * Listening to the keydown event.
 * 
 * @var
 * @name window
 * @type {Window & typeof globalThis}
 */
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 66) {
        keyboard.B = true;
    }
    if (e.keyCode == 83) {
        keyboard.S = true;
    }
})

/**
 * Listening to the keyup event.
 * 
 * @var
 * @name window
 * @type {Window & typeof globalThis}
 */
window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 66) {
        keyboard.B = false;
    }
    if (e.keyCode == 83) {
        keyboard.S = false;
    }
})