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
     * Drawing a frame around the character and chickens.
     * 
     * @method
     * @name drawFrame
     * @kind method
     * @memberof DrawableObject
     * @param {any} ctx
     * @returns {void}
     */
    // drawFrame(ctx) {
    //     if (this instanceof Character || this instanceof Chicken) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '5';
    //         ctx.strokeStyle = 'blue';
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     }
    // }

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
        return  this.x + this.width > mo.x &&
                this.y + this.height > mo.y &&
                this.x < mo.x &&
                this.y < mo.y + mo.height - 30;
    }

    /**
     * Checking if the character is colliding with the object (chicken) head.
     * 
     * @method
     * @name collidingHead
     * @kind method
     * @memberof DrawableObject
     * @param {any} mo
     * @returns {boolean}
     */
    collidingHead(mo) {
        return this.y + this.height > mo.y - this.offsetForHead.top &&
        this.x + this.width > mo.x + this.offsetForHead.left &&
        this.x + this.width < mo.x + mo.width + 50;
    }

    offsetForHead = {
        top: 10,
        bottom: 0,
        left: 20,
        right: 0
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
        return this.x + this.width > mo.x + this.offsetForBottle.left &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height - 50;
    }

    offsetForBottle = {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50
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
        return this.x + this.width > mo.x + this.offsetForCoin.left &&
            this.y + this.height > mo.y + this.offsetForCoin.bottom &&
            this.x < mo.x &&
            this.y < mo.y + mo.height - 50;
    }

    offsetForCoin = {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50
    }
}