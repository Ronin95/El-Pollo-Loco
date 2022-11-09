let canvas;
let world;
let keyboard = new Keyboard();
let images = [];
let fullscreen = false;
let alive = true;
let openMenu = false;
let openHelp = false;
let mobileMode = false;


/**
 * Setting the background image of the canvas to the start screen.
 * 
 */
loadCanvasStartScreen = () => {
    document.getElementById('canvas').style = 
        "background-image: url('img/9_intro_outro_screens/start/startscreen_1.png')";
};

/**
 * It removes the background image of the canvas, while playing the game
 * 
 */
removeCanvasBackgroundWhilePlaying = () => {
    document.getElementById('canvas').style = "";
}

/**
 * A function that is called when the page is loaded.
 * 
 */
init = () => {
    document.getElementById("playButton").style = "display: none";
    document.getElementById("mobileButton").style = "display: none;";
    document.getElementById("fullscreenIcon").style = "display: none;";
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    enableReplayButton();
}

/**
 * A function that enables the replay button
 * 
 */
enableReplayButton = () => {
    document.getElementById("playButton").src = "img/icons/replay.svg";
    document.getElementById("playButton").setAttribute("onclick", "enableReplay()");
    document.getElementById("playButton").style = "";
};

/**
 * It reloads the page.
 * 
 */
enableReplay = () => {
    window.location.reload();
};

/**
 * Exists the fullscreen
 * 
 */
enableEndscreenLost = () => {
    if (fullscreen == true) {
      document.getElementById("canvas").style =
        "width: 100%; height: 100vh; border-radius: 0px; background-position: center; background-image: url('img/9_intro_outro_screens/game_over/game_over.png')";
    } else {
      document.getElementById("canvas").style =
        "background-position: center; background-image: url('img/9_intro_outro_screens/game_over/game_over.png')";
    }
    enableReplayButton();
    alive = false;
};

/**
 * A function that is called when the player wins the game.
 * 
 */
enableEndscreenWon = () => {
    if (fullscreen) {
      document.getElementById("canvas").style =
        "background-image: url('img/9_intro_outro_screens/start/startscreen_2.png')";
    } else {
      document.getElementById("canvas").style =
        "background-image: url('img/9_intro_outro_screens/start/startscreen_2.png')";
    }

    document.getElementById("youWon").style = "";
    document.getElementById("playButton").src = "img/icons/replay.svg";
    document.getElementById("playButton").setAttribute("onclick", "enableReplay()");
    document.getElementById("playButton").style = "";
    alive = true;
};

/**
 * A function that shows the menu.
 * 
 */
showMenu = () => {
    if (!openMenu) {
      document.getElementById("playButton").style = "";
      document.getElementById("mobileButton").style = "";
      document.getElementById("fullscreenIcon").style = "";
      openMenu = true;
    } else {
      document.getElementById("mobileButton").style = "display: none;";
      document.getElementById("fullscreenIcon").style = "display: none;";
      openMenu = false;
    }
};

/**
 * A function that is called when the player presses the mobile button.
 * 
 */
enableMobileMode = () => {
    if (!mobileMode) {
      fullscreen = false;
      fullscreenMode();
      document.getElementById("mobileButton").src = "img/icons/mobileoff.svg";
      document.getElementById("mobileLeft").style = "";
      document.getElementById("mobileRight").style = "";
      document.getElementById("mobileJump").style = "";
      document.getElementById("mobileThrow").style = "";
      mobileMode = true;
    } else {
      fullscreenMode();
      document.getElementById("mobileButton").src = "img/icons/mobile.svg";
      document.getElementById("mobileLeft").style = "display: none";
      document.getElementById("mobileRight").style = "display: none";
      document.getElementById("mobileJump").style = "display: none";
      document.getElementById("mobileThrow").style = "display: none";
      mobileMode = false;
    }
};

/**
 * A function that is called when the player presses the 
 * fullscreen button.
 * 
 */
fullscreenMode = () => {
    if (!fullscreen && alive) {
      noFullscreenAlive();
    } else if (fullscreen && alive) {
      fullscreenAlive();
    } else if (fullscreen && !alive) {
      fullscreenNotAlive();
    } else if (!fullscreen && !alive) {
      noFullscreenNotAlive();
    }
};

/**
 * A function that is called when the player presses the fullscreen button.
 * 
 */
noFullscreenAlive = () => {
    document.getElementById("canvasContainer").style =
      "width: 100%; height: 100vh";
    document.getElementById("canvas").style =
      "width: 100%; height: 100vh; border-radius: 0px; background-image: url('img/9_intro_outro_screens/start/startscreen_2.png'); background-size: cover; background-position: 20%";
    fullscreen = true;
};

/**
 * A function that is called when the player presses the fullscreen button.
 * 
 */
fullscreenAlive = () => {
    document.getElementById("canvasContainer").style = "";
    document.getElementById("canvas").style =
        "background-image: url('img/9_intro_outro_screens/start/startscreen_2.png');";
    fullscreen = false;
};

/**
 * A function that is called when the player presses the fullscreen button.
 * 
 */
fullscreenNotAlive = () => {
    document.getElementById("canvasContainer").style = "";
    document.getElementById("canvas").style =
        "background-position: center; background-image: url('img/9_intro_outro_screens/game_over/game_over!.png')";
    fullscreen = false;
};

/**
 * A function that is called when the player presses the fullscreen button.
 * 
 */
noFullscreenNotAlive = () => {
    document.getElementById("canvasContainer").style =
        "width: 100%; height: 100vh";
    document.getElementById("canvas").style =
        "width: 100%; height: 100vh; border-radius: 0px; background-position: center; background-image: url('img/9_intro_outro_screens/game_over/game_over.png')";
    fullscreen = true;
};

/**
 * A function that is called when the player presses the right arrow key.
 * 
 */
moveRight = () => {
    keyboard.RIGHT = true;
};

/**
 * A function that is called when the player stops pressing the right arrow key.
 * 
 */
moveRightStop = () => {
    keyboard.RIGHT = false;
};

/**
 * A function that is called when the player presses the left arrow key.
 * 
 */
moveLeft = () => {
    keyboard.LEFT = true;
};
  
/**
 * A function that is called when the player stops pressing the left arrow key.
 * 
 */
moveLeftStop = () => {
    keyboard.LEFT = false;
};

/**
 * A function that is called when the player presses the B key.
 * 
 */
throwBottle = () => {
    keyboard.B = true;
};

/**
 * A function that is called when the player stops pressing the B key.
 * 
 */
throwBottleStop = () => {
    keyboard.B = false;
};

/**
 * A function that is called when the player presses the S key.
 * 
 */
throwShuriken = () => {
    keyboard.S = true;
};

/**
 * A function that is called when the player stops pressing the S key.
 * 
 */
throwShurikenStop = () => {
    keyboard.S = false;
}

/**
 * A function that is called when the player presses the spacebar.
 * 
 */
jump = () => {
    keyboard.SPACE = true;
};

/**
 * A function that is called when the player stops pressing the spacebar.
 * 
 */
jumpStop = () => {
    keyboard.SPACE = false;
};

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