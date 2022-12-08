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

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    /**
     * Checking if the character is colliding with the object.
     * 
     * @method
     * @name collidingPepe
     * @kind method
     * @memberof DrawableObject
     * @param {any} mo
     * @returns {boolean}
     */
    collidingPepe (mo) {
        return  this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
                this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
    }

    /**
     * Checking if the character is colliding with the bottle.
     * 
     * @method
     * @name collidingBottle
     * @kind method
     * @memberof DrawableObject
     * @param {any} mo
     * @returns {boolean}
     */
    collidingBottle(mo) {
        return  (this.x + 35) + (this.width - 30) > (mo.x + 10) &&
                (this.y + 105) + (this.height - 115) > (mo.y + 25) &&
                (this.x + 35) < (mo.x + 30 + mo.width - 40) &&
                (this.y + 125) < (mo.y + 25) + (mo.height - 10)
    }

    /**
     * Checking if the character is colliding with the coin.
     * 
     * @method
     * @name collidingCoin
     * @kind method
     * @memberof DrawableObject
     * @param {any} mo
     * @returns {boolean}
     */
    collidingCoin(mo) {
        return  (this.x + 35) + (this.width - 30) > (mo.x + 10) &&
                (this.y + 105) + (this.height - 115) > (mo.y + 25) &&
                (this.x + 35) < (mo.x + 30 + mo.width - 40) &&
                (this.y + 125) < (mo.y + 25) + (mo.height - 10)
    }
}