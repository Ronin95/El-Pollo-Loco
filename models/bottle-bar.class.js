class BottleBar extends DrawableObject {
    IMAGES_BOTTLES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];
    bottles = 0;

    constructor() {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        // this.loadImages(this.IMAGES_BOTTLES);
        // this.setBottles(0);
        this.x = 100;
        this.y = 50;
        this.width = 60;
        this.height = 60;
    }

    /**
     * Setting the number of bottles.
     * 
     * @method
     * @name setBottles
     * @kind method
     * @memberof BottleBar
     * @param {any} bottles
     * @returns {void}
     */
    setBottles(bottles) {
        // this.bottles = bottles; // -> 0...5 
        // let path = this.IMAGES_BOTTLES[this.resolveImageIndex()];
        // this.img = this.imageCache[path];
    }

    /**
     * A method that returns an index for the image to be used.
     * 
     * @method
     * @name resolveImageIndex
     * @kind method
     * @memberof BottleBar
     * @returns {0 | 1 | 2 | 3 | 4 | 5}
     */
//     resolveImageIndex() {
//         if(this.bottles <= 0) {
//             return 0;
//     }   else if(this.bottles > 0 && this.bottles <= 2) {
//             return 1;
//     }   else if(this.bottles > 2 && this.bottles <= 4) {
//             return 2;
//     }   else if(this.bottles > 4 && this.bottles <= 6) {
//             return 3;
//     }   else if(this.bottles > 6 && this.bottles <= 7) {
//             return 4;
//     }   else if(this.bottles > 7) {
//             return 5;
//     }   else {
//             return 0;
//     }
//     }
}