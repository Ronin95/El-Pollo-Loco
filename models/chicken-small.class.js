class ChickenSmall extends MovableObject {
    height = 50;
    width = 50;
    y = 390;
    energy = 1;
    CHICKEN_SMALL_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    CHICKEN_SMALL_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.CHICKEN_SMALL_WALKING);
        this.loadImages(this.CHICKEN_SMALL_DEAD);
        this.x = 300 + Math.random()*6000; // Number between 200 and 25  00
        this.speed = 0.35 + Math.random() * 1.9;
        this.animate();
    }

    /**
     * It is a method that is called when the Chicken is created. 
     * 
     * @method
     * @name animate
     * @kind method
     * @memberof Chicken
     * @returns {void}
     */
    animate() {
        //this.moveChickenSmallLeft();
        setInterval(() => {
            if(this.energy <= 0) {
                this.energy = 0;
                this.speed = 0;
                this.loadImage('img/3_enemies_chicken/chicken_small/2_dead/dead.png');
                this.playAnimation(this.CHICKEN_SMALL_DEAD);
            } else {
                this.playAnimation(this.CHICKEN_SMALL_WALKING);
            }
        }, 100);
    }

    moveChickenSmallLeft() {
        setInterval(() => {
          this.x -= this.speed;
        }, 1000 / 60);
    }
}