class Birds extends MovableObject {
    height = 350;
    width = 350;
    BIRDS_FLY = [
        'img/10_otherTools/birds/bird1.png',
        'img/10_otherTools/birds/bird2.png',
        'img/10_otherTools/birds/bird3.png'
    ];
    currentBird = 0;

    constructor() {
        super().loadImage('img/10_otherTools/bird1.png');
        this.loadImages(this.BIRDS_FLY);
        this.x = 100;
        this.y = 100;
        this.animateBirds();
    }

    animateBirds() {
        setInterval(() => {
            this.playAnimation(this.BIRDS_FLY);
        }, 100);
    }
}