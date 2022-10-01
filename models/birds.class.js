class Birds extends MovableObject {
    height = 250;
    width = 250;
    BIRDS_FLY = [
        'img/10_otherTools/bird1.png',
        'img/10_otherTools/bird2.png',
        'img/10_otherTools/bird3.png'
    ];
    currentBird = 0;

    constructor() {
        super().loadImage('img/10_otherTools/bird1.png');
        this.loadImages(this.BIRDS_FLY);
        this.x = 200;
        this.y = 200;
        this.animateBirds();
    }

    animateBirds() {
        setInterval( () => {
            this.playAnimation(this.BIRDS_FLY);
        }, 100);
    }
}