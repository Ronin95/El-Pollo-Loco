class BackgroundObject extends MovableObject {
    width = 721;
    height = 480;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
    }
}