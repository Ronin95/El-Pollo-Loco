class Coin extends DrawableObject {
    height = 120;
    width = 120;
    y = 300;
    x = 300;

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.x = Math.random() * 7000 + 500;
        this.y = Math.random() * 300 + 50;
    }
}