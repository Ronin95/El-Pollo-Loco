class Clouds extends MovableObject {
    y = 20;
    width = 300;
    height = 200;
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random()*500; // Number between 200 and 700
        this.animate();        
    }

    animate() {
        setInterval( () => {
            this.x -= 0.15;
        }, 1000/60)
    }
}