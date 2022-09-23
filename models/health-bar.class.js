class HealthBar extends DrawableObject {
    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];
    health = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.setHealth(100);
        this.x = 5;
        this.y = 5;
        this.width = 200;
        this.height = 50;
    }

    /**
     * Setting the health of the player.
     * 
     * @method
     * @name setHealth
     * @kind method
     * @memberof HealthBar
     * @param {any} health
     * @returns {void}
     */
    setHealth(health) {
        this.health = health; // -> 0...5
        let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * A method that returns a number between 0 and 5.
     * 
     * @method
     * @name resolveImageIndex
     * @kind method
     * @memberof HealthBar
     * @returns {0 | 1 | 2 | 3 | 4 | 5}
     */
    resolveImageIndex() {
        if(this.health <= 0) {
            return 0;
    }   else if(this.health > 0 && this.health <= 2) {
            return 1;
    }   else if(this.health > 2 && this.health <= 4) {
            return 2;
    }   else if(this.health > 4 && this.health <= 6) {
            return 3;
    }   else if(this.health > 6 && this.health <= 7) {
            return 4;
    }   else if(this.health > 7) {
            return 5;
    }   else {
            return 0;
    }
}
}