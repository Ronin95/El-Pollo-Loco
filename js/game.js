let canvas;
let world;
let keyboard = new Keyboard();
let images = [];
let fullscreen = false;
let alive = true;
let openMenu = false;
let openHelp = false;
let mobileMode = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}

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