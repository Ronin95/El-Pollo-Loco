class Level {
    enemies;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    bottlesAmount;
    shurikens;
    level_end_x = 7500;

    constructor(enemies, coins, bottles, clouds, backgroundObjects, bottlesAmount, shurikens) {
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottlesAmount = bottlesAmount;
        this.shurikens = shurikens;
    }
}