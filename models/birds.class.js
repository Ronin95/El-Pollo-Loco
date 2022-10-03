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
        this.x = 650;
        this.y = 10;
        this.animateBirds();
    }

    animateBirds() {
        setInterval(() => {
            this.playAnimation(this.BIRDS_FLY);
        }, 500);
    }
}