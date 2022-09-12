class CoinBar extends DrawableObject {
    IMAGES_COINS = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];
    coins = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINS);
        this.setCoins(0);
        this.x = 210;
        this.y = 5;
        this.width = 200;
        this.height = 50;
    }

    setCoins(coins) {
        this.coins = coins; // -> 0...5 
        let path = this.IMAGES_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.coins == 100) {
            return 5;
        } else if (this.coins > 80) {
            return 4;
        } else if (this.coins > 60) {
            return 3;
        } else if (this.coins > 40) {
            return 2;
        } else if (this.coins > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}