class World {
    character = new Character();
    birdsBackground = new Birds();
    eagle = new Eagle();
    level = level1;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    runPepe = true;
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    throwableObjects = [];
    bottlesCollected = [];
    coinsCollected = [];
    
    /* Sounds */
    chickens_1_sound = new Audio('audio/audio_chicken_1.mp3');
    chickens_2_sound = new Audio('audio/audio_chicken_2.mp3');
    throw_bottle_sound = new Audio('audio/audio_throw_bottle.mp3');
    broken_bottle_sound = new Audio('audio/breakbottle.mp3');
    use_shuriken_sound = new Audio('audio/shuriken_sound.mp3');
    collect_coin_sound = new Audio('audio/coin.mp3');
    collect_bottle_sound = new Audio('audio/collect_bottle.mp3');
    jump_pepe_sound = new Audio('audio/jump.mp3');
    hurt_pepe_sound = new Audio('audio/ouch.mp3');
    dead_pepe_sound = new Audio('audio/Pepe_dies.mp3');
    pepe_walking_sound = new Audio('audio/walking.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.createRandomWorld();
        this.draw();
        this.setWorld();
        this.collisionOfObjects();
        this.checkCollisions();
        this.changeBottlesAxis();
        this.checkGameStatus();
    }

    /**
     * Creating a random number of clouds, coins, bottles and chickens.
     * 
     * @method
     * @name createRandomWorld
     * @kind method
     * @memberof World
     * @returns {void}
     */
    createRandomWorld() {
        let randomNum = Math.floor(Math.random()*20)+5; // Random number between 5 and 19
        console.log(randomNum, 'random number of created enemies, clouds, coins and bottles');
        // Random number of clouds
        for (let cloud = 0; cloud <= randomNum; cloud++) {
            this.level.clouds.push(new Cloud())
        }
        // Random number of coins
        for (let coin = 0; coin <= randomNum; coin++) {
            this.level.coins.push(new Coin())
        }
        // Random number of chickens
        for (let chicken = 0; chicken <= randomNum; chicken++) {
          this.level.enemies.push(new Chicken())
        }
        // Random number of smaller chickens
        for (let smallChickens = 0; smallChickens <= randomNum; smallChickens++) {
          this.level.enemies.push(new ChickenSmall())
        }
        // Random number of bottles
        for (let bottle = 0; bottle <= randomNum; bottle++) {
            this.level.bottles.push(new Bottle())
        }
    }

    /**
     * Setting the world for the character.
     * 
     * @method
     * @name setWorld
     * @kind method
     * @memberof World
     * @returns {void}
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Checking if the character is throwing a bottle or shuriken.
     * Or if the character is collecting the coin or bottle
     * 
     * @method
     * @name collisionOfObjects
     * @kind method
     * @memberof World
     * @returns {void}
     */
     collisionOfObjects() {
      setInterval(() => {
        this.checkThrowObjects();
      }, 500);
  
      setInterval(() => {
        this.checkCollectCoin();
        this.checkCollectBottle();
      }, 100);
    }

    /**
     * Checking if the character is throwing a bottle or shuriken.
     * 
     * @method
     * @name checkThrowObjects
     * @kind method
     * @memberof World
     * @returns {void}
     */
    checkThrowObjects() {
        if (this.keyboard.B && this.bottlesCollected.length > 0) {
            let bottle = new ThrowableObject(this.character.x+50, this.character.y+80, this);
            this.throwableObjects.push(bottle);
            // subtract 1 bottle from the array bottlesCollected
            setInterval(() => {
              this.level.enemies.forEach((enemy, indexEnemy) => {
                if (bottle.collidingPepe(enemy)) {
                  this.level.enemies[indexEnemy].energy -= 2;
                }
                if (this.level.enemies[indexEnemy].energy <= 0) {
                  this.level.enemies[indexEnemy].energy = 0;
                }
              });
            }, 1000 / 60);
        }
    }

