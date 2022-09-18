class Level {
    enemies;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    bottlesAmount;
    level_end_x = 2500;

    constructor(enemies, coins, bottles, clouds, backgroundObjects, bottlesAmount) {
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottlesAmount = bottlesAmount;
    }
}