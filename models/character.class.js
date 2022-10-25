class Character extends MovableObject {
    height = 280;
    width = 150;
    y = 80;
    x = 40;
    speed = 8;
    inactivePepe = 0;
    lastPepeAction = 0;

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];
    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];
    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];
    IMAGES_SLEEPING = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];
    IMAGES_WAITING = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];
    world;
    walking_sound = new Audio('./audio/walking.mp3');

    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_WAITING);
        this.applyGravity();
        this.displayBehaviour();
        this.pepeStandingStill();
    }

    /**
     * Calling the functions `pepeMovement()` and `pepeAnimations()` and `inactivity()`
     * 
     * @method
     * @name displayBehaviour
     * @kind method
     * @memberof Character
     * @returns {void}
     */
    displayBehaviour() {
        this.inactivity();
        this.pepeAnimations();
        this.pepeMovement();
    }
    
    /**
     * A function that is called when pepe is not moving for 4 seconds.
     * 
     * @method
     * @name standingStill
     * @kind method
     * @memberof Character
     * @returns {void}
     */
    inactivity() {
        setTimeout(() => {
            setInterval(() => {
                this.inactivePepe = new Date().getTime() - this.lastPepeAction;
                if(this.inactivePepe >= 5000) {
                    this.playAnimation(this.IMAGES_SLEEPING);
                }
            }, 100);
        }, 5000);
    }

    /**
     * Checking if pepe is dead, hurt, above the ground, moving or
     *  sleeping. If so, it plays the corresponding animation.
     * 
     * @method
     * @name pepeAnimations
     * @kind method
     * @memberof Character
     * @returns {void}
     */
    pepeAnimations() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT && !this.isAboveGround()) {
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                this.playAnimation(this.IMAGES_WAITING);
            }
        }, 100);
    }

    /**
     * A function that is called every 60th of a second. It checks if the
     *  right arrow key is pressed and if pepe is not at the end of the level. 
     * If so, it moves pepe to the right. It also checks if the left arrow key is pressed 
     * and if pepe is not at the beginning of the level. If so, it moves pepe to the left.
     *  It also checks if the space bar is pressed and if pepe is not above the 
     * ground. If so, it makes pepe jump.
     * 
     * @method
     * @name pepeMovement
     * @kind method
     * @memberof Character
     * @returns {void}
     */
    pepeMovement() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.walking_sound.play();
            } else {
                this.walking_sound.pause();
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump(); // pepe jumps
            }

            this.world.camera_x = -this.x + 100;
        }, 1000/60);
    }

    /**
     * A function that is called when pepe is not moving for 4 seconds.
     * 
     * @method
     * @name pepeStandingStill
     * @kind method
     * @memberof Character
     * @returns {void}
     */
     pepeStandingStill() {
        setInterval(() => {
            if (this.noButtonsPressedAndNoCharacterAnimations()) {
                this.lastPepeAction = new Date().getTime();
             }
        }, 100);
    }
    

    /**
     * Checking if any of the buttons are pressed or if any of the character animations are playing.
     * 
     * @method
     * @name noButtonsPressedAndNoCharacterAnimations
     * @kind method
     * @memberof Character
     * @returns {any}
     */
    noButtonsPressedAndNoCharacterAnimations() {
        return this.world.keyboard.RIGHT || 
               this.world.keyboard.LEFT || 
               this.world.keyboard.SPACE || 
               this.world.keyboard.B || 
               this.world.keyboard.S || 
               this.isAboveGround() || 
               this.isHurt() || 
               this.isDead();
    }
}