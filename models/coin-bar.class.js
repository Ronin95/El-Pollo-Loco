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

    /**
     * Setting the coins to the value of coins.
     * 
     * @method
     * @name setCoins
     * @kind method
     * @memberof CoinBar
     * @param {any} coins
     * @returns {void}
     */
    setCoins(coins) {
        this.coins = coins; // -> 0...5 
        let path = this.IMAGES_COINS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * A method that returns a number between 0 and 5.
     * 
     * @method
     * @name resolveImageIndex
     * @kind method
     * @memberof CoinBar
     * @returns {0 | 1 | 2 | 3 | 4 | 5}
     */
    resolveImageIndex() {
        if(this.coins > 10) {
            return 0;
    }   else if(this.coins > 8 && this.coins <= 10) {
            return 1;
    }   else if(this.coins > 6 && this.coins <= 8) {
            return 2;
    }   else if(this.coins > 4 && this.coins <= 6) {
            return 3;
    }   else if(this.coins >= 2 && this.coins <= 4) {
            return 4;
    }   else if(this.coins < 2) {
            return 5;
    }   else {
            return 0;
    }
    }
}