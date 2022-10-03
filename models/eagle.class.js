class Eagle extends MovableObject {
    height = 100;
    width = 90;
    currentEagle = 0;
    EAGLE_FLYING = [
        'img/10_otherTools/eagle/0.png',
        'img/10_otherTools/eagle/1.png',
        'img/10_otherTools/eagle/2.png',
        'img/10_otherTools/eagle/3.png',
        'img/10_otherTools/eagle/4.png',
        'img/10_otherTools/eagle/5.png',
        'img/10_otherTools/eagle/6.png',
        'img/10_otherTools/eagle/7.png',
        'img/10_otherTools/eagle/8.png',
        'img/10_otherTools/eagle/9.png',
        'img/10_otherTools/eagle/10.png',
        'img/10_otherTools/eagle/11.png',
        'img/10_otherTools/eagle/12.png',
        'img/10_otherTools/eagle/13.png',
        'img/10_otherTools/eagle/14.png',
        'img/10_otherTools/eagle/15.png',
        'img/10_otherTools/eagle/16.png',
        'img/10_otherTools/eagle/17.png',
        'img/10_otherTools/eagle/18.png',
        'img/10_otherTools/eagle/19.png',
        'img/10_otherTools/eagle/20.png'
    ];

    constructor() {
        super().loadImage('img/10_otherTools/eagle/0.png');
        this.loadImages(this.EAGLE_FLYING);
        this.x = 500 + Math.random() * 6000;
        this.y = 30;
        this.speed = 0.35 + Math.random() * 0.1;
        this.animateEagle();
    }

    animateEagle() {
        this.moveEagleLeft();
        setInterval(() => {
            this.playAnimation(this.EAGLE_FLYING);
        }, 50);
    }

    moveEagleLeft() {
        setInterval(() => {
          this.x -= this.speed;
        }, 1000 / 60);
    }
}