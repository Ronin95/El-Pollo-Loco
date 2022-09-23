class Level {
    enemies;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    bottlesAmount;
    level_end_x = 7500;

    constructor(enemies, coins, bottles, clouds, bottlesAmount, backgroundObjects) {
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.bottlesAmount = bottlesAmount;
        this.backgroundObjects = backgroundObjects;
    }
}