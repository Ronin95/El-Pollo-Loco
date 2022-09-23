class Bottle extends DrawableObject {
    height = 90;
    width = 90;

    constructor() {
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = Math.random() * 6000 + 500;
        this.y = 380;
    }
}