class Endboss extends MovableObject {
    height = 400;
    width = 250;
    y = 70;

    ENDBOSS_STANDING_STILL = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    constructor() {
        super().loadImage(this.ENDBOSS_STANDING_STILL[0]);
        this.loadImages(this.ENDBOSS_STANDING_STILL);
        this.x = 2500; // How far away the final boss is
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.ENDBOSS_STANDING_STILL);
        }, 500);
    }
}