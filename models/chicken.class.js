class Chicken extends MovableObject {
    height = 70;
    width = 70;
    y = 390;
    energy = 1;
    CHICKEN_NORMAL_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    CHICKEN_NORMAL_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];
    CHICKEN_SMALL_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    CHICKEN_SMALL_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    chicken1_audio = new Audio('audio/audio_chicken_1.mp3');

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.CHICKEN_NORMAL_WALKING);
        this.loadImages(this.CHICKEN_NORMAL_DEAD);
        this.x = 300 + Math.random()*6000; // Number between 200 and 25  00
        this.speed = 0.35 + Math.random() * 0.4;
        this.animate();
    }

    /**
     * A method that is called when the Chicken is created.
     * 
     * @method
     * @name animate
     * @kind method
     * @memberof Chicken
     * @returns {void}
     */
    animate() {
        this.moveChickenNormalLeft();
        setInterval(() => {
            if(this.energy <= 0) {
                this.energy = 0;
                this.speed = 0;
                this.loadImage('img/3_enemies_chicken/chicken_normal/2_dead/dead.png');
                this.playAnimation(this.CHICKEN_NORMAL_DEAD);
            } else {
                this.playAnimation(this.CHICKEN_NORMAL_WALKING);
            }
        }, 100);
    }

    moveChickenNormalLeft() {
        setInterval(() => {
          this.x -= this.speed;
        }, 1000 / 60);
    }
}