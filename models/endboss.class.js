class Endboss extends MovableObject {
    height = 400;
    width = 300;
    y = 70;
    energy = 100;

    ENDBOSS_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    ENDBOSS_STANDING_STILL = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    ENDBOSS_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    ENDBOSS_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    ENDBOSS_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    constructor() {
        super();
        this.loadImages(this.ENDBOSS_WALKING);
        this.loadImages(this.ENDBOSS_STANDING_STILL);
        this.loadImages(this.ENDBOSS_ATTACK);
        this.loadImages(this.ENDBOSS_HURT);
        this.loadImages(this.ENDBOSS_DEAD);
        this.x = 6500; // How far away the final boss is
        this.animateEndboss();
        this.checkEndbossEnergy();
    }

    standingStill() {
        setInterval(() => {
            this.playAnimation(this.ENDBOSS_STANDING_STILL);
        }, 300);
    }

    /**
     * Playing the animation of the endboss standing still.
     * 
     * @method
     * @name animate
     * @kind method
     * @memberof Endboss
     * @returns {void}
     */
    animateEndboss() {
        if (this.energy >= 90) {
            this.standingStill();
        } else if (this.energy >= 10 && this.energy <= 90) {
            console.log('Endboss angry');
            this.endbossAngry();
        }
        // else if energy >= 10 and energy <= 80
        // play animation Angry
        // move endboss to the left
        // create a normal chicken and a small chicken and move those chickens to the left
        // 
    }

    /**
     * Checking the endbossEnergy and if it is less than or 
     * equal to 0, it will play the animation of the endboss dying.
     * 
     * @method
     * @name checkEndbossEnergy
     * @kind method
     * @memberof Endboss
     * @returns {void}
     */
    checkEndbossEnergy() {
        setInterval(() => {
            if(this.energy >= 90) {
                this.playAnimation(this.ENDBOSS_WALKING);
                // console.log(this.energy, ' endboss energy');
            } else if (this.energy > 1 && this.energy <= 80) {
                this.endbossMove();
                this.playAnimation(this.ENDBOSS_ATTACK);
            } else if (this.energy <= 0) {
                this.playAnimation(this.ENDBOSS_DEAD);
            } else {
                this.playAnimation(this.ENDBOSS_STANDING_STILL);
            };
        }, 300);
    }

    /**
     * Moving the endboss.
     * 
     * @method
     * @name endbossMove
     * @kind method
     * @memberof Endboss
     * @returns {void}
     */
    endbossMove() {
        if(this.energy < 80) {
            this.x -= 20;
            this.y -= 20;
            this.y += 20;
            this.x += 10;
        }
        if(this.x < 6000) {
            this.x += 40;
        }
    }

    /**
     * Checking if the endbossEnergy is less than 80. 
     * If it is, it will play the animation of the endboss attacking.
     * 
     * @method
     * @name endbossAngry
     * @kind method
     * @memberof Endboss
     * @returns {void}
     */
    endbossAngry() {
        setInterval(() => {
            this.playAnimation(this.ENDBOSS_ATTACK);
        }, 300);
    }

    /**
     * Checking if the endbossEnergy is less than or equal to 0. 
     * If it is, it will set the endbossEnergy to 0 and play 
     * the animation of the endboss dying.
     * 
     * @method
     * @name endbossDead
     * @kind method
     * @memberof Endboss
     * @returns {void}
     */
    endbossDead() {
        if (this.energy <= 0) {
            this.energy = 0;
                this.playAnimation(this.ENDBOSS_DEAD);
        }
    }
}