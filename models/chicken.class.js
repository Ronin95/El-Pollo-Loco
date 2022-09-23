class Chicken extends MovableObject {
    height = 70;
    width = 70;
    y = 390;
    CHICKEN_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    CHICKEN_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    // chickens_1_sound = new Audio('audio/audio_chicken_1.mp3');
    // chickens_2_sound = new Audio('audio/audio_chicken_2.mp3');

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.CHICKEN_WALKING);
        this.loadImages(this.CHICKEN_DEAD);
        this.x = 300 + Math.random()*6000; // Number between 200 and 25  00
        this.speed = 0.35 + Math.random() * 0.4;
        this.animate();
    }

    /**
     * A method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is called when the Chicken is created. It is a method that is
     * 
     * @method
     * @name animate
     * @kind method
     * @memberof Chicken
     * @returns {void}
     */
    animate() {
        this.moveLeft();
        setInterval(() => {
            if(this.energy <= 0) {
                this.energy = 0;
                this.speed = 0;
                this.loadImage('img/3_enemies_chicken/chicken_small/2_dead/dead.png');
                this.playAnimation(this.CHICKEN_DEAD);
            } else {
                this.playAnimation(this.CHICKEN_WALKING);
            }
        }, 100);
    }

    
}