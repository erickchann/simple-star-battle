class Game {
    constructor() {
        this.player = new Player();
        this.laser = [];

        this.listener();
        this.init();
    }

    init() {
        this.generateEnemy()
    }
    
    generateEnemy() {
        setInterval(() => {
            new Enemy();
        }, Math.random() * 3000);
    }

    listener() {
        document.addEventListener('mousemove', (e) => {
            let left = e.clientX - gameArea.offsetLeft - player.offsetWidth / 2;
            let right = e.clientY - gameArea.offsetTop - player.offsetHeight / 2;
            this.player.update(left, right);
        });

        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 32) {
                new Laser(this.player.x + (player.offsetWidth), this.player.y + (player.offsetHeight / 2));
            }
        });
    }
}