let canvas;
let world;
let keyboard = new Keyboard();
let images = [];
let fullscreen = false;
let alive = true;
let openMenu = false;
let openHelp = false;
let mobileMode = false;

init = () => {
    document.getElementById("playButton").style = "display: none";
    document.getElementById("helpButton").style = "display: none;";
    document.getElementById("mobileButton").style = "display: none;";
    document.getElementById("fullscreenIcon").style = "display: none;";
    canvas = document.getElementById("canvas");
    world = new World(canvas, keyboard);
    enableReplayButton();
}

enableReplayButton = () => {
    document.getElementById("playButton").src = "img/icons/replay.svg";
    document.getElementById("playButton").setAttribute("onclick", "enableReplay()");
    document.getElementById("playButton").style = "";
};

enableReplay = () => {
    window.location.reload();
};

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

enableEndscreenWon = () => {
    if (fullscreen) {
      document.getElementById("canvas").style =
        "width: 100%; height: 100vh; border-radius: 0px; background-image: url('img/9_intro_outro_screens/start/startscreen_2.png')";
    } else {
      document.getElementById("canvas").style =
        "background-image: url('img/9_intro_outro_screens/start/startscreen_2.png')";
    }
  
    document.getElementById("userWon").style = "";
    document.getElementById("playButton").src = "img/icons/replay.svg";
    document.getElementById("playButton").setAttribute("onclick", "enableReplay()");
    document.getElementById("playButton").style = "";
    alive = true;
};

showMenu = () => {
    if (!openMenu) {
      document.getElementById("playButton").style = "";
      document.getElementById("helpButton").style = "";
      document.getElementById("mobileButton").style = "";
      document.getElementById("fullscreenIcon").style = "";
      openMenu = true;
    } else {
      document.getElementById("helpButton").style = "display: none;";
      document.getElementById("mobileButton").style = "display: none;";
      document.getElementById("fullscreenIcon").style = "display: none;";
      openMenu = false;
    }
};

enableMobileMode = () => {
    if (!mobileMode) {
      fullscreen = false;
      fullscreenMode();
      document.getElementById("mobileButton").src = "img/icons/mobileoff.svg";
      document.getElementById("mobileLeft").style = "";
      document.getElementById("mobileRight").style = "";
      document.getElementById("mobileJump").style = "";
      document.getElementById("mobileThrow").style = "";
      document.getElementById("help").style = "display: none";
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

enableHelp = () => {
    if (!openHelp) {
      document.getElementById("help").style = "";
      openHelp = true;
      setTimeout(() => {
        document.getElementById("help").style = "display: none";
        openHelp = false;
      }, 8000);
    } else {
      document.getElementById("help").style = "display: none";
      openHelp = false;
    }
};


noFullscreenAlive = () => {
    document.getElementById("canvasContainer").style =
      "width: 100%; height: 100vh";
    document.getElementById("canvas").style =
      "width: 100%; height: 100vh; border-radius: 0px; background-image: url('img/9_intro_outro_screens/start/startscreen_2.png'); background-size: cover; background-position: 20%";
    fullscreen = true;
};

fullscreenAlive = () => {
    document.getElementById("canvasContainer").style = "";
    document.getElementById("canvas").style =
        "background-image: url('img/9_intro_outro_screens/start/startscreen_2.png');";
    fullscreen = false;
};

fullscreenNotAlive = () => {
    document.getElementById("canvasContainer").style = "";
    document.getElementById("canvas").style =
        "background-position: center; background-image: url('img/9_intro_outro_screens/start/startscreen_2.png')";
    fullscreen = false;
};

noFullscreenNotAlive = () => {
    document.getElementById("canvasContainer").style =
        "width: 100%; height: 100vh";
    document.getElementById("canvas").style =
        "width: 100%; height: 100vh; border-radius: 0px; background-position: center; background-image: url('img/9_intro_outro_screens/game_over/game_over.png')";
    fullscreen = true;
};

moveRight = () => {
    keyboard.RIGHT = true;
};

moveRightStop = () => {
    keyboard.RIGHT = false;
};

moveLeft = () => {
    keyboard.LEFT = true;
};
  
moveLeftStop = () => {
    keyboard.LEFT = false;
};

throwBottle = () => {
    keyboard.B = true;
};

throwBottleStop = () => {
    keyboard.B = false;
};

throwShuriken = () => {
    keyboard.S = true;
};

throwShurikenStop = () => {
    keyboard.S = false;
}

jump = () => {
    keyboard.SPACE = true;
};

jumpStop = () => {
    keyboard.SPACE = false;
};

function removeKeyBoard() {
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