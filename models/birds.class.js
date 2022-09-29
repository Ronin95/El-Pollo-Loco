class Birds extends MovableObject {
    height = 50;
    width = 50;
    BIRDS_FLY = [
        'img/10_otherTools/bird1.png',
        'img/10_otherTools/bird2.png'
    ];
    currentBird = 0;

    constructor() {
        super().loadImage('img/10_otherTools/bird1.png');
        this.loadImages(this.BIRDS_FLY);
        this.x = 200;
        this.y = 200;
        this.animate();
    }

    animate() {
        setInterval( () => {
            let i = this.currentBird % this.BIRDS_FLY.length;
            let path =  this.BIRDS_FLY[i];
            this.img = this.imageCache[path];
            this.currentBird++;
        },100);
    }
}