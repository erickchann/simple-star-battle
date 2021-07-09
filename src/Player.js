class Player {
    constructor() {
        this.x = 100;
        this.y = (h / 2) - (player.offsetHeight / 2);

        this.update(this.x, this.y);
    }

    update(x, y) {
        this.x = x;
        this.y = y;
        
        player.style.left = `${x}px`;
        player.style.top = `${y}px`;
    }
}