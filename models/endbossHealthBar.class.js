class EndbossHealthBar extends DrawableObject {

    ENDBOSS_HEALTHBAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    energyEndboss = 100;

    constructor() {
        super();
        this.loadImages(this.ENDBOSS_HEALTHBAR);
        this.x = 200;
        this.y = 380;
        this.height = 100;
        this.width = 0;
        this.setEndbossEnergy(100);
    }

    
    /**
     * Setting the energy of the endboss.
     * 
     * @method
     * @name setEndbossEnergy
     * @kind method
     * @memberof EndbossHealthBar
     * @param {any} energy
     * @returns {void}
     */
    setEndbossEnergy(energy) {
        this.energyEndboss = energy;
        let path = this.ENDBOSS_HEALTHBAR[this.setEndbossHealthbar()];
        this.img = this.imageCache[path];
    }

    
    /**
     * Function that calculates the endboss health
     * 
     * @method
     * @name setEndbossHealthbar
     * @kind method
     * @memberof EndbossHealthBar
     * @returns {5 | 4 | 3 | 2 | 1 | 0 | undefined}
     */
    setEndbossHealthbar() {
        if(this.energyEndboss >= 100) {
            return 5;
        } else if (this.energyEndboss < 100 && this.energyEndboss >= 80) {
            return 4;
        } else if (this.energyEndboss < 80 && this.energyEndboss >= 60) {
            return 3;
        } else if (this.energyEndboss < 60 && this.energyEndboss >= 40) {
            return 2;
        } else if (this.energyEndboss < 40 && this.energyEndboss > 0) {
            return 1;
        } else if (this.energyEndboss <= 0) {
            return 0;
        }
    }
}