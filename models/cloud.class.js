class Cloud extends MovableObject {
    y = 20;
    width = 300;
    height = 200;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.x = Math.random()*5000; // Number between 200 and 700
        this.y = Math.random()*80;
        this.animate();        
    }

    /**
     * A method that is called when the object is created.
     * It moves the clouds to the left.
     * 
     * @method
     * @name animate
     * @kind method
     * @memberof Cloud
     * @returns {void}
     */
    animate() {
        setInterval( () => {
            this.x -= 0.5;
        }, 50);
    }
}