class ThrowableShuriken extends MovableObject {
    SHURIKEN_ROTATION = [
      'img/10_otherTools/shuriken/shuriken-0.png',
      'img/10_otherTools/shuriken/shuriken-1.png',
      'img/10_otherTools/shuriken/shuriken-2.png',
      'img/10_otherTools/shuriken/shuriken-3.png',
      'img/10_otherTools/shuriken/shuriken-4.png',
      'img/10_otherTools/shuriken/shuriken-5.png',
      'img/10_otherTools/shuriken/shuriken-6.png',
      'img/10_otherTools/shuriken/shuriken-7.png'
    ];
    throw_shuriken_sound = new Audio('audio/shuriken_throw_sound.mp3');
    world;

    constructor(x, y, world) {
        super().loadImage('img/10_otherTools/shuriken/shuriken-0.png');
        this.loadImages(this.SHURIKEN_ROTATION);
        this.world = world;
        this.x = x;
        this.y = y;
        this.height = 50;
        this.width = 50;
        this.throwShuriken();
        this.checkShurikenThrow();
    }

    /**
     * Throwing the shuriken.
     * 
     * @method
     * @name throwShuriken
     * @kind method
     * @memberof ThrowableShuriken
     * @returns {void}
     */
    throwShuriken() {
      // can only throw shurikens, when coinscollected are over 5
      if (this.world.coinsCollected.length >= 5) {
        setInterval(() => {
          this.playAnimation(this.SHURIKEN_ROTATION);
        });
        this.speedY = 5;
        this.applyGravity();
        setInterval(() => {
          this.x += 20;
        }, 1000/60);
      }
    }

    /**
     * It checks if the shuriken is thrown.
     * 
     * @method
     * @name checkShurikenThrow
     * @kind method
     * @memberof ThrowableShuriken
     * @returns {void}
     */
    checkShurikenThrow() {
      setInterval(() => {
        if (this.y >= 280) {
          this.y = 280;
          this.width = 60;
          this.height = 60;
          setTimeout(() => {
            this.x = -10;
          }, 100);
        }
      }, 50);
      setTimeout(() => {
        this.throw_shuriken_sound.play();
      }, 500);
    }
}