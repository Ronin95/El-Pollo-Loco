class DrawableObject {
    x = 120;
    y = 250;
    height = 220;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

    /**
     * A method that loads an image from a path.
     * 
     * @method
     * @name loadImage
     * @kind method
     * @memberof DrawableObject
     * @param {any} path
     * @returns {void}
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    
    /**
     * Loading an array of images into the imageCache object.
     * 
     * @method
     * @name loadImages
     * @kind method
     * @memberof DrawableObject
     * @param {any} arr
     * @returns {void} ['img/img1.png', 'img/img2.png', ...]
     */
    loadImages(arr) {
        arr.forEach( (path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }

    /**
     * Drawing the image to the canvas.
     * 
     * @method
     * @name draw
     * @kind method
     * @memberof DrawableObject
     * @param {any} ctx
     * @returns {void}
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Drawing a frame around the character.
     * 
     * @method
     * @name drawFrame
     * @kind method
     * @memberof DrawableObject
     * @param {any} ctx
     * @returns {void}
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    
}