    /**
     * Checking if the character is colliding with an enemy 
     * and if it is, it will remove energy from the enemy.
     * 
     * @method
     * @name checkCollisions
     * @kind method
     * @memberof World
     * @returns {void}
     */
    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy, indexEnemy) => {
              if (this.character.collidingPepe(enemy) && this.character.y + this.character.height < 420) {
                this.level.enemies[indexEnemy].energy -= 1;
              }
            });
          }, 1000 / 60);
      
          setInterval(() => {
            this.level.enemies.forEach((enemy, indexEnemy) => {
              if (this.character.collidingPepe(enemy) && this.level.enemies[indexEnemy].energy > 0 && this.runPepe == true) {
                this.character.hit();
                this.hurt_pepe_sound.play();
                this.healthBar.setHealth(this.character.energy);
              }
            });
          }, 200);
    }

    /**
     * Changing the axis of the bottles.
     * 
     * @method
     * @name changeBottlesAxis
     * @kind method
     * @memberof World
     * @returns {void}
     */
    changeBottlesAxis() {
      const otherBottle = (bottles, s) =>
        bottles.filter((i, j) => j % s === s - 1);
  
      otherBottle(this.level.bottles, 2).forEach((element) => {
        element.img.src = "img/6_salsa_bottle/2_salsa_bottle_on_ground.png";
      });
    }
    
    
    /**
     * Drawing the world.
     * 
     * @method
     * @name draw
     * @kind method
     * @memberof World
     * @returns {void}
     */
    draw() {
      if (this.runPepe == true) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        
        this.addBackgroundObjects(); // All the clouds and the desert
        this.moveStatusbarsWithCamera(); // All the statusbars are moved with the camera perspective
        this.addAnimatedBackgroundObjects(); // Animated background objects are the birds in right top corner and the eagle

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        // Draw is being called constantly
        self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
      } else if (this.runPepe == false) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return;
      }
    }

    addAnimatedBackgroundObjects() {
      this.addToMap(this.eagle);
    }

    /**
     * Adding the clouds and background objects to the map.
     * 
     * @method
     * @name addBackgroundObjects
     * @kind method
     * @memberof World
     * @returns {void}
     */
    addBackgroundObjects() {
      this.addObjectsToMap(this.level.backgroundObjects);
      this.addObjectsToMap(this.level.clouds);
    }

    /**
     * Checking if the character is colliding with a 
     * coin and if it is, it will remove the coin from
     *  the array and add it to the coinsCollected array.
     * 
     * @method
     * @name checkCollectCoin
     * @kind method
     * @memberof World
     * @returns {void}
     */
    checkCollectCoin() {
      this.level.coins.forEach((coin, indexCoins) => {
        if (this.character.collidingCoin(coin) && this.runPepe == true) {
          this.collect_coin_sound.play();
          this.coinsCollected.push(coin);
          console.log(indexCoins, 'indexCoins');
          console.log(this.coinsCollected.length, 'collected coins aus coinsCollected Array in world.class.js');
          this.level.coins.splice(indexCoins, 1);
          // this.coinBar.setCoins(this.level.coins.length);
        }
      });
    }

    /**
     * It checks if the character is dead or if the enemy is dead.
     * 
     * @method
     * @name checkGameStatus
     * @kind method
     * @memberof World
     * @returns {void}
     */
    checkGameStatus() {
      setInterval(() => {
        if (this.character.energy <= 0) {
          removeKeyBoard();
          enableEndscreenLost();
          this.runPepe = false;
        } else if (this.level.enemies[0].energy <= 0) {
          removeKeyBoard();
          enableEndscreenWon();
          this.runPepe = false;
        }
      }, 500);
    }

    /**
     * Checking if the character is colliding with a bottle 
     * and if it is, it will remove the bottle from the array 
     * and add it to the bottlesCollected array.
     * 
     * @method
     * @name checkCollectBottle
     * @kind method
     * @memberof World
     * @returns {void}
     */
    checkCollectBottle() {
      this.level.bottles.forEach((bottle, indexBottles) => {
        if (this.character.collidingBottle(bottle) && this.runPepe == true) {
          this.collect_bottle_sound.play();
          this.bottlesCollected.push(bottle);
          console.log(this.bottlesCollected.length, 'collected bottles aus bottlesCollect Array in world.class.js');
          this.level.bottles.splice(indexBottles, 1);
        }
      });
    }

    /**
     * Moving the statusbars with the camera perspective.
     * 
     * @method
     * @name moveStatusbarsWithCamera
     * @kind method
     * @memberof World
     * @returns {void}
     */
    moveStatusbarsWithCamera() {
        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed objects
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.birdsBackground);
        this.ctx.translate(this.camera_x, 0); 
    }
    
    /**
     * Adding objects to the map.
     * 
     * @method
     * @name addObjectsToMap
     * @kind method
     * @memberof World
     * @param {any} objects
     * @returns {void}
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    
    /**
     * Adding the object to the map.
     * 
     * @method
     * @name addToMap
     * @kind method
     * @memberof World
     * @param {any} mo
     * @returns {void}
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        
        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx); - draws a frame around the character and chickens

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * Flipping the image.
     * 
     * @method
     * @name flipImage
     * @kind method
     * @memberof World
     * @param {any} mo
     * @returns {void}
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Flipping the image back.
     * 
     * @method
     * @name flipImageBack
     * @kind method
     * @memberof World
     * @param {any} mo
     * @returns {void}
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    /**
     * A method that plays chicken sounds.
     * 
     * @method
     * @name chickenSounds
     * @kind method
     * @memberof World
     * @returns {void}
     */
    chickenSounds() {
        setInterval(() => {
          if (this.runPepe == true) {
            this.chickens_1_sound.volume = 0.05;
            this.chickens_1_sound.play();
          }
        }, 10000);
    
        setInterval(() => {
          if (this.runPepe == true) {
            this.chickens_2_sound.volume = 0.05;
            this.chickens_2_sound.play();
          }
        }, 14000);
      }
}