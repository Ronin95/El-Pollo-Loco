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

/**
 * A function that is called when the user enables the phone version.
 * 
 * @function
 * @name enableMobileMode
 * @kind function
 * @returns {void}
 */
function enableMobileMode() {
    if (!mobileMode) {
        fullscreen = false;
        displayMobileIcons();
        mobileMode = true;
    } else {
        removeMobileIcons();
        mobileMode = false;
    }
}

/**
 * The phone buttons are being displayed
 * 
 * @function
 * @name displayMobileIcons
 * @kind function
 * @returns {void}
 */
function displayMobileIcons() {
    document.getElementById("mobileButton").src = "img/icons/mobileoff.svg";
    document.getElementById("mobileLeft").style = "";
    document.getElementById("mobileRight").style = "";
    document.getElementById("mobileJump").style = "";
    document.getElementById("mobileThrowBottle").style = "";
    document.getElementById("mobileThrowShuriken").style = "";
    document.getElementById('settings').setAttribute('class', 'settingsMobilePosition');
}

/**
 * Hiding the mobile icons.
 * 
 * @function
 * @name removeMobileIcons
 * @kind function
 * @returns {void}
 */
function removeMobileIcons() {
    document.getElementById("mobileButton").src = "img/icons/mobile.svg";
    document.getElementById("mobileLeft").style = "display: none";
    document.getElementById("mobileRight").style = "display: none";
    document.getElementById("mobileJump").style = "display: none";
    document.getElementById("mobileThrowBottle").style = "display: none";
    document.getElementById("mobileThrowShuriken").style = "display: none";
    document.getElementById('settings').setAttribute('class', 'settingsBasePosition');
}

/**
 * Playing the sound when the game is won.
 * 
 * @function
 * @name gameWonSound
 * @kind function
 * @returns {void}
 */
function gameWonSound() {
    if (game_status) {
        game_won_sound.play();
        game_status = false;
    }
}

/**
 * Playing the sound when the game is lost.
 * 
 * @function
 * @name gameLostSound
 * @kind function
 * @returns {void}
 */
function gameLostSound() {
    if (game_status) {
        game_over_sound.play();
        game_status = false;
    }
}

/**
 * Loading the start screen.
 * 
 * @function
 * @name loadCanvasStartScreen
 * @kind function
 * @returns {void}
 */
function loadCanvasStartScreen() {
    document.getElementById('canvas').style = 
        "background-image: url('img/9_intro_outro_screens/start/startscreen_1.png')";
}

/**
 * Removing the background image of the canvas, while setting removing the instructions and
 * adding a new class instead of the old one.
 * 
 * @function
 * @name removeCanvasBackgroundWhilePlaying
 * @kind function
 * @returns {void}
 */
function removeCanvasBackgroundWhilePlaying() {
    document.getElementById('canvas').style = "";
    document.getElementById('instruct').style = "display: none";
    document.getElementById('settings').setAttribute('class', 'settingsBasePositionPlay');
}

/**
 * Initializing the game.
 * 
 * @function
 * @name init
 * @kind function
 * @returns {void}
 */
function init() {
    // document.getElementById("instruct").style = "display: none";
    document.getElementById("playButton").style = "display: none";
    document.getElementById("mobileButton").style = "display: none";
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    enableReplayButton();
}

/**
 * Enabling the replay button.
 * 
 * @function
 * @name enableReplayButton
 * @kind function
 * @returns {void}
 */
function enableReplayButton() {
    document.getElementById("playButton").src = "img/icons/replay.svg";
    document.getElementById("playButton").setAttribute("onclick", "enableReplay()");
    document.getElementById("playButton").style = "";
}

/**
 * Reloading the page.
 * 
 * @function
 * @name enableReplay
 * @kind function
 * @returns {void}
 */
function enableReplay() {
    // for (let i = 0; i < 1500; i++){
    //     clearInterval(i);
    // }
    // init();
    window.location.reload();
};

/**
 * A function that is called when the player loses the game.
 * 
 * @function
 * @name gameLost
 * @kind function
 * @returns {void}
 */
function gameLost() {
    if (alive) {
        document.getElementById("canvas").style = 
        "background-position: center; background-image: url('img/9_intro_outro_screens/game_over/game_over.png')";
        gameLostSound();
        enableReplayButton();
    }
}

/**
 * A function that is called when the player wins the game.
 * 
 * @function
 * @name gameWon
 * @kind function
 * @returns {void}
 */
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


/**
 * Showing the menu.
 * 
 * @function
 * @name showMenu
 * @kind function
 * @returns {void}
 */
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