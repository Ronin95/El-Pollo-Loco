class ThrowableObject extends MovableObject {
    throw_sound = new Audio('./audio/audio_throw.mp3');

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 70;
        this.throw();
    }

    throw() {
        this.throw_sound.play();
        this.speedY = 30;
        this.applyGravity();

        setInterval(() => {
            this.x += 10;
        },25);
    }
}