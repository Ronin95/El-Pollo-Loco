class Chicken extends MovableObject {
    height = 70;
    width = 70;
    y = 390;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    chicken_walking_audio = new Audio('./audio/audio_chicken.mp3');

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 300 + Math.random()*3000; // Number between 200 and 25  00
        this.speed = 0.35 + Math.random() * 0.4;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.chicken_walking_audio.play(); // chicken sound
            setInterval(() => {
                this.moveLeft();
            }, 1000 / 60);
    
            setInterval(() => {
                this.playAnimation(this.IMAGES_WALKING);
            }, 500);
        }, 2000);
    }

    
}