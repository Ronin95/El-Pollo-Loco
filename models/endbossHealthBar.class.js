class EndbossHealthBar extends DrawableObject {

    ENDBOSS_HEALTHBAR = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];
    energy = 100;

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
        this.energy = energy;
        let path = this.ENDBOSS_HEALTHBAR[this.setEndbossHealthBar()];
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
    setEndbossHealthBar() {
        if (this.energy >= 100) {
            console.log('energyBOSS-1: ', this.energy);
            return 5;
        } else if (this.energy < 100 && this.energy >= 80) {
            console.log('energyBOSS-2: ', this.energy);
            return 4;
        } else if (this.energy < 80 && this.energy >= 60) {
            console.log('energyBOSS-3: ', this.energy);
            return 3;
        } else if (this.energy < 60 && this.energy >= 40) {
            console.log('energyBOSS-4: ', this.energy);
            return 2;
        } else if (this.energy < 40 && this.energy > 0) {
            console.log('energyBOSS-5: ', this.energy);
            return 1;
        } else if (this.energy <= 0) {
            console.log('energyBOSS-6: ', this.energy);
            return 0;
        }
    }
}