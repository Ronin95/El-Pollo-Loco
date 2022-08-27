class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 220;
    width = 100;
    availableMoves = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/img1.png', 'img/img2.png', ...]
     */
    loadImages(arr) {
        arr.forEach( (path) => {
            let img = new Image();
            img.src = path;
            this.availableMoves[path] = img;
        })
    }

    moveRight() {

    }

    moveLeft() {

    }   
}