class ThrowableObject extends MovableObject {
    BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];
    BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];
    SHURIKEN_ROTATION = [
      'img/10_otherTools/shuriken-1.png',
      'img/10_otherTools/shuriken-2.png'
    ];

    bottlesAmount = level1.bottlesAmount.length;
    broken_bottle_sound = new Audio('./audio/breakbottle.mp3');

    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.BOTTLE_ROTATION);
        this.loadImages(this.BOTTLE_SPLASH);
        this.loadImages(this.SHURIKEN_ROTATION);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 70;
        this.throw();
        this.checkThrow();
    }

    throw() {
      if (this.bottlesInInventory < 0) {
        this.bottlesInInventory = 0;
      }
      if (this.bottlesInInventory > 0) {
        setInterval(() => {
          this.playAnimation(this.flipBottle);
        }, 50);
        this.speedY = 30;
        this.applyGravitiy();
        setInterval(() => {
          this.x += 8;
        }, 1000 / 60);
      }
    }

    checkThrow() {
        setInterval(() => {
          if (this.y >= 280) {
            this.y = 280;
            this.width = 160;
            this.height = 160;
            this.playAnimation(this.BOTTLE_SPLASH);
            setTimeout(() => {
              this.x = -1000;
            }, 100);
          }
        }, 50);
        setTimeout(() => {
          this.broken_bottle_sound.play();
        }, 500);
      }
}