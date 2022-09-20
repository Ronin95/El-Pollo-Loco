class Cloud extends MovableObject {
    y = 20;
    width = 300;
    height = 200;
    speed = 0.15;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random()*2500; // Number between 200 and 700
        this.y = Math.random()*80;
        this.animate();        
    }

    animate() {
        this.moveLeft();
    }
}