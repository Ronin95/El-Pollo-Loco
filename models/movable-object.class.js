class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 3;
    energy = 100;
    lastHit = 0;

    /**
     * A method that is called every 25th of a second. 
     * It checks if the object is above the ground or if it is falling. 
     * If it is, it will move the object down.
     * 
     * @method
     * @name applyGravity
     * @kind method
     * @memberof MovableObject
     * @returns {void}
     */
     applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000/25);
    }

    /**
     * Checking if the object is above the ground or if it is falling.
     * Checks Pepe coordinates
     * 
     * @method
     * @name isAboveGround
     * @kind method
     * @memberof MovableObject
     * @returns {boolean}
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) { // ThrowableObjects should always fall
            return true;
        } else {
            return this.y < 180;
        }
    }

    /**
     * A method that is called when the object (Pepe) is hit. 
     * It decreases the energy of the object (Pepe) by 5.
     * 
     * @method
     * @name hit
     * @kind method
     * @memberof MovableObject
     * @returns {void}
     */
    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checking if the object (Pepe) is hurt.
     * 
     * @method
     * @name isHurt
     * @kind method
     * @memberof MovableObject
     * @returns {boolean}
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Diff in ms
        timepassed = timepassed / 1000; // Diff in sec
        return timepassed < 1;
    }

    /**
     * Checking if the object (Pepe) is dead.
     * 
     * @method
     * @name isDead
     * @kind method
     * @memberof MovableObject
     * @returns {boolean}
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * The different animations of Pepe are loaded depending on the
     * experiences he is encountering - hurt - dead - hit etc
     * 
     * @method
     * @name playAnimation
     * @kind method
     * @memberof MovableObject
     * @param {any} images
     * @returns {void}
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * A method that is called when Pepe jumps.
     * 
     * @method
     * @name jump
     * @kind method
     * @memberof MovableObject
     * @returns {void}
     */
    jump() {
        this.speedY = 30; // how high pepe jumps
    }

    /**
     * Moving Pepe to the right.
     * 
     * @method
     * @name moveRight
     * @kind method
     * @memberof MovableObject
     * @returns {void}
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moving Pepe to the left.
     * 
     * @method
     * @name moveLeft
     * @kind method
     * @memberof MovableObject
     * @returns {void}
     */
    moveLeft() {
        this.x -= this.speed;
    }
}