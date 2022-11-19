class Birds extends MovableObject {
    birdsBackgroundImg;
    height = 20;
    width = 60;
    BIRDS_FLY = [
        'img/10_otherTools/birds/bird1.png',
        'img/10_otherTools/birds/bird2.png',
        'img/10_otherTools/birds/bird3.png'
    ];
    currentBird = 0;

    constructor() {
        super().loadImage('img/10_otherTools/birds/bird1.png');
        this.loadImages(this.BIRDS_FLY);
        this.x = 450;
        this.y = 30;
        this.animateBirds();
    }

    /**
     * A method that is called every 500ms. It plays the birds in the top right corner.
     * 
     * @method
     * @name animateBirds
     * @kind method
     * @memberof Birds
     * @returns {void}
     */
    animateBirds() {
        setInterval(() => {
            this.playAnimation(this.BIRDS_FLY);
        }, 800);
    }
